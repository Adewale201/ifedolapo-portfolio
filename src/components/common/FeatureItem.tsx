import { CheckCircle2, type LucideIcon } from "lucide-react";

interface FeatureItemProps {
  children: React.ReactNode;
  icon?: LucideIcon;
}

const FeatureItem = ({
  children,
  icon: Icon = CheckCircle2,
}: FeatureItemProps) => {
  return (
    <div className="flex items-center gap-3">
      <Icon
        size={18}
        strokeWidth={2}
        className="flex-shrink-0 text-[var(--color-accent)]"
      />

      <span className="text-[var(--color-secondary)]">
        {children}
      </span>
    </div>
  );
};

export default FeatureItem;