import landing from "../assets/projects/unistay/landing.png";
import browse from "../assets/projects/unistay/browse.png";
import signup from "../assets/projects/unistay/signup.png";
import messaging from "../assets/projects/unistay/messaging.png";

import laddrChess from "../assets/projects/laddr-chess.png";
import glowLuxeVideo from "../assets/projects/glowluxe.mp4";

export const featuredProject = {
  title: "UniStay",

  website: "unistay.app",

  images: [
    landing,
    browse,
    signup,
    messaging,
  ],
};

export const projects = [
  {
    title: "Laddr Chess",

    description:
      "Worked on the frontend of a modern chess platform, implementing responsive interfaces and improving the overall user experience.",

    image: laddrChess,

    tags: [
      "React",
      "TypeScript",
      "Frontend",
    ],
  },

  {
    title: "GlowLuxe",

    description:
      "A luxury skincare landing page designed with elegant visuals, smooth interactions, and a premium user experience.",

    video: glowLuxeVideo,

    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
    ],
  },
];