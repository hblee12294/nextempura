import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeDocuement from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import rehypeExternalLinks from "rehype-external-links";
import rehypeSlug from "rehype-slug";
import GithubSlugger from "github-slugger";

export async function parseMarkdown(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(remarkGfm)
    .use(remarkToc)
    .use(rehypeDocuement)
    .use(rehypeFormat)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .use(rehypeExternalLinks, {
      rel: ["nofollow"],
      target: "_blank",
    })
    .use(rehypeHighlight)
    .process(markdown);

  return result;
}

export async function markdownToHTML(markdown: string) {
  const vfile = await parseMarkdown(markdown);
  return vfile.toString();
}

export interface Heading {
  level: number;
  text: string;
  slug: string;
}

export async function getHeadings(markdown: string): Promise<Heading[]> {
  const slugger = new GithubSlugger();
  const headings: Heading[] = [];

  const processor = unified().use(remarkParse).use(remarkGfm);
  const tree = processor.parse(markdown);

  const { visit } = await import("unist-util-visit");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  visit(tree, "heading", (node: any) => {
    const text = node.children
      .filter(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (child: any) => child.type === "text" || child.type === "inlineCode",
      )
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((child: any) => child.value)
      .join("");

    const slug = slugger.slug(text);

    headings.push({
      level: node.depth,
      text,
      slug,
    });
  });

  return headings;
}
