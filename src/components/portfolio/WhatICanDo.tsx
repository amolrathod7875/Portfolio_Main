import { useState } from "react";
import { ChevronUp, ChevronDown, CheckCircle2 } from "lucide-react";
import studyImg from "@/assets/study.jpg";

type Service = {
  title: string;
  points: string[];
  pdf?: string;
};

const services: Service[] = [
  {
    title: "Data Analyst",
    pdf: "/Data_Analyst.pdf",
    points: [
      "Turning raw data into actionable insights",
      "Building dashboards and visual reports",
      "Statistical analysis and forecasting",
      "Data cleaning and pipeline design",
    ],
  },
  {
    title: "Machine Learning Engineer",
    pdf: "/ML_Engineer.pdf",
    points: [
      "Designing and training ML models",
      "Feature engineering and evaluation",
      "Deploying models to production",
      "Optimizing performance and accuracy",
    ],
  },
  {
    title: "Cloud Engineer",
    pdf: "/Cloud_Engineer.pdf",
    points: [
      "Architecting scalable cloud infrastructure",
      "CI/CD and infrastructure-as-code",
      "Securing cloud-native workloads",
      "Cost optimization and monitoring",
    ],
  },
  {
    title: "MLOps Engineer",
    points: [
      "Streamlining the machine learning workflow",
      "Continuous integration and deployment (CI/CD)",
      "Version control and reproducibility",
      "Monitoring model performance",
    ],
  },
];

const WhatICanDo = () => {
  const [open, setOpen] = useState(3);

  return (
    <section className="container mx-auto px-6 py-16 md:py-20">
      <div className="grid md:grid-cols-[1.5fr_1fr] gap-8 lg:gap-12">
        <div>
          <h2 className="heading-display text-4xl md:text-6xl mb-6">
            What I Can Do For You
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed max-w-md">
            As an AI engineer, I build intelligent solutions that create meaningful connections and inspire creative possibilities through technology.
          </p>
        </div>
        <div className="aspect-[4/5] max-w-xs md:max-w-sm md:ml-auto w-full rounded-2xl overflow-hidden bg-muted">
          <img src={studyImg} alt="Working" className="h-full w-full object-cover" />
        </div>
      </div>

      <div className="mt-12 max-w-3xl">
        {services.map((s, i) => {
          const isOpen = open === i;
          const hasPdf = !!s.pdf;
          return (
            <div key={s.title} className="border-b border-border">
              <div className="w-full flex items-center justify-between py-6 text-left">
                <a
                  href={s.pdf}
                  target={hasPdf ? "_blank" : undefined}
                  rel={hasPdf ? "noopener noreferrer" : undefined}
                  onClick={(e) => {
                    if (!hasPdf) {
                      e.preventDefault();
                    }
                  }}
                  className={`text-2xl md:text-3xl font-extrabold uppercase tracking-tight transition-colors ${
                    isOpen ? "text-primary" : "text-foreground"
                  } ${hasPdf ? "hover:underline cursor-pointer" : ""}`}
                >
                  {i + 1}. {s.title}
                </a>
                <div
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="cursor-pointer"
                >
                  {isOpen ? (
                    <ChevronDown className="h-6 w-6 shrink-0" />
                  ) : (
                    <ChevronUp className="h-6 w-6 shrink-0" />
                  )}
                </div>
              </div>
              {isOpen && (
                <ul className="pb-6 space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-muted-foreground text-lg">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhatICanDo;
