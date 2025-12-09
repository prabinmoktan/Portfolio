import Layout from "../Layout";
import Contact from "./Contact/Contact";
import Experience from "./Experience/Experience";
import HeroSection from "./HeroSection.tsx/HeroSection";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

const Homepage = () => {
  return (
    <Layout >
      <div className="flex flex-col gap-y-12 px-2 md:px-10 light: bg-white/10">
        <HeroSection />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        
      </div>
    </Layout>
  );
};

export default Homepage;
