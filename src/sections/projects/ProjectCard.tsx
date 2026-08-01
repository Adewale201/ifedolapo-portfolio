import GlassCard from "../../components/common/GlassCard";
import Tag from "../../components/common/Tag";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  video?: string;
  tags: string[];
}

const ProjectCard = ({
  title,
  description,
  image,
  video,
  tags,
}: ProjectCardProps) => {
  return (
    <GlassCard
      className="
        group
        overflow-hidden
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      {/* Preview */}
      <div className="aspect-video overflow-hidden bg-neutral-100">
        {video ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          >
            <source src={video} type="video/mp4" />
          </video>
        ) : (
          <img
            src={image}
            alt={title}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />
        )}
      </div>

      {/* Content */}
      <div className="space-y-5 p-6 sm:p-7">
        <div>
          <h3
            className="
              font-['Space_Grotesk']
              text-xl
              font-bold
              transition-colors
              duration-300
              group-hover:text-[var(--color-accent)]
            "
          >
            {title}
          </h3>

          <p className="mt-3 text-base leading-7 text-[var(--color-secondary)]">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </GlassCard>
  );
};

export default ProjectCard;