import { ReactNode } from "react";

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  icon?: ReactNode;
}

export interface MegaMenuSection {
  title?: string;
  items: NavItem[];
}

export interface MegaMenuCallout {
  title: string;
  description: string;
  href: string;
  linkText: string;
  variant?: "blue" | "gradient";
}

export interface MegaMenuData {
  sections: MegaMenuSection[];
  callout?: MegaMenuCallout;
}

export interface NavigationItem {
  label: string;
  href: string;
  megaMenu?: MegaMenuData;
}