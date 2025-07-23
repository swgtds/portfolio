import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="bg-gradient-to-r from-blue-800 to-[#abcde4] bg-clip-text text-transparent opacity-0 animate-fade-in-delay-1">
              {" "}
              Swagata
            </span>
            <span className="text-gradient ml-3 opacity-0 animate-fade-in-delay-2">
              {" "}
              Das
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I engineer modern web experiences and contribute to open-source innovation.
            Passionate about full-stack development, DevOps, and building tools that matter.

          </p>

          {/*<div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>*/}

          {/* I have added this */}
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-delay-4 justify-center">
            <a href="#projects" className="cosmic-button">
              {" "}
              See My Work
            </a>
            <a
              href="https://drive.google.com/file/d/1OZ0tV-Brmmm1ZNzzS6E1QVUiwsZoz7O5/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
            >

              View My Resume
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
