"use client";

import { Link, usePathname } from "@/navigation";
import { type DocTreeNode, standardizeDocName } from "@/utils/docs-types";
import cn from "classnames";

import styles from "./SideNav.module.scss";
function Section({ node }: { node: DocTreeNode }) {
  return (
    <li className={styles.section}>
      <div className={styles.sectionHeader}>
        {node.hasIndex ? (
          <Link
            href={`/docs/${node.slugs.join("/")}`}
            className={styles.sectionTitle}
          >
            {standardizeDocName(node.title)}
          </Link>
        ) : (
          <span className={styles.sectionTitle}>
            {standardizeDocName(node.title)}
          </span>
        )}
      </div>
      <ul className={styles.sectionList}>{renderDocTree(node.children)}</ul>
    </li>
  );
}

function Leaf({ node, path }: { node: DocTreeNode; path: string }) {
  const pathname = usePathname();
  const href = `/docs/${path}`;
  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={cn(styles.link, {
          [styles.linkActive]: isActive,
        })}
      >
        {node.title}
      </Link>
    </li>
  );
}

function compareNodeByIndex(node1: DocTreeNode, node2: DocTreeNode) {
  if (node1.index === undefined && node2.index === undefined) {
    return 0;
  } else if (node1.index === undefined) {
    return 1;
  } else if (node2.index === undefined) {
    return -1;
  } else {
    return node1.index - node2.index;
  }
}

function renderDocTree(tree?: DocTreeNode[]) {
  if (!tree) return null;

  tree.sort(compareNodeByIndex);

  return tree.map((node) => {
    const path = node.slugs.join("/");

    if (node.children) {
      return <Section key={path} node={node} />;
    } else {
      return <Leaf key={path} node={node} path={path}></Leaf>;
    }
  });
}

export function SideNav({ tree }: { tree: DocTreeNode }) {
  return (
    <aside className={styles.side}>
      <div className={styles.sectionHeader}>
        {tree.hasIndex ? (
          <Link
            href={`/docs/${tree.slugs.join("/")}`}
            className={styles.sectionTitle}
          >
            {standardizeDocName(tree.title)}
          </Link>
        ) : (
          <span className={styles.sectionTitle}>
            {standardizeDocName(tree.title)}
          </span>
        )}
      </div>
      <ul className={styles.nav}>{renderDocTree(tree.children)}</ul>
    </aside>
  );
}
