import { FiMail, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import GlassCard from "../../components/common/GlassCard";

const ContactLinks = () => {
  const links = [
  {
    icon: FiMail,
    title: "Email",
    value: "ifedolapo201@gmail.com",
    href: "mailto:ifedolapo201@gmail.com",
  },
  {
    icon: FaGithub,
    title: "GitHub",
    value: "github.com/Adewale201",
    href: "https://github.com/Adewale201",
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/egberongbe-ifedolapo",
    href: "https://linkedin.com/in/egberongbe-ifedolapo",
  },
  {
    icon: FiMapPin,
    title: "Location",
    value: "Lagos, Nigeria",
  },
  ];

  return (
    <div className="grid gap-5">
      {links.map(({ icon: Icon, title, value, href }) => {
        const content = (
          <GlassCard
            className="
              group
              p-6
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
            "
          >
            <div className="flex items-start gap-4">
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[var(--color-accent)]/10
                  text-[var(--color-accent)]
                  transition-colors
                  duration-300
                  group-hover:bg-[var(--color-accent)]
                  group-hover:text-white
                "
              >
                <Icon size={22} />
              </div>

              <div>
                <p className="text-sm text-[var(--color-secondary)]">
                  {title}
                </p>

                <p className="mt-1 font-medium break-all">
                  {value}
                </p>
              </div>
            </div>
          </GlassCard>
        );

        if (href) {
          return (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content}
            </a>
          );
        }

        return <div key={title}>{content}</div>;
      })}
    </div>
  );
};

export default ContactLinks;