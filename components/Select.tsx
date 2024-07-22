import {
  Menu,
  MenuItem as MenuItemInner,
  MenuButtonModifiers,
  RenderProp,
  MenuItemProps,
} from "@szhsin/react-menu";
import { ReactNode } from "react";

import styles from "./Select.module.scss";

interface Option {
  value: string | number;
  label?: ReactNode;
}

interface SelectProps {
  trigger: RenderProp<MenuButtonModifiers, React.ReactElement>;
  options: Option[];
  onChange?: (value: string | number) => void;
}

const menuClassName = ({ state }: { state: string }) =>
  state === "opening"
    ? styles.menuOpening
    : state === "closing"
      ? styles.menuClosing
      : styles.menu;

const menuItemClassName = ({
  hover,
  disabled,
}: {
  hover: boolean;
  disabled: boolean;
}) =>
  disabled
    ? styles.menuItemDisabled
    : hover
      ? styles.menuItemHover
      : styles.menuItem;

const MenuItem = (props: MenuItemProps) => (
  <MenuItemInner {...props} className={menuItemClassName} />
);

export function Select(props: SelectProps) {
  const { trigger, options, onChange } = props;

  return (
    <Menu
      transition
      menuClassName={menuClassName}
      menuButton={trigger}
      onItemClick={(e) => onChange && onChange(e.value)}
    >
      {options.map(({ value, label }) => (
        <MenuItem key={value} value={value}>
          {label ?? value}
        </MenuItem>
      ))}
    </Menu>
  );
}
