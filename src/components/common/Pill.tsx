import type { ReactNode } from "react";

interface PillProps {
  children: ReactNode;
}

const Pill = ({ children }: PillProps) => {
  return (
    <span className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium shadow-sm">
      {children}
    </span>
  );
};

export default Pill;