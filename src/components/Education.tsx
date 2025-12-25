import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    institution: "Universidad de Granada",
    degree: "Computer Science Engineering",
    period: "2007 - 2013"
  },
  {
    institution: "La Salle BCN",
    degree: "Master in Project Management (MPM)",
    period: "2014 - 2015"
  },
  {
    institution: "Universidad Pontificia de Salamanca",
    degree: "Computer Science Engineering",
    period: "2011 - 2012"
  },
  {
    institution: "Free Code Camp",
    degree: "Full Stack Web Development Certification",
    period: "2017 - 2018"
  }
];

const awards = [
  {
    title: "2nd Place - Microsoft Imagine Cup (National Finals)",
    icon: Award
  },
  {
    title: "National Ambassador of Spain at 'Driving Digital Jobs in Europe'",
    icon: Award
  },
  {
    title: "Best Final Year Project Award",
    icon: Award
  }
];

const certifications = [
  "AI Agents Fundamentals",
  "Unconscious Bias",
  "Confronting Bias: Thriving Across Our Differences",
  "Communicating about Culturally Sensitive Issues",
  "Miro Essentials"
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Education & <span className="gradient-text">Achievements</span>
            </h2>
            <div className="section-divider" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <h3 className="flex items-center gap-2 text-xl font-semibold mb-6">
                <GraduationCap className="w-5 h-5 text-primary" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div 
                    key={edu.institution}
                    className="card-elevated rounded-xl p-5 hover:border-primary/30 border border-transparent transition-all duration-300"
                  >
                    <h4 className="font-semibold mb-1">{edu.institution}</h4>
                    <p className="text-sm text-muted-foreground mb-1">{edu.degree}</p>
                    <p className="text-xs text-primary">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Awards & Certifications */}
            <div>
              <h3 className="flex items-center gap-2 text-xl font-semibold mb-6">
                <Award className="w-5 h-5 text-primary" />
                Awards & Honors
              </h3>
              <div className="space-y-4 mb-8">
                {awards.map((award) => (
                  <div 
                    key={award.title}
                    className="card-elevated rounded-xl p-5 hover:border-primary/30 border border-transparent transition-all duration-300 flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Award className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-sm font-medium">{award.title}</p>
                  </div>
                ))}
              </div>
              
              <h3 className="text-lg font-semibold mb-4">Certifications</h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <span 
                    key={cert}
                    className="px-3 py-1.5 text-xs rounded-full bg-secondary text-secondary-foreground border border-border hover:border-primary/50 transition-colors"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
