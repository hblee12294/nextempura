import { Link } from "@/navigation";
import { type DocTreeNode, standardizeDocName } from "@/utils/docs";

import styles from "./SideNav.module.scss";

function Node({ node, path }: { node: DocTreeNode; path: string }) {
  return (
    <li>
      <div>
        <Link href={`/docs/${path}`}>{standardizeDocName(node.title)}</Link>
      </div>

      <ul>{renderDocTree(node.children)}</ul>
    </li>
  );
}

function Leaf({ node, path }: { node: DocTreeNode; path: string }) {
  return (
    <li>
      <Link href={`/docs/${path}`}>{node.title}</Link>
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
      return <Node key={path} node={node} path={path}></Node>;
    } else {
      return <Leaf key={path} node={node} path={path}></Leaf>;
    }
  });
}

export function SideNav({ tree }: { tree: DocTreeNode }) {
  return (
    <aside className={styles.side}>
      <ul className={styles.nav}>{renderDocTree(tree.children)}</ul>
    </aside>
  );
}
