import clsx from "clsx";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

const Badge = ({ children, className }: BadgeProps) => {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border border-neutral-300 bg-white px-4 py-2",
        "text-xs font-semibold uppercase tracking-[0.18em] text-neutral-600",
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;