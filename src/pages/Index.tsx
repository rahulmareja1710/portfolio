import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Leadership from "@/components/Leadership";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Leadership />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
