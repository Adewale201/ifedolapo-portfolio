import type { LucideIcon } from "lucide-react";
import clsx from "clsx";

interface IconTextProps {
  icon: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

const IconText = ({
  icon: Icon,
  children,
  className,
}: IconTextProps) => {
  return (
    <div
      className={clsx(
        "flex items-center gap-3 text-neutral-600",
        className
      )}
    >
      <Icon
        size={18}
        strokeWidth={1.75}
        className="text-[#D95D39]"
      />

      <span>{children}</span>
    </div>
  );
};

export default IconText;