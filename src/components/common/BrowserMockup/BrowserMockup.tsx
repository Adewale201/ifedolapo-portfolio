import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface BrowserMockupProps {
  images: string[];
  title: string;
}

const BrowserMockup = ({
  images,
  title,
}: BrowserMockupProps) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="overflow-hidden rounded-[28px] border border-neutral-200 bg-white shadow-2xl"
    >
      {/* Browser Header */}

      <div className="flex items-center gap-2 border-b bg-neutral-50 px-5 py-3">
        <div className="h-3 w-3 rounded-full bg-red-400" />

        <div className="h-3 w-3 rounded-full bg-yellow-400" />

        <div className="h-3 w-3 rounded-full bg-green-400" />

        <div className="ml-6 rounded-full bg-white px-5 py-1 text-sm text-neutral-500 shadow-sm">
          {title}
        </div>
      </div>

      {/* Image */}

      <div className="relative aspect-video overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={active}
            src={images[active]}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover"
            initial={{
              opacity: 0,
              scale: 1.05,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          />
        </AnimatePresence>
      </div>

      {/* Dots */}

      <div className="flex justify-center gap-3 py-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`h-2.5 rounded-full transition-all ${
              active === index
                ? "w-8 bg-[var(--color-accent)]"
                : "w-2.5 bg-neutral-300"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default BrowserMockup;