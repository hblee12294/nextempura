export interface NavItem {
  id: string;
  path: string;
}

export interface NavItemWithName extends NavItem {
  name: string;
}

export const NAV_ITEMS: NavItem[] = [
  {
    id: "docs",
    path: "/docs",
  },
  {
    id: "about",
    path: "/about",
  },
];
