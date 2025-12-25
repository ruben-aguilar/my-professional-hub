import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section header */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="section-divider mb-8" />
          
          <p className="text-lg text-muted-foreground mb-12">
            I'm always interested in discussing new opportunities, collaborations, 
            or just having a great conversation about technology and software engineering.
          </p>
          
          {/* Contact options */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            <a 
              href="mailto:ruben.aguilar.becerra@gmail.com"
              className="card-elevated rounded-xl p-6 hover:border-primary/50 border border-transparent transition-all duration-300 group"
            >
              <Mail className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="font-medium mb-1">Email</p>
              <p className="text-sm text-muted-foreground break-all">ruben.aguilar.becerra@gmail.com</p>
            </a>
            
            <a 
              href="tel:+34717717389"
              className="card-elevated rounded-xl p-6 hover:border-primary/50 border border-transparent transition-all duration-300 group"
            >
              <Phone className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="font-medium mb-1">Phone</p>
              <p className="text-sm text-muted-foreground">+34 717 717 389</p>
            </a>
          </div>
          
          {/* LinkedIn CTA */}
          <Button 
            size="lg"
            className="gradient-accent border-0 hover:opacity-90 transition-opacity"
            asChild
          >
            <a 
              href="https://www.linkedin.com/in/ruben-aguilar-becerra" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              Connect on LinkedIn
            </a>
          </Button>
          
          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mt-12">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Barcelona, Cataluña, España</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
