import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

import GlassCard from "../../components/common/GlassCard";
import IconText from "../../components/common/IconText";

import HeroImage from "./HeroImage";
import HeroStatus from "./HeroStatus";

import {
  floatingGlow,
  hoverLift,
} from "../../design-system/animations";

const HeroCard = () => {
  return (
    <motion.div
      {...hoverLift}
      className="relative flex justify-center"
    >
      {/* Orange Glow */}
      <motion.div
        {...floatingGlow}
        className="
          absolute
          -top-20
          -right-20
          h-80
          w-80
          rounded-full
          bg-[var(--color-accent)]
          opacity-30
          blur-[140px]
          pointer-events-none
          z-0
        "
      />

      {/* Decorative Outline */}
      <div
        className="
          absolute
          top-6
          left-6
          h-full
          w-full
          rounded-[36px]
          border
          border-[var(--color-accent-light)]
          z-0
        "
      />

      {/* Main Card */}
      <GlassCard
        className="
          relative
          z-10
          w-full
          max-w-[420px]
          overflow-hidden
          card-shadow
          card-shadow-hover
        "
      >
        <HeroImage />

        <div className="space-y-5 p-7">
          <div>
            <h3 className="font-['Space_Grotesk'] text-2xl font-bold">
              Ifedolapo Egberongbe
            </h3>

            <p className="mt-1 text-neutral-500">
              Software Engineer
            </p>
          </div>

          <IconText icon={MapPin}>
            Lagos, Nigeria
          </IconText>

          <HeroStatus />
        </div>
      </GlassCard>
    </motion.div>
  );
};

export default HeroCard;