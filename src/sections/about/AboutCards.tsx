import { Code2, Target } from "lucide-react";

import GlassCard from "../../components/common/GlassCard";
import FeatureItem from "../../components/common/FeatureItem";

const AboutCards = () => {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <GlassCard className="p-8">
        <Code2
          size={32}
          className="text-[var(--color-accent)]"
        />

        <h3 className="mt-6 font-['Space_Grotesk'] text-2xl font-bold">
          How I Work
        </h3>

        <div className="mt-6 space-y-4">
          <FeatureItem>
            Build clean and maintainable solutions.
          </FeatureItem>

          <FeatureItem>
            Design scalable backend APIs.
          </FeatureItem>

          <FeatureItem>
            Collaborate effectively within teams.
          </FeatureItem>

          <FeatureItem>
            Continuously learn and improve.
          </FeatureItem>
        </div>
      </GlassCard>

      <GlassCard className="p-8">
        <Target
          size={32}
          className="text-[var(--color-accent)]"
        />

        <h3 className="mt-6 font-['Space_Grotesk'] text-2xl font-bold">
          What I'm Focused On
        </h3>

        <div className="mt-6 space-y-4">
          <FeatureItem>
            Backend Engineering
          </FeatureItem>

          <FeatureItem>
            Full-Stack Web Development
          </FeatureItem>

          <FeatureItem>
            REST API Development
          </FeatureItem>

          <FeatureItem>
            Building Digital Products
          </FeatureItem>
        </div>
      </GlassCard>
    </div>
  );
};

export default AboutCards;