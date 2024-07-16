import { ComponentProps } from "react";
import cn from "classnames";

import styles from "./IconLink.module.scss";
import { Link } from "@/navigation";

export type IconLinkProps = ComponentProps<typeof Link>;

export function IconLink(props: IconLinkProps) {
  const { className, children, ref, ...otherProps } = props;

  return (
    <Link className={cn(styles.link, className)} ref={ref} {...otherProps}>
      {children}
    </Link>
  );
}
