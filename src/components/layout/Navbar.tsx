import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import Container from "../ui/Container";
import Button from "../ui/Button";
import { navigationLinks } from "../../config/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container>
        <nav className="mt-6 flex h-16 items-center justify-between rounded-full border border-neutral-200 bg-white/80 px-6 shadow-sm backdrop-blur-md">

          {/* Logo */}
          <a
            href="#home"
            className="font-['Space_Grotesk'] text-xl font-bold tracking-tight text-neutral-900"
            onClick={closeMenu}
          >
            IFEDOLAPO
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-8 md:flex">
            {navigationLinks.map((link) => (
              <li key={link.title}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-neutral-600 transition-colors duration-300 hover:text-[#D95D39]"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Resume Button */}
          <div className="hidden md:block">
            <Button>Resume</Button>
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
              <ul className="flex flex-col gap-5">
                {navigationLinks.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className="block text-base font-medium text-neutral-700 transition-colors hover:text-[#D95D39]"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>

              <Button
                className="mt-6 w-full"
                onClick={closeMenu}
              >
                Resume
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
};

export default Navbar;