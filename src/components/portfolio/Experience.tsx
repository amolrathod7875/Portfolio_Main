import laptopImg from "@/assets/laptop.jpg";

const items = [
  { role: "Data Analsyst",  url: "#" },
  { role: "ML Engineer",  url: "#" },
  { role: "Cloud Engineer",  url: "#" },
  { role: "MLops Engineer",  url: "#" },
];

const Experience = () => {
  return (
    <section id="projects" className="container mx-auto px-6 py-16 md:py-20">
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

      <div className="max-w-3xl">
        {items.map((it) => (
          <a
            key={it.role}
            href={it.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between py-7 border-b border-border transition-all duration-300 hover:pl-4 hover:border-primary"
          >
            <span className="text-xl md:text-2xl font-extrabold uppercase tracking-tight transition-colors group-hover:text-primary">
              {it.role}
            </span>
            <div className="text-right">
              <div className="text-lg md:text-xl font-bold text-primary transition-transform duration-300 group-hover:-translate-x-2">{it.project}</div>
              <div className="text-sm text-muted-foreground mt-1">{it.period}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Experience;
