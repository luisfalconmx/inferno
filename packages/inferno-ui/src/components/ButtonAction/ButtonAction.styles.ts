import styled from "styled-components";
import type { ButtonActionProps } from "./ButtonAction.d";

export const StyledButtonAction = styled.button<ButtonActionProps>`
  display: flex;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-size: ${(props) =>
    props.size === "sm"
      ? "14px"
      : props.size === "md"
      ? "16px"
      : props.size === "lg"
      ? "20px"
      : "16px"};
  font-weight: 500;
  background-color: ${(props) =>
    props.variant === "outline" || props.variant === "ghost"
      ? "transparent"
      : "#a41d36"};
  color: ${(props) =>
    props.variant === "outline" || props.variant === "ghost"
      ? "#a41d36"
      : "#ffffff"};
  border: ${(props) =>
    props.variant === "outline" ? "1px solid #a41d36" : "none"};
  cursor: pointer;
  padding: ${(props) =>
    props.size === "sm"
      ? "6.5px 18px"
      : props.size === "md"
      ? "12px 24px"
      : props.size === "lg"
      ? "13px 26px"
      : "12px 24px"};
  border-radius: ${(props) =>
    props.rounded === "sm"
      ? "4px"
      : props.rounded === "md"
      ? "10px"
      : props.rounded === "lg"
      ? "20px"
      : props.rounded === "xl"
      ? "50px"
      : "0px"};
  text-decoration: ${(props) => (props.underline ? "underline" : "none")};
  transition: all ease 0.2s;

  &:hover {
    box-shadow: ${(props) =>
      props.variant === "outline"
        ? "0px 4px 10px 0px #A41D3666"
        : props.variant === "ghost"
        ? "none"
        : "0px 4px 14px 0px #A41D3699"};
    color: ${(props) =>
      props.variant === "outline"
        ? "#A41D36"
        : props.variant === "ghost"
        ? "#6E0011"
        : "#ffffff"};
  }

  &:active {
    background-color: ${(props) =>
      props.variant === "outline"
        ? "#F6F6F6"
        : props.variant === "ghost"
        ? "transparent"
        : "#6E0011"};
  }

  &:disabled {
    background-color: ${(props) =>
      props.variant === "outline" || props.variant === "ghost"
        ? "transparent"
        : "#C68091"};
    border-color: ${(props) =>
      props.variant === "outline" ? "#C68091" : "none"};
    color: ${(props) =>
      props.variant === "outline"
        ? "#C68091"
        : props.variant === "ghost"
        ? "#73797E"
        : "#ffffff"};
  }
`;
