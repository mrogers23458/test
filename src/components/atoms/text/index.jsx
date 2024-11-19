import React from "react";
import styles from "./text.module.css";

export default function Text({ children, variant = "body" }) {
  const textStyle = styles[variant];

  return <p className={textStyle}>{children}</p>;
}
