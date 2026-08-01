import clsx from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

const Button = ({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        // Layout
        "inline-flex items-center justify-center gap-2",

        // Shape & Spacing
        "rounded-full px-7 py-3",

        // Typography
        "text-sm font-medium",

        // Animation
        "transition-all duration-300 ease-out",

        // Accessibility
        "focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2",

        // Variants
        variant === "primary"
          ? [
              "bg-[var(--color-accent)]",
              "text-white",
              "shadow-md",

              "hover:bg-[var(--color-accent-hover)]",
              "hover:-translate-y-1",
              "hover:shadow-xl",

              "active:translate-y-0",
            ]
          : [
              "border",
              "border-[var(--color-border)]",
              "bg-[var(--color-surface)]",
              "text-[var(--color-primary)]",

              "hover:border-[var(--color-accent)]",
              "hover:text-[var(--color-accent)]",
              "hover:-translate-y-1",
              "hover:shadow-lg",

              "active:translate-y-0",
            ],

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;