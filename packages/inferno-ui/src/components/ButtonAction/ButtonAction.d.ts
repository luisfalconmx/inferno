import type { ComponentProps, ReactNode } from "react";

export interface ButtonActionProps extends ComponentProps<"button"> {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "outline" | "ghost";
  rounded?: "none" | "sm" | "md" | "lg" | "xl";
  underline?: boolean;
}
