import BrowserMockup from "../../components/common/BrowserMockup";
import { featuredProject } from "../../data/projects";

const FeaturedImage = () => {
  return (
    <div className="relative">
      {/* Background glow */}
      <div className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-[var(--color-accent)] opacity-15 blur-[120px]" />

      <BrowserMockup
        title={featuredProject.website}
        images={featuredProject.images}
      />
    </div>
  );
};

export default FeaturedImage;