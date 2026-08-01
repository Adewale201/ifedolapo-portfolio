import Container from "../../components/ui/Container";
import SectionHeading from "../../components/ui/SectionHeading";

import ExperienceTimeline from "./ExperienceTimeline";

const Experience = () => {
  return (
    <section
      id="experience"
      className="section-padding bg-[var(--color-background)]"
    >
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="My professional journey."
          description="From internships to startup leadership, each experience has helped shape the engineer I'm becoming."
        />

        <div className="mt-20">
          <ExperienceTimeline />
        </div>
      </Container>
    </section>
  );
};

export default Experience;