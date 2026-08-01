import Button from "../../components/ui/Button";

const ContactContent = () => {
  return (
    <div className="flex flex-col justify-center">
      <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--color-accent)]">
        Contact
      </p>

      <h2 className="mt-4 font-['Space_Grotesk'] text-4xl font-bold leading-tight sm:text-5xl">
        Let's build something
        <br />
        great together.
      </h2>

      <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--color-secondary)]">
        Whether it's a backend engineering role, a freelance project,
        or an exciting startup idea, I'd love to hear from you.
        I'm always open to meaningful conversations and new opportunities.
      </p>

      <div className="mt-10">
        <a href="mailto:ifedolapo201@gmail.com">
          <Button>
            Get In Touch
          </Button>
        </a>
      </div>
    </div>
  );
};

export default ContactContent;