import { promises as fs } from "fs";
import { join } from "path";
import matter from "gray-matter";
import { DOCS_PATH } from "@/configs/docs";

export interface Product {
  id: string;
  docPath: string;
  title?: string;
}

/**
 * Dynamically get products based on top-level folders in docs directory
 * This reads the actual folder structure from docs/[locale]/ at build time
 */
export async function getProducts(locale: string = "en"): Promise<Product[]> {
  const docsDirectory = join(process.cwd(), DOCS_PATH, locale);

  try {
    const entries = await fs.readdir(docsDirectory, { withFileTypes: true });
    const folders = entries.filter((entry) => entry.isDirectory());

    const products = await Promise.all(
      folders.map(async (folder) => {
        const folderPath = join(docsDirectory, folder.name);
        const indexMdPath = join(folderPath, "index.md");

        try {
          // Check if index.md exists
          const fileContent = await fs.readFile(indexMdPath, "utf-8");
          const { data } = matter(fileContent);

          return {
            id: folder.name,
            docPath: `/${folder.name}`,
            title: data.title,
          };
        } catch {
          // index.md does not exist
          try {
            const files = await fs.readdir(folderPath);
            const mdFiles = files.filter(
              (file) => file.endsWith(".md") && file !== "index.md",
            );

            if (mdFiles.length === 0) {
              return {
                id: folder.name,
                docPath: `/${folder.name}`, // Fallback
              };
            }

            // Read all files to get index
            const docs = await Promise.all(
              mdFiles.map(async (file) => {
                const content = await fs.readFile(
                  join(folderPath, file),
                  "utf-8",
                );
                const { data } = matter(content);
                return {
                  filename: file,
                  index: data.index as number | undefined,
                  slug: file.replace(/\.md$/, ""),
                };
              }),
            );

            // Sort
            docs.sort((a, b) => {
              if (a.index !== undefined && b.index !== undefined) {
                return a.index - b.index;
              }
              if (a.index !== undefined) return -1;
              if (b.index !== undefined) return 1;
              return a.filename.localeCompare(b.filename);
            });

            const firstDoc = docs[0];
            return {
              id: folder.name,
              docPath: `/${folder.name}/${firstDoc.slug}`,
              // No title as requested
            };
          } catch (e) {
            console.error(`Error reading folder ${folder.name}:`, e);
            return {
              id: folder.name,
              docPath: `/${folder.name}`,
            };
          }
        }
      }),
    );

    return products;
  } catch (error) {
    console.error("Error reading docs directory:", error);
    return [];
  }
}

// Legacy static export for backward compatibility (if needed)
// You can remove this if you fully switch to dynamic loading
export const PRODUCTS: Product[] = [
  {
    id: "getting-started",
    docPath: "/getting-started",
  },
  {
    id: "configuration",
    docPath: "/configuration",
  },
  {
    id: "content",
    docPath: "/content",
  },
  {
    id: "customization",
    docPath: "/customization",
  },
];
