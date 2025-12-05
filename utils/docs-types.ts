export interface DocTreeNode {
  title: string;
  slugs: string[];
  index?: number;
  children?: DocTreeNode[];
  hasIndex?: boolean;
}

export function standardizeDocName(name: string) {
  return name
    .replace(/-/g, " ")
    .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
}

export function standardizeDocSlug(slug: string) {
  return slug.toLocaleLowerCase();
}
