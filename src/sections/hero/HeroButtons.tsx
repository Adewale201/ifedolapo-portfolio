import { ArrowRight, Download } from "lucide-react";
import Button from "../../components/ui/Button";

const HeroButtons = () => {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <Button>
        Explore Projects
        <ArrowRight size={18} strokeWidth={1.75} />
      </Button>

      <Button variant="secondary">
        Download Résumé
        <Download size={18} strokeWidth={1.75} />
      </Button>
    </div>
  );
};

export default HeroButtons;