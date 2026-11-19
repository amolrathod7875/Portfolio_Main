import { Link } from "react-router-dom";
import Navbar from "@/components/portfolio/Navbar";
import CursorFollower from "@/components/portfolio/CursorFollower";

const Blog = () => {
  return (
    <main className="min-h-screen bg-background pt-32 md:cursor-none">
      <CursorFollower />
      <Navbar />
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="heading-display text-5xl md:text-7xl mb-6">
            BLOGS
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-16 max-w-2xl">
            ENGINEERING NOTES, IDEAS & EXPERIMENTS. Writing about AI systems,
            machine learning, RAG, infrastructure, and lessons from building
            real-world projects.
          </p>
        </div>

        <div className="max-w-3xl space-y-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
              Latest
            </p>
            <Link
              to="/blog/ensemble-learning-explained"
              className="group block rounded-2xl border border-border bg-background p-8 md:p-10 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Machine Learning • Ensemble Learning
                </span>
                <span className="text-xs font-medium text-muted-foreground">
                  18 min read
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold uppercase leading-tight mb-4 group-hover:text-primary transition-colors">
                Ensemble Learning Explained: Why Multiple Models Can Outperform One
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From voting and bagging to random forests, boosting, and
                stacking — with mathematical intuition, diagrams, and a
                reproducible Python experiment.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">
                  Nov 19, 2026
                </span>
                <span className="text-2xl font-light text-primary transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </div>
            </Link>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
              Featured Blog
            </p>
            <Link
              to="/blog/building-rag-for-company-knowledge"
              className="group block rounded-2xl border border-border bg-background p-8 md:p-10 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  AI Systems • RAG
                </span>
                <span className="text-xs font-medium text-muted-foreground">
                  12 min read
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold uppercase leading-tight mb-4 group-hover:text-primary transition-colors">
                Building RAG for Company-Specific Knowledge
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                A practical look at building retrieval-augmented generation
                systems for private organizational data.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">
                  Oct 04, 2026
                </span>
                <span className="text-2xl font-light text-primary transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
