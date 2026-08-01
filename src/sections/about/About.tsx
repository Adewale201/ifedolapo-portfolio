import Container from "../../components/ui/Container";
import SectionHeading from "../../components/ui/SectionHeading";

import AboutIntro from "./AboutIntro";
import AboutCards from "./AboutCards";

const About = () => {
  return (
    <section
      id="about"
      className="section-padding bg-white"
    >
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Building software that solves real problems."
          description="I enjoy creating modern web applications and backend systems that are reliable, scalable, and designed around real user needs."
        />

        <div className="mt-20 space-y-16">
          <AboutIntro />

          <AboutCards />
        </div>
      </Container>
    </section>
  );
};

export default About;