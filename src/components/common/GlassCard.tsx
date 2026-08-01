import clsx from "clsx";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

const GlassCard = ({ children, className }: GlassCardProps) => {
  return (
    <div
      className={clsx(
        "rounded-[36px] border border-white/40 bg-white/70 backdrop-blur-xl shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;