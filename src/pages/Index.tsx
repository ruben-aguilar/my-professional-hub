import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Rubén Aguilar | Senior Software Engineer</title>
        <meta name="description" content="Senior Software Engineer at Miro specializing in AI, full-stack development, and technical leadership. Based in Barcelona, Spain." />
        <meta name="keywords" content="Software Engineer, React, TypeScript, Technical Lead, Barcelona, Miro, AI" />
        <meta property="og:title" content="Rubén Aguilar | Senior Software Engineer" />
        <meta property="og:description" content="Senior Software Engineer at Miro specializing in AI, full-stack development, and technical leadership." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://rubenaguilarbecerra.com" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
