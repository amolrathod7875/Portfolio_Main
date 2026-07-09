import setupImg from "@/assets/setup.jpg";
import laptopImg from "@/assets/laptop.jpg";
import asthetic_coding from "@/assets/asthetic_coding.jpg";

type Card = {
  num: string;
  title: string;
  body: string;
  variant: "dark" | "image" | "primary" | "light" | "asthetic_coding";
  img?: boolean;
};

const cards: Card[] = [
  {
    num: "01",
    title: "Vidhoor Legal AI Copilot",
    body: "Engineered an AI-powered legal assistant utilizing RAG and Vector Databases. Processed, trained, and indexed 851 pages of Indian legal frameworks. Hosted on Oracle Autonomous Database using Hybrid Search. Implemented strict End-to-End Encryption (E2EE) and PII redaction. Achieved ultra-low latency inference of 2,350 tokens/sec.",
    variant: "dark",
  },
  { num: "", title: "", body: "", variant: "image", img: true },
  {
    num: "02",
    title: "Interview.io AI Interview Prep Platform",
    body: "Developed an AI-driven mock interview platform for technical domains. Built an automated resume parser for instant feedback. Integrated a \"Codex\" module with curated DSA questions and designed a customized roadmap generation feature for career study resources.",
    variant: "primary",
  },
  { num: "", title: "", body: "", variant: "image", img: true },
  {
    num: "03",
    title: "AI Receptionist",
    body: "Developed an intelligent voice receptionist powered by advanced reasoning models for real-time appointment booking and rescheduling. Integrated automated workflows via Email and WhatsApp. Finalist in the OpenAI Academy x Nxt Wave Buildathon.",
    variant: "light",
  },
  { num: "", title: "", body: "", variant: "asthetic_coding", img: true },
];

const Process = () => {
  return (
    <section className="container mx-auto px-6 py-24 md:py-32">
      <h2 className="heading-display text-5xl md:text-7xl mb-16 max-w-3xl">
        Project 
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((c, i) => {
          if (c.variant === "image" || c.variant === "asthetic_coding") {
            const imgSrc = c.variant === "asthetic_coding" ? asthetic_coding : i === 1 ? setupImg : laptopImg;
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
          const pdfMap: Record<string, string> = {
            "Vidhoor Legal AI Copilot": "/Vidhoor_Legal_Copilot.pdf",
            "Interview.io AI Interview Prep Platform": "/Interview.io.pdf",
            "AI Receptionist": "/Ai_Receptionist.pdf",
          };
          const pdfPath = pdfMap[c.title];
          const isClickable = !!pdfPath;
          if (isClickable) {
            return (
              <a key={i} href={pdfPath} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                <div className={`rounded-2xl p-8 aspect-square flex flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl ${styles}`}>
                  <div className="text-5xl font-black mb-auto">{c.num}.</div>
                  <h3 className="text-2xl font-extrabold uppercase mb-3">{c.title}</h3>
                  <p className="text-sm opacity-90 leading-relaxed">{c.body}</p>
                  <p className="mt-4 text-xs opacity-70">Click to view documentation</p>
                </div>
              </a>
            );
          }
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
