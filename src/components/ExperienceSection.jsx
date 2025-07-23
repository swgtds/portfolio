import { Briefcase, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Software Development Intern",
    company: "CometChat",
    date: "June 2025 - Present",
    description:
      "Improved SDK and UI Kit integration for real-time chat, reducing latency by 30% and accelerating deployments by 55% through CI/CD automation.",
    link: "https://www.cometchat.com/",
    technologies: ["JavaScript", "React", "Node.js", "Flutter", "GitHub Actions", "WebRTC"],
  },
  
  {
    title: "Open Source Contributor",
    company: "Rocket.Chat",
    date: "February 2025 - April 2025",
    description:
      "Developed custom Rocket.Chat apps and contributed to GitHub webhook integration, FAQs, and AI chat modules.",
    link: "https://rocket.chat/",
    technologies: ["TypeScript", "Sequelize", "React", "Node.js", "Webhooks"],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 px-4 md:px-10 lg:px-20 bg-background text-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 animate-fade-in text-glow">
          <Briefcase className="inline-block w-8 h-8 mr-2 text-primary" />
          Experience
        </h2>
        <p className="text-lg text-muted-foreground mb-12">
          My journey through impactful roles and hands-on problem-solving.
        </p>
      </div>

      <div className="max-w-5xl mx-auto relative pl-6 md:pl-0"> {/* Adjusted padding for mobile timeline */}
        {/* Central Vertical Timeline Line (visible on all screen sizes) */}
        <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-primary/20 rounded-full"></div>

        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-stretch mb-12 relative animate-fade-in"
            style={{ animationDelay: `${0.2 * idx}s` }}
          >
            {/* Timeline Dot */}
            <div className="absolute left-2 md:left-1/2 top-0 md:top-6 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 border-2 border-background z-10"></div>

            {/* Date Column (Left on Desktop, Top on Mobile) */}
            <div className="md:w-1/2 md:pr-16 md:text-right mb-4 md:mb-0">
              <p className="text-lg font-semibold text-muted-foreground md:pt-4">{exp.date}</p>
            </div>

            {/* Experience Content Card (Right on Desktop, Below Date on Mobile) */}
            <a
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block flex-1 bg-card p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg group md:ml-8" // Added ml-8 for spacing from timeline line
            >
              <h3 className="text-xl font-semibold text-primary mb-1">{exp.title}</h3>
              <div className="flex items-center text-base text-foreground mb-2">
              <span className="font-bold italic underline text-primary mr-1">
  {exp.company}
</span>

                <ExternalLink
                  className="w-4 h-4 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:scale-110"
                  aria-label={`Visit ${exp.company} website`}
                />
              </div>
              <p className="text-base text-muted-foreground mb-4 text-left">{exp.description}</p>

              {/* Technologies/Tags */}
              {exp.technologies && exp.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
