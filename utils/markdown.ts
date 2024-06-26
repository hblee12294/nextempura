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

export async function parseMarkdown(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(remarkGfm)
    .use(remarkToc)
    .use(rehypeDocuement)
    .use(rehypeFormat)
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
