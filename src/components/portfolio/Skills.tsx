const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "C++", "C", "JavaScript"],
  },
  {
    title: "Core Concepts",
    items: [
      "Data Structures & Algorithms",
      "OOPS",
      "Operating Systems",
      "Workflow Orchestration",
      "Process Automation",
    ],
  },
  {
    title: "Domains",
    items: [
      "Artificial Intelligence (LLMs, RAG,NLP)",
      "Data Science",
      "Machine Learning",
      "Deep Learning",
      "Cloud Computing",
      "Web Development",
    ],
  },
  {
    title: "Tools & Databases",
    items: [
      "Vector Databases",
      "Oracle Autonomous Database",
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "VS Code",
      "Git/GitHub",
      "Vapi",
      "n8n",
      "Oracle Cloud",
      "Docker",
      "REST APIs",
      "Webhooks",
      "JSON",
    ],
  },
];

const Skills = () => {
  return (
    <section className="container mx-auto px-6 py-16 md:py-20">
      <div className="grid md:grid-cols-[1.5fr_1fr] gap-8 lg:gap-12 mb-12">
        <div>
          <h2 className="heading-display text-4xl md:text-6xl mb-6">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed max-w-md">
            A focused blend of programming, AI, cloud, and automation tools used to build dependable systems and intelligent experiences.
          </p>
        </div>
        
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-border bg-background p-6 md:p-7 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-2xl"
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <h3 className="text-lg md:text-xl font-extrabold uppercase tracking-tight">
                {group.title}
              </h3>
              <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_0_8px_rgba(168,85,247,0.12)]" />
            </div>
            <ul className="flex flex-wrap gap-3">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-background px-3.5 py-2 text-sm font-medium text-foreground/90 transition-colors hover:border-primary hover:text-primary"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;