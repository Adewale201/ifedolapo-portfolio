import laddrChess from "../../assets/projects/laddr-chess.png";
import glowLuxeVideo from "../../assets/projects/glowluxe.mp4";

import ProjectCard from "./ProjectCard";

const ProjectsGrid = () => {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <ProjectCard
        title="Laddr Chess"
        description="Worked on the frontend of a modern chess platform, building responsive interfaces and improving the overall user experience."
        image={laddrChess}
        tags={["React", "TypeScript", "Frontend"]}
      />

      <ProjectCard
        title="GlowLuxe"
        description="A luxury skincare landing page designed with elegant visuals and smooth interactions for a premium shopping experience."
        video={glowLuxeVideo}
        tags={["React", "Vite", "Tailwind CSS"]}
      />
    </div>
  );
};

export default ProjectsGrid;