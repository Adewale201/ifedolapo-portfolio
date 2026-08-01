interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

const SectionHeading = ({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) => {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)] sm:text-sm">
        {eyebrow}
      </p>

      <h2 className="mt-4 font-['Space_Grotesk'] text-3xl font-bold leading-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-base leading-7 text-[var(--color-secondary)] sm:text-lg sm:leading-8">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;