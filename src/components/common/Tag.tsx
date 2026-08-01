interface TagProps {
  children: React.ReactNode;
}

const Tag = ({ children }: TagProps) => {
  return (
    <span
      className="
        inline-flex
        items-center
        rounded-full
        bg-[var(--color-accent-light)]
        px-3
        py-1
        text-xs
        font-medium
        text-[var(--color-accent)]
      "
    >
      {children}
    </span>
  );
};

export default Tag;