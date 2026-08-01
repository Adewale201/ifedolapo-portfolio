import { motion } from "framer-motion";

const items = [
  "BACKEND ENGINEER",
  "NODE.JS",
  "FULL STACK DEVELOPER",
  "TYPESCRIPT",
  "PRODUCT BUILDER",
  "REACT",
  "API DESIGN",
  "SUPABASE",
  "CLOUD ENTHUSIAST",
  "REST APIs",
];

const repeated = [...items, ...items];

const Marquee = () => {
  return (
    <section className="overflow-hidden border-y border-neutral-200 bg-[#F7F5F2] py-5">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {repeated.map((item, index) => (
          <div
            key={index}
            className="mx-8 flex items-center gap-8 whitespace-nowrap"
          >
            <span className="font-['Space_Grotesk'] text-sm font-semibold tracking-[0.22em] text-neutral-800">
              {item}
            </span>

            <span className="text-lg text-[var(--color-accent)]">
              ◆
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Marquee;