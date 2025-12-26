const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "NextJs", "JavaScript", "HTML/CSS"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Kotlin", "LLMs integration", "LLMOps", "Kubernetes"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "Docker", "AWS", "Claude Code", "Cursor"]
  },
  {
    title: "Practices",
    skills: ["TDD", "AI Assisted Coding", "Mentoring", "System Design"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-secondary/20">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <div className="section-divider" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <div 
                key={category.title}
                className="card-elevated rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold mb-4 text-primary">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 text-sm rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Languages */}
          <div className="mt-8 card-elevated rounded-xl p-6 text-center">
            <h3 className="text-lg font-semibold mb-4">Languages</h3>
            <div className="flex justify-center gap-8">
              <div>
                <p className="font-medium">Spanish</p>
                <p className="text-sm text-muted-foreground">Native</p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="font-medium">English</p>
                <p className="text-sm text-muted-foreground">Professional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
