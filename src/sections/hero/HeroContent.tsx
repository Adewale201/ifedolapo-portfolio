import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";

const HeroContent = () => {
  return (
    <div className="max-w-2xl">

      <HeroBadge />

      <h1 className="mt-8 font-['Space_Grotesk'] text-5xl font-bold leading-tight md:text-7xl">

        Building software

        <br />

        people enjoy

        <br />

        <span className="text-[#D95D39]">
          using.
        </span>

      </h1>

      <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-600">

        I'm Ifedolapo Egberongbe, a software engineer passionate about
        building intuitive frontend experiences, scalable backend systems,
        and AI-powered applications.

      </p>

      <HeroButtons />

    </div>
  );
};

export default HeroContent;