import laptopImg from "@/assets/laptop.jpg";

const Experience = () => {
  return (
    <section className="container mx-auto px-6 py-16 md:py-20">
      <div className="grid md:grid-cols-[1.5fr_1fr] gap-8 lg:gap-12 mb-12">
        <div>
          <h2 className="heading-display text-4xl md:text-6xl mb-6">
            Experience &amp; Innovation
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed max-w-md">
            Exploring AI has empowered me to merge creativity and technology, building intelligent solutions that solve problems and unlock new possibilities.
          </p>
          <div className="mt-10 max-w-md">
            <div className="rounded-2xl border border-border bg-background p-6 md:p-7 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-2xl">
              <p className="text-sm font-bold uppercase tracking-tight text-foreground">AI Intern</p>
              <p className="text-sm font-semibold uppercase tracking-tight text-foreground mt-1">VR Coating Pvt. Ltd.</p>
              <p className="text-xs text-muted-foreground mt-1">Pune, Maharashtra | Sep 2026 – Present</p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                Developing a RAG-based AI system for VR Coatings to enable intelligent retrieval and question answering over company-specific information.
              </p>
            </div>
          </div>
        </div>
        <div className="aspect-[4/5] max-w-xs md:max-w-sm md:ml-auto w-full rounded-2xl overflow-hidden bg-muted">
          <img src={laptopImg} alt="Workspace" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Experience;