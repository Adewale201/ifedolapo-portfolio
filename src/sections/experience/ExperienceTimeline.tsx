import TimelineItem from "./TimelineItem";

const ExperienceTimeline = () => {
  return (
    <div className="space-y-10">
      <TimelineItem
        period="Jan 2026 – Present"
        title="Founder & Backend Engineer"
        company="UniStay"
        badge="Current"
        description="Leading the backend development of a student accommodation platform, designing scalable APIs, authentication, and core platform architecture while collaborating with a growing team."
      />

      <TimelineItem
        period="Nov 2025 – Apr 2026"
        title="Backend Engineering Intern"
        company="Screws & Spanners (S&S)"
        description="Contributed to backend development by building REST APIs, implementing new features, fixing bugs, and collaborating with the engineering team on production-ready applications."
      />

      <TimelineItem
        period="Sep 2025 – Nov 2025"
        title="Frontend Developer"
        company="Laddr Chess"
        description="Worked on frontend development during a short-term engagement, building responsive interfaces and improving the user experience across the application."
        isLast
      />
    </div>
  );
};

export default ExperienceTimeline;