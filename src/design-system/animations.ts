import type { Variants, Transition } from "framer-motion";

/* ---------------------------------- */
/* Transitions */
/* ---------------------------------- */

export const transitions = {
  fast: {
    duration: 0.2,
    ease: "easeOut",
  } satisfies Transition,

  normal: {
    duration: 0.4,
    ease: "easeOut",
  } satisfies Transition,

  slow: {
    duration: 0.7,
    ease: "easeOut",
  } satisfies Transition,
};

/* ---------------------------------- */
/* Entrance Animations */
/* ---------------------------------- */

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.slow,
  },
};

export const fadeDown: Variants = {
  hidden: {
    opacity: 0,
    y: -40,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.slow,
  },
};

export const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.slow,
  },
};

export const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.slow,
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.normal,
  },
};

/* ---------------------------------- */
/* Stagger */
/* ---------------------------------- */

export const staggerContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

/* ---------------------------------- */
/* Hover Animations */
/* ---------------------------------- */

export const hoverLift = {
  whileHover: {
    y: -8,
    transition: transitions.fast,
  },
};

export const hoverScale = {
  whileHover: {
    scale: 1.03,
    transition: transitions.fast,
  },
};

export const hoverButton = {
  whileHover: {
    y: -3,
    scale: 1.02,
    transition: transitions.fast,
  },

  whileTap: {
    scale: 0.98,
  },
};

/* ---------------------------------- */
/* Floating Glow */
/* ---------------------------------- */

export const floatingGlow = {
  animate: {
    scale: [1, 1.08, 1],
    opacity: [0.2, 0.35, 0.2],
  },

  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  } satisfies Transition,
};