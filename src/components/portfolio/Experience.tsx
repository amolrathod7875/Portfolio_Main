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
        </div>
        <div className="aspect-[4/5] max-w-xs md:max-w-sm md:ml-auto w-full rounded-2xl overflow-hidden bg-muted">
          <img src={laptopImg} alt="Workspace" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Experience;