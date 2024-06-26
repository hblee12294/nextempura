import styles from "./layout.module.scss";
import { SideNav } from "@/components";
import { getDocTree } from "@/utils/docs";

export default async function Layout({
  params,
  children,
}: {
  params: { locale: string };
  children: React.ReactNode;
}) {
  const locale = params.locale;
  const docTree = await getDocTree(undefined, locale);

  return (
    <div className={styles.layout}>
      <div>
        <SideNav tree={docTree}></SideNav>
      </div>

      {children}
    </div>
  );
}
