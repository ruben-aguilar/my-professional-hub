import { Briefcase } from "lucide-react";

interface ExperienceItem {
  company: string;
  roles: {
    title: string;
    period: string;
    location?: string;
    description?: string[];
  }[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Miro",
    roles: [
      {
        title: "Senior Software Engineer - AI",
        period: "Apr 2024 - Present",
        location: "Remote"
      },
      {
        title: "Senior Software Engineer - Enterprise",
        period: "Jan 2023 - Mar 2024",
        location: "Remote"
      }
    ]
  },
  {
    company: "Hopin",
    roles: [
      {
        title: "Staff Software Engineer - Platform & DevEx",
        period: "Jun 2022 - Jan 2023",
        description: [
          "Development of preview environments for live peer reviews",
          "Tooling to improve local development experience",
          "Migrating static pages from SPA to NextJs server-rendered pages"
        ]
      }
    ]
  },
  {
    company: "Vista (Vistaprint)",
    roles: [
      {
        title: "Lead Software Engineer - Personalization",
        period: "Oct 2021 - Jun 2022",
        description: [
          "Leading tech team creating my account experience combining VistaPrint, VistaCreate and 99Designs",
          "Working on React and TypeScript based MFEs"
        ]
      },
      {
        title: "Lead Software Engineer - Large Assortment",
        period: "Jul 2019 - Oct 2021",
        location: "Barcelona, Spain",
        description: [
          "Leading teams to offer ~4000 PPAG products in the main Vistaprint site"
        ]
      },
      {
        title: "Senior Software Engineer",
        period: "Sep 2017 - Jul 2019",
        location: "Barcelona, Spain",
        description: [
          "Implemented new checkout option increasing conversion rate substantially",
          "Built new Product Page based on ReactJs as independent MFE",
          "Developed A/B testing framework",
          "Mentored team members on testing and design techniques"
        ]
      }
    ]
  },
  {
    company: "HP",
    roles: [
      {
        title: "R&D Software Engineer",
        period: "Oct 2015 - Sep 2017",
        location: "Sant Cugat del Vallés",
        description: [
          "Migrated frontend app for HP's large format Latex printers from Windows Forms to AngularJs",
          "Implemented core image processing pipelines for HP Latex R series",
          "Mentored team in TDD techniques"
        ]
      },
      {
        title: "R&D Software Engineer (Inno+talent25)",
        period: "Jan 2014 - Sep 2015",
        location: "Sant Cugat del Vallés"
      }
    ]
  },
  {
    company: "Entelgy",
    roles: [
      {
        title: "Junior .NET Developer",
        period: "Sep 2013 - Dec 2013",
        description: [
          "Backend development in C# MVC and JavaScript jQuery frontend for Wolters Kluwer Spain"
        ]
      }
    ]
  },
  {
    company: "Opbrid SL",
    roles: [
      {
        title: "Software Engineer",
        period: "Aug 2012 - Apr 2013",
        location: "Granada, Spain",
        description: [
          "R&D of Busbaar system for Volvo",
          "Designed communication protocols (Bluetooth, CAN, V2G) between buses and charge stations"
        ]
      }
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative bg-secondary/20">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="section-divider" />
          </div>
          
          {/* Experience list */}
          <div className="space-y-6">
            {experiences.map((exp) => (
              <div 
                key={exp.company} 
                className="card-elevated rounded-xl p-6 hover:border-primary/30 border border-transparent transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <span className="font-bold text-lg text-primary">{exp.company}</span>
                </div>
                
                <div className="space-y-4">
                  {exp.roles.map((role, roleIndex) => (
                    <div 
                      key={`${exp.company}-${roleIndex}`}
                      className={roleIndex > 0 ? "pt-4 border-t border-border/50" : ""}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                        <h3 className="font-semibold">{role.title}</h3>
                        <span className="text-sm text-muted-foreground">{role.period}</span>
                      </div>
                      {role.location && (
                        <p className="text-xs text-muted-foreground mb-2">{role.location}</p>
                      )}
                      {role.description && (
                        <ul className="mt-2 space-y-1">
                          {role.description.map((item, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex gap-2">
                              <span className="text-primary mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
