import styles from "./page.module.scss";
import { getDoc } from "@/utils/docs";
import { markdownToHTML } from "@/utils/markdown";

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
    locale
  );
  const content = await markdownToHTML((doc.content as string) || "");

  return (
    <main className={styles.page}>
      <article dangerouslySetInnerHTML={{ __html: content }}></article>

      <div></div>
    </main>
  );
}
