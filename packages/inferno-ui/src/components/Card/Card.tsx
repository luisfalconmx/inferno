import React from "react";
import styles from "./Card.module.css";

type CardProps = Readonly<{
  children: React.ReactNode;
}>;

export const Card: React.FC<CardProps> = ({ children }) => {
  return <div className={styles["Card"]}>{children}</div>;
};
