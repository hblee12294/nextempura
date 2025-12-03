import styles from "./page.module.scss";
import { getDoc } from "@/utils/docs";
import { markdownToHTML, getHeadings } from "@/utils/markdown";
import { TableOfContents } from "@/components/TableOfContents";

import "highlight.js/styles/stackoverflow-dark.css";

export default async function Doc({
  params,
}: {
  params: { locale: string; slug: string[] };
}) {
  const { locale, slug } = params;

  const doc = await getDoc(
    slug,
    ["title", "date", "slugs", "content", "ogImage", "coverImage"],
    locale,
  );
  const contentMarkdown = (doc.content as string) || "";
  const content = await markdownToHTML(contentMarkdown);
  const headings = await getHeadings(contentMarkdown);

  return (
    <main className={styles.page}>
      <article dangerouslySetInnerHTML={{ __html: content }}></article>

      <aside className={styles.toc}>
        <TableOfContents headings={headings} />
      </aside>
    </main>
  );
}
