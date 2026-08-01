import { ArrowRight, Download } from "lucide-react";
import Button from "../../components/ui/Button";

const HeroButtons = () => {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <a href="#projects">
        <Button>
          Explore Projects
          <ArrowRight size={18} strokeWidth={1.75} />
        </Button>
      </a>

      <a
        href="/Ifedolapo-Egberongbe-Resume.pdf"
        download="Ifedolapo-Egberongbe-Resume.pdf"
      >
        <Button variant="secondary">
          Download CV
          <Download size={18} strokeWidth={1.75} />
        </Button>
      </a>
    </div>
  );
};

export default HeroButtons;