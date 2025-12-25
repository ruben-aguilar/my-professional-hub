import { GraduationCap } from "lucide-react";

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
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Education</span>
            </h2>
            <div className="section-divider" />
          </div>
          
          <div className="space-y-4">
            {education.map((edu) => (
              <div 
                key={edu.institution}
                className="card-elevated rounded-xl p-5 hover:border-primary/30 border border-transparent transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{edu.institution}</h4>
                    <p className="text-sm text-muted-foreground mb-1">{edu.degree}</p>
                    <p className="text-xs text-primary">{edu.period}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
