import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/portfolio/Navbar";
import CursorFollower from "@/components/portfolio/CursorFollower";
import Process from "@/components/portfolio/Process";
import Footer from "@/components/portfolio/Footer";

const Projects = () => {
  return (
    <main className="min-h-screen bg-background pt-32 md:cursor-none">
      <CursorFollower />
      <Navbar />
      <section className="container mx-auto px-6 py-16 md:py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        <Process />
      </section>
      <Footer />
    </main>
  );
};

export default Projects;
