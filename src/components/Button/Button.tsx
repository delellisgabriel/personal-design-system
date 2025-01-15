import { ComponentProps } from "react";
import clsx from "clsx";

import styles from "./Button.module.css";

export type Variant = "primary" | "secondary" | "destructive";

export type Size = "small" | "medium" | "large";

type ButtonProps = ComponentProps<"button"> & {
  variant?: Variant;
  size?: Size;
};

export const Button = ({
  variant = "primary",
  size = "medium",
  className,
  ...props
}: ButtonProps) => {
  const classes = clsx(
    "bg-indigo-500 hover:bg-indigo-400",
    styles.button,
    styles[variant],
    styles[size],
    className
  );
  return <button className={classes} {...props} />;
};
