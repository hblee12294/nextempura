import { promises as fs } from "fs";
import { join } from "path";
import matter from "gray-matter";

import { DOCS_PATH } from "@/configs/docs";

// interface Author {
//   name: string;
//   picture: string;
// }

// interface DocType {
//   slug: string;
//   title: string;
//   date: string;
//   coverImage: string;
//   author: Author;
//   except: string;
//   ogImage: {
//     url: string;
//   };
//   content: string;
// }

type DocItem = {
  [key: string]: string | string[] | number | undefined;
  slugs: string[];
  locale?: string;
};

const docsDirectory = join(process.cwd(), DOCS_PATH);

function joinDocsDirectory(...paths: string[]) {
  return join(docsDirectory, ...paths);
}

export function standardizeDocSlug(slug: string) {
  return slug.toLocaleLowerCase();
}

export function standardizeDocName(name: string) {
  return name
    .replace(/-/g, " ")
    .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
}

export async function traverseDirectory(
  rootPath: string,
  onPath: (options: {
    paths: string[];
    isDir: boolean;
    fullPath: string;
  }) => void,
  locale = ""
) {
  const stack: string[][] = [[rootPath]];

  /* DFS */
  while (stack.length) {
    const paths = stack.pop()!;
    const fullPath = joinDocsDirectory(locale, ...paths);
    const stats = await fs.lstat(fullPath);
    const isDir = stats.isDirectory();

    if (isDir) {
      const subPaths = await fs.readdir(fullPath);

      subPaths.forEach((subPath) => {
        stack.push([...paths, standardizeDocSlug(subPath)]);
      });
    }

    onPath({ paths, isDir, fullPath });
  }
}

export async function getDoc(
  slugs: string[],
  fields: string[] = [],
  locale = ""
) {
  slugs[slugs.length - 1] = slugs[slugs.length - 1].replace(/\.md$/, "");

  const fullPath = joinDocsDirectory(locale, ...slugs) + ".md";

  const fileContents = await fs.readFile(fullPath, "utf-8");
  const { data, content } = matter(fileContents);

  const item: DocItem = {
    slugs: slugs.filter((slug) => slug).map((slug) => standardizeDocSlug(slug)),
    locale,
  };

  fields.forEach((field) => {
    if (field === "content") {
      item.content = content;
    } else if (field === "title") {
      item.title = data[field] || standardizeDocName(slugs[slugs.length - 1]);
    } else if (data[field] !== undefined) {
      item[field] = data[field];
    }
  });

  return item;
}

export async function getAllDocs(
  fields: string[] = [],
  locales: string[] = []
) {
  const docs: DocItem[] = [];

  for (const locale of locales) {
    traverseDirectory("", async ({ paths, isDir }) => {
      const docName = paths[paths.length - 1];
      if (!isDir && docName !== "index.md" && docName.endsWith(".md")) {
        const doc = await getDoc(paths, fields, locale);
        docs.push(doc);
      }
    });
  }

  return docs;
}

export interface DocTreeNode {
  title: string;
  slugs: string[];
  index?: number;
  children?: DocTreeNode[];
}

function createNode(slugs: string[], title?: string): DocTreeNode {
  return {
    title: title || slugs[slugs.length - 1],
    slugs,
    children: [],
  };
}

function createLeaf(slugs: string[], title?: string): DocTreeNode {
  return {
    title: title || slugs[slugs.length - 1],
    slugs,
  };
}

async function constructDocTree(
  slugs: string[],
  tree: DocTreeNode,
  locale: string
) {
  const fullPath = joinDocsDirectory(locale, ...slugs);
  const subDirs = await fs.readdir(fullPath);

  for (const dir of subDirs) {
    const target = join(fullPath, dir);

    const stats = await fs.stat(target);
    if (stats.isFile()) {
      if (dir === "index.md") {
        const doc = await getDoc([...slugs, dir], ["title", "index"], locale);

        if (doc.title !== undefined) {
          tree.title = doc.title as string;
        }
        if (doc.index !== undefined) {
          tree.index = doc.index as number;
        }
      } else if (dir.endsWith(".md")) {
        const currentSlugs = [
          ...slugs,
          standardizeDocSlug(dir.replace(/\.md$/, "")),
        ];
        const doc = await getDoc([...slugs, dir], ["title", "index"], locale);
        const leaf = createLeaf(currentSlugs, doc.title as string);

        if (doc.index !== undefined) {
          leaf.index = doc.index as number;
        }

        tree.children?.push(leaf);
      }
    } else if (stats.isDirectory()) {
      const currentSlugs = [...slugs, standardizeDocSlug(dir)];

      const node = createNode(currentSlugs);
      tree.children?.push(node);
      constructDocTree(currentSlugs, node, locale);
    }
  }
}

export async function getDocTree(root?: string, locale = "") {
  const tree: DocTreeNode = {
    title: root ? root : "",
    slugs: root ? [root] : [],
    children: [],
  };

  await constructDocTree(tree.slugs, tree, locale);

  return tree;
}
