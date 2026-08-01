import clsx from "clsx";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) => {
  return (
    <div
      className={clsx(
        "mb-16 max-w-3xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
          {eyebrow}
        </p>
      )}

      <h2 className="font-['Space_Grotesk'] text-4xl font-bold leading-tight text-[var(--color-primary)] md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg leading-8 text-[var(--color-secondary)]">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;