import type { ButtonActionProps } from "./ButtonAction.d";
import { StyledButtonAction } from "./ButtonAction.styles.ts";

export const ButtonAction = ({
  size = "md",
  variant = "primary",
  rounded = "none",
  underline = false,
  ...props
}: ButtonActionProps) => (
  <StyledButtonAction
    size={size}
    variant={variant}
    rounded={rounded}
    underline={underline}
    {...props}
  >
    {props.children}
  </StyledButtonAction>
);
