import { promises as fs } from "fs";
import { join } from "path";
import { DOCS_PATH } from "@/configs/docs";

interface Product {
  id: string;
  docPath: string;
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

    return folders.map((folder) => ({
      id: folder.name,
      docPath: `/${folder.name}`,
    }));
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
