import GlassCard from "../../components/common/GlassCard";

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  badge?: string;
  isLast?: boolean;
}

const TimelineItem = ({
  title,
  company,
  period,
  description,
  badge,
  isLast = false,
}: TimelineItemProps) => {
  return (
    <div className="relative grid gap-8 md:grid-cols-[70px_1fr]">
      {/* Timeline */}
      <div className="relative flex justify-center">
        {!isLast && (
          <div className="absolute top-5 bottom-0 w-px bg-neutral-300" />
        )}

        <div
          className={`relative z-10 mt-2 rounded-full border-4 border-[var(--color-background)] ${
            badge
              ? "h-5 w-5 bg-[var(--color-accent)] shadow-[0_0_18px_rgba(230,74,46,0.35)]"
              : "h-4 w-4 bg-[var(--color-accent)]"
          }`}
        />
      </div>

      <GlassCard className="p-8">
        <span className="text-sm font-medium text-[var(--color-accent)]">
          {period}
        </span>

        <div className="mt-3 flex flex-wrap items-center gap-3">
          <h3 className="font-['Space_Grotesk'] text-2xl font-bold">
            {title}
          </h3>

          {badge && (
            <span className="rounded-full bg-[var(--color-accent-light)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)]">
              {badge}
            </span>
          )}
        </div>

        <p className="mt-2 font-medium text-neutral-500">
          {company}
        </p>

        <p className="mt-5 leading-8 text-[var(--color-secondary)]">
          {description}
        </p>
      </GlassCard>
    </div>
  );
};

export default TimelineItem;