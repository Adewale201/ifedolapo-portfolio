import Container from "../../components/ui/Container";
import SectionHeading from "../../components/ui/SectionHeading";
import ProjectsGrid from "./ProjectsGrid";

const Projects = () => {
  return (
    <section
      id="projects"
      className="section-padding bg-white"
    >
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Selected Projects"
          description="A selection of projects that showcase my experience across frontend development, backend engineering, and product design."
        />

        <div className="mt-12 sm:mt-16 lg:mt-20">
          <ProjectsGrid />
        </div>
      </Container>
    </section>
  );
};

export default Projects;