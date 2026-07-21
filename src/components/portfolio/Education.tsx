import { Award, BookOpen, CalendarDays, GraduationCap, Trophy } from "lucide-react";

const certifications = [
  "Career Essentials in Generative AI (Microsoft)",
  "GitHub Foundations Part 1 & Part 2",
  "Supervised & Unsupervised Machine Learning",
];

const achievements = [
  "Active competitive programmer with 200+ problems solved on LeetCode focusing on DSA.",
  "Participant in TENET Hack 25 and Innerve X (Army Institute of Technology).",
];

const Education = () => {
  return (
    <section className="container mx-auto px-6 py-16 md:py-20">
      <div className="grid md:grid-cols-[1.5fr_1fr] gap-8 lg:gap-12 mb-12">
        <div>
          <h2 className="heading-display text-4xl md:text-6xl mb-6">
            Education &amp; Achievements
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed max-w-md">
            A strong academic foundation in AI and Data Science, complemented by certifications, problem-solving practice, and active hackathon participation.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-background text-foreground p-8 md:p-10 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <div className="flex items-center gap-3 mb-4 text-sm uppercase tracking-[0.3em] text-primary-foreground/80">
            <CalendarDays className="h-4 w-4" />
            Timeline
          </div>
          <div className="text-2xl md:text-3xl font-extrabold uppercase leading-tight">
            July 2024 -  July 2028
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-2xl border border-border bg-background text-foreground p-7 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/80">
              <GraduationCap className="h-4 w-4" />
              Current Study
            </span>
            <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/80">
              T.Y B.Tech
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-extrabold uppercase leading-tight mb-3">
            B.Tech. in Artificial Intelligence and Data Science
          </h3>
          <p className="text-primary/90 text-lg font-semibold mb-2">
            P.E.S. Modern College of Engineering, Pune, MH
          </p>
          <p className="text-background/70 mb-8">
            July 2024 -  July 2028
          </p>

            <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-muted p-4">
              <div className="text-sm uppercase tracking-[0.25em] text-primary/80 mb-2">
                CGPA
              </div>
              <div className="text-3xl font-black text-primary">9.00</div>
            </div>
            <div className="rounded-xl border border-border bg-muted p-4">
              <div className="text-sm uppercase tracking-[0.25em] text-primary/80 mb-2">
                Coursework
              </div>
              <div className="text-sm leading-relaxed text-primary">
                Data Structures And Algorithm (DSA), Object-Oriented Programming (OOP), Operating System (OS), Computer Networks (CN)
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="rounded-2xl border border-border bg-secondary/30 p-6 md:p-7 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-2xl">
            <div className="flex items-center gap-3 mb-5">
              <BookOpen className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-extrabold uppercase tracking-tight">
                Certifications
              </h3>
            </div>
            <ul className="space-y-3">
              {certifications.map((item) => (
                <li key={item} className="flex gap-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                  <Award className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-secondary/30 p-6 md:p-7 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-2xl">
            <div className="flex items-center gap-3 mb-5">
              <Trophy className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-extrabold uppercase tracking-tight">
                Achievements
              </h3>
            </div>
            <ul className="space-y-4">
              {achievements.map((item) => (
                <li key={item} className="text-sm md:text-base text-muted-foreground leading-relaxed border-b border-border/60 pb-4 last:border-b-0 last:pb-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;