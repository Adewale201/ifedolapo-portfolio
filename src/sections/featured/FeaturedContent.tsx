import { Building2, Calendar } from "lucide-react";

import IconText from "../../components/common/IconText";
import Pill from "../../components/common/Pill";

const FeaturedContent = () => {
  return (
    <div>
      <span className="rounded-full bg-[var(--color-accent-light)] px-4 py-2 text-sm font-medium text-[var(--color-accent)]">
        Featured Project
      </span>

      <h3 className="mt-6 font-['Space_Grotesk'] text-4xl font-bold text-[var(--color-primary)]">
        UniStay
      </h3>

      <p className="mt-6 text-lg leading-8 text-[var(--color-secondary)]">
        A modern student accommodation platform helping students discover
        verified hostels and apartments with ease. As the founder and backend
        engineer, I focus on building scalable APIs, authentication, and the
        core infrastructure powering the platform.
      </p>

      <div className="mt-8 space-y-4">
        <IconText icon={Calendar}>
          Started January 2026
        </IconText>

        <IconText icon={Building2}>
          Founder • Backend Engineer
        </IconText>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Pill>React</Pill>
        <Pill>TypeScript</Pill>
        <Pill>Node.js</Pill>
        <Pill>Supabase</Pill>
      </div>
    </div>
  );
};

export default FeaturedContent;