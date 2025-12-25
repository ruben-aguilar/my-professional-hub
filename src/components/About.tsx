import { Code2, Users, Lightbulb, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack",
      description: "Backend systems handling thousands of requests to elegant frontends"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Passionate about collaboration and mentoring teammates"
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Finding creative solutions with available resources"
    },
    {
      icon: Rocket,
      title: "Value Driven",
      description: "Focused on delivering customer value quickly"
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="section-divider" />
          </div>
          
          {/* About text */}
          <div className="card-elevated rounded-2xl p-8 md:p-12 mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              First and foremost, I love creating value and collaborating with others to achieve it. 
              I see code as a powerful and delightful tool to reach this objective.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I enjoy writing backend systems that can handle thousands of requests per second and 
              crafting frontends that users love, using the latest technologies. But I believe that 
              domain knowledge, customer insights, and teamwork are as important as deep technical expertise.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently, my main interest is growing as a <span className="text-primary font-medium">technical lead</span>, 
              guiding my team in creating maintainable software products that address customer needs 
              while helping teammates grow in their respective roles.
            </p>
          </div>
          
          {/* Highlight cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((item, index) => (
              <div 
                key={item.title}
                className="card-elevated rounded-xl p-6 text-center hover:border-primary/50 border border-transparent transition-all duration-300 group"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
