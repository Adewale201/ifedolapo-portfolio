import { motion } from "framer-motion";

import Container from "../../components/ui/Container";
import HeroContent from "./HeroContent";
import HeroCard from "./HeroCard";

import {
  fadeLeft,
  fadeUp,
} from "../../design-system/animations";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-[var(--color-background)] pt-32"
    >
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <HeroContent />
          </motion.div>

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
          >
            <HeroCard />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;