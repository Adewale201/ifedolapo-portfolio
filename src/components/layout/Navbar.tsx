import { useEffect, useState } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import Container from "../ui/Container";
import Button from "../ui/Button";
import { navigationLinks } from "../../config/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>("section[id]")
  );

  const handleScroll = () => {
    const viewportCenter = window.innerHeight / 2;

    let closestSection = sections[0];
    let smallestDistance = Infinity;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const sectionCenter = rect.top + rect.height / 2;

      const distance = Math.abs(viewportCenter - sectionCenter);

      if (distance < smallestDistance) {
        smallestDistance = distance;
        closestSection = section;
      }
    });

    setActiveSection(closestSection.id);
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll, {
    passive: true,
  });

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

   

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container>
        <nav className="mt-6 flex h-16 items-center justify-between rounded-full border border-neutral-200 bg-white/70 px-6 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur-md">
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="font-['Space_Grotesk'] text-xl font-bold tracking-tight text-neutral-900"
          >
            IFEDOLAPO
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-3 md:flex">
            {navigationLinks.map((link) => {
              const isActive =
                activeSection === link.href.replace("#", "");

              return (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className={clsx(
                      "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                      isActive
                        ? "bg-[#D95D39] text-white shadow-md"
                        : "text-neutral-600 hover:bg-white hover:text-[#D95D39]"
                    )}
                  >
                    {link.title}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Resume */}
          <div className="hidden md:block">
            <a
  href="/Ifedolapo-Egberongbe-Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button>
    Resume
  </Button>
</a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-full p-2 transition hover:bg-neutral-100 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="mt-4 overflow-hidden rounded-3xl border border-neutral-200 bg-white p-6 shadow-lg backdrop-blur-md md:hidden"
            >
              <ul className="flex flex-col gap-3">
                {navigationLinks.map((link) => {
                  const isActive =
                    activeSection === link.href.replace("#", "");

                  return (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        onClick={closeMenu}
                        className={clsx(
                          "block rounded-xl px-4 py-3 font-medium transition-all duration-300",
                          isActive
                            ? "bg-[#D95D39] text-white"
                            : "text-neutral-700 hover:bg-neutral-100 hover:text-[#D95D39]"
                        )}
                      >
                        {link.title}
                      </a>
                    </li>
                  );
                })}
              </ul>

              <a
  href="/Ifedolapo-Egberongbe-Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button>
    Resume
  </Button>
</a>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
};

export default Navbar;