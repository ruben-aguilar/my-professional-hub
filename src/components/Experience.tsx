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
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="section-divider" />
          </div>
          
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            
            {experiences.map((exp, expIndex) => (
              <div key={exp.company} className="mb-12 last:mb-0">
                {exp.roles.map((role, roleIndex) => (
                  <div 
                    key={`${exp.company}-${roleIndex}`}
                    className={`relative pl-8 md:pl-0 md:w-1/2 ${
                      expIndex % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12'
                    } mb-8 last:mb-0`}
                  >
                    {/* Timeline dot */}
                    <div className={`absolute left-0 md:left-auto ${
                      expIndex % 2 === 0 ? 'md:-left-3' : 'md:-right-3'
                    } top-2 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center`}>
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    
                    {/* Content card */}
                    <div className="card-elevated rounded-xl p-6 hover:border-primary/30 border border-transparent transition-all duration-300">
                      {roleIndex === 0 && (
                        <div className="flex items-center gap-2 mb-3">
                          <Briefcase className="w-4 h-4 text-primary" />
                          <span className="font-bold text-primary">{exp.company}</span>
                        </div>
                      )}
                      
                      <h3 className="font-semibold text-lg mb-1">{role.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{role.period}</p>
                      {role.location && (
                        <p className="text-xs text-muted-foreground mb-3">{role.location}</p>
                      )}
                      
                      {role.description && (
                        <ul className="space-y-1">
                          {role.description.map((item, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex gap-2">
                              <span className="text-primary mt-1.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
