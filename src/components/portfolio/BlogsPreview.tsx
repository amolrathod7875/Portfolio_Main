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
          <h3 className="text-2xl md:text-3xl font-extrabold uppercase leading-tight mb-4 group-hover:text-primary transition-colors">
            Building RAG for Company-Specific Knowledge
          </h3>
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
    </section>
  );
};

export default BlogsPreview;
