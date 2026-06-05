import setupImg from "@/assets/setup.jpg";
import laptopImg from "@/assets/laptop.jpg";

type Card = {
  num: string;
  title: string;
  body: string;
  variant: "dark" | "image" | "primary" | "light";
  img?: boolean;
};

const cards: Card[] = [
  {
    num: "01",
    title: "Research & Strategy",
    body: "In this phase, I leverage AI-powered research and data analytics to gain deep insights into your business, audience, and objectives. Strategic planning driven by machine learning informs a focused roadmap, ensuring every engineering decision aligns with your project's vision and goals.",
    variant: "dark",
  },
  { num: "", title: "", body: "", variant: "image", img: true },
  {
    num: "02",
    title: "Concept & Ideation",
    body: "My process begins with clear conceptual thinking and imaginative ideation, laying the foundation for innovative and effective solutions.",
    variant: "primary",
  },
  { num: "", title: "", body: "", variant: "image", img: true },
  {
    num: "03",
    title: "Feedback & Refinement",
    body: "I value constructive feedback and continually refine my work, ensuring every solution evolves to meet the highest standards of quality and effectiveness.",
    variant: "light",
  },
];

const Process = () => {
  return (
    <section className="container mx-auto px-6 py-24 md:py-32">
      <h2 className="heading-display text-5xl md:text-7xl mb-16 max-w-3xl">
        My Process / How I Work
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((c, i) => {
          if (c.variant === "image") {
            const imgSrc = i === 1 ? setupImg : laptopImg;
            return (
              <div key={i} className="rounded-2xl overflow-hidden bg-muted aspect-square group">
                <img src={imgSrc} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
            );
          }
          const styles =
            c.variant === "dark"
              ? "bg-foreground text-background"
              : c.variant === "primary"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-foreground";
          return (
            <div key={i} className={`rounded-2xl p-8 aspect-square flex flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl ${styles}`}>
              <div className="text-5xl font-black mb-auto">{c.num}.</div>
              <h3 className="text-2xl font-extrabold uppercase mb-3">{c.title}</h3>
              <p className="text-sm opacity-90 leading-relaxed">{c.body}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Process;
