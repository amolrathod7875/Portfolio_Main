import { Linkedin, Github } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const About = () => {
  return (
    <section id="about" className="container mx-auto px-6 py-16 md:py-20">
      <h2 className="heading-display text-5xl md:text-7xl lg:text-8xl mb-10">
        About Me
      </h2>
      <div className="grid md:grid-cols-[1.5fr_1fr] gap-8 lg:gap-12 items-start">
        <div>
          <h3 className="text-2xl font-bold uppercase tracking-wide mb-6">Amol Rathod</h3>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            I specialize in intelligent digital design and ML development, driven to architect impactful, user-focused solutions that blend innovation with seamless functionality.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Combining expertise in intelligent visual design and interactive engineering, I transform concepts into dynamic experiences—integrating smart layouts, fluid animations, and adaptive interfaces for optimal impact.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/amol-rathod78"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="h-10 w-10 rounded-md bg-foreground text-background flex items-center justify-center hover:bg-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/amolrathod7875"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="h-10 w-10 rounded-md flex items-center justify-center text-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="relative group max-w-xs md:max-w-sm md:ml-auto w-full">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted transition-transform duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl">
            <img src={profileImg} alt="Amol Rathod portrait" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
