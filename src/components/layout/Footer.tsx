const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-[#F7F5F2] py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-[var(--color-secondary)] md:flex-row">
        <p>
          © {new Date().getFullYear()} Ifedolapo Egberongbe.
          All rights reserved.
        </p>

        <p>
          Designed & Built with React + TypeScript
        </p>
      </div>
    </footer>
  );
};

export default Footer;