import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo */}
          <div className="animate-slide-up opacity-0 mb-8">
            <div className="relative inline-block">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/30 glow-accent mx-auto">
                <img src={profilePhoto} alt="Rubén Aguilar" className="w-full h-full object-cover" />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse" style={{
                transform: 'scale(1.15)'
              }} />
            </div>
          </div>
          
          {/* Title */}
          <div className="animate-slide-up opacity-0 animation-delay-100">
            <p className="text-primary font-medium tracking-wider uppercase mb-4">
              Senior Software Engineer
            </p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up opacity-0 animation-delay-200">
            Rubén <span className="gradient-text">Aguilar</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up opacity-0 animation-delay-300">
            Creating value through code. From low-level systems to modern web applications and AI.
          </p>
          
          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8 animate-slide-up opacity-0 animation-delay-400">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Barcelona, Cataluña, España</span>
          </div>
          
          {/* Contact buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-slide-up opacity-0 animation-delay-500">
            <Button variant="default" size="lg" className="gradient-accent border-0 hover:opacity-90 transition-opacity" asChild>
              <a href="mailto:ruben.aguilar.becerra@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </a>
            </Button>
            
            <Button variant="outline" size="lg" className="border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all" asChild>
              <a href="https://www.linkedin.com/in/ruben-aguilar-becerra" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            
            <Button variant="outline" size="lg" className="border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all" asChild>
              <a href="tel:+34717717389">
                <Phone className="w-4 h-4 mr-2" />
                Call
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;