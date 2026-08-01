import Container from "../../components/ui/Container";
import SectionHeading from "../../components/ui/SectionHeading";

import FeaturedContent from "./FeaturedContent";
import FeaturedImage from "./FeaturedImage";

const Featured = () => {
  return (
    <section
      id="featured"
      className="section-padding bg-[var(--color-background)]"
    >
      <Container>
        <SectionHeading
          eyebrow="Featured Project"
          title="Building UniStay."
          description="A modern student accommodation platform simplifying how students discover safe, verified housing."
        />

        <div className="mt-20 grid items-center gap-20 lg:grid-cols-2">
          <FeaturedContent />

          <FeaturedImage />
        </div>
      </Container>
    </section>
  );
};

export default Featured;