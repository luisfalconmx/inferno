import React from "react";
import clsx from "clsx";
import styles from "./Button.module.css";

type ButtonProps = Readonly<{
  label: string;
  onClick: () => void;
  disabled?: boolean;
}>;

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(styles["Button"], {
        [styles["Button--disabled"]]: disabled,
      })}
    >
      {label}
    </button>
  );
};
