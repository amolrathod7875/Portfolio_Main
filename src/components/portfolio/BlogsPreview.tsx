import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const BlogsPreview = () => {
  return (
    <section className="container mx-auto px-6 py-24 md:py-32">
      <div className="flex items-end justify-between mb-16">
        <h2 className="heading-display text-5xl md:text-7xl max-w-3xl">
          BLOGS
        </h2>
        <Link
          to="/blog"
          className="relative text-foreground hover:text-primary transition-colors duration-300 mb-2"
        >
          <ArrowUpRight className="h-6 w-6 md:h-8 md:w-8" />
        </Link>
      </div>
      <div className="max-w-3xl">
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
          <h3 className="text-2xl md:text-3xl font-extrabold uppercase leading-tight mb-4 group-hover:text-primary transition-colors">
            Ensemble Learning Explained: Why Multiple Models Can Outperform One
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-8">
            From voting and bagging to random forests, boosting, and stacking
            — with mathematical intuition, diagrams, and a reproducible Python
            experiment.
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
    </section>
  );
};

export default BlogsPreview;
