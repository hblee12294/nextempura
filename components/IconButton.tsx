import {
  forwardRef,
  Ref,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
} from "react";
import cn from "classnames";

import styles from "./IconButton.module.scss";

type IconButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const IconButton = forwardRef(
  (props: IconButtonProps, ref?: Ref<HTMLButtonElement>) => {
    const { className, children, ...otherProps } = props;

    return (
      <button
        className={cn(styles.button, className)}
        ref={ref}
        {...otherProps}
      >
        {children}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";
