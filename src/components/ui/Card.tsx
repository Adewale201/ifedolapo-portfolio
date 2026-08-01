import type { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={clsx(
        "rounded-3xl border border-gray-200 bg-white p-8 shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;