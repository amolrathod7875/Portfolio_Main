import Navbar from "@/components/portfolio/Navbar";
import CursorFollower from "@/components/portfolio/CursorFollower";
import About from "@/components/portfolio/About";
import WhatICanDo from "@/components/portfolio/WhatICanDo";
import Experience from "@/components/portfolio/Experience";
import Process from "@/components/portfolio/Process";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background pt-32 md:cursor-none">
      <CursorFollower />
      <Navbar />
      <About />
      <WhatICanDo />
      <Experience />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
