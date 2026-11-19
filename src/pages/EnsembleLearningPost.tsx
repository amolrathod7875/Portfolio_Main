import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

import Navbar from "@/components/portfolio/Navbar";
import CursorFollower from "@/components/portfolio/CursorFollower";
import article from "@/content/ensemble-learning.md?raw";

/**
 * New post only. Leaves the existing hard-coded RAG post untouched.
 * Add a static route /blog/ensemble-learning-explained in App.tsx.
 */
const EnsembleLearningPost = () => (
  <main className="min-h-screen bg-background pt-32 md:cursor-none">
    <CursorFollower />
    <Navbar />
    <style>{`
      .katex-display {
        overflow-x: auto;
        overflow-y: hidden;
        max-width: 100%;
        text-align: center;
        margin: 1.5rem 0;
        padding: 0.25rem 0;
      }
      .katex {
        font-size: 1.05em;
      }
    `}</style>
    <article className="container mx-auto px-6 py-12 md:py-20">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          &larr; Back to Blogs
        </Link>

        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-5">
          Machine Learning &bull; Ensemble Learning
        </p>

        <div className="prose prose-lg max-w-none
          prose-headings:text-foreground prose-headings:font-extrabold
          prose-h1:uppercase prose-h1:leading-tight prose-h1:text-4xl md:prose-h1:text-6xl
          prose-h2:uppercase prose-h2:text-2xl md:prose-h2:text-3xl
          prose-h3:text-xl prose-h3:font-bold
          prose-p:text-muted-foreground prose-li:text-muted-foreground
          prose-strong:text-foreground
          prose-a:text-primary prose-a:break-words
          prose-blockquote:border-primary prose-blockquote:text-foreground
          prose-pre:bg-neutral-950 prose-pre:text-neutral-100
          prose-pre:rounded-xl prose-pre:overflow-x-auto
          prose-img:rounded-xl prose-img:border prose-img:border-border
          prose-hr:border-border
          [&_.katex-display]:block [&_.katex-display]:overflow-x-auto [&_.katex-display]:overflow-y-hidden
          [&_.katex-display]:max-w-full [&_.katex-display]:py-2 [&_.katex-display]:text-center
          [&_.katex]:align-baseline
        ">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeKatex]}
            components={{
              table: ({ children }) => (
                <div className="my-8 w-full overflow-x-auto rounded-xl border border-border">
                  <table className="my-0 w-full min-w-[560px] border-collapse text-sm">
                    {children}
                  </table>
                </div>
              ),
              thead: ({ children }) => (
                <thead className="bg-secondary/60">{children}</thead>
              ),
              th: ({ children, align }) => (
                <th
                  className="border-b border-border px-4 py-3 font-semibold text-foreground"
                  style={{ textAlign: align ?? "left" }}
                >
                  {children}
                </th>
              ),
              td: ({ children, align }) => (
                <td
                  className="border-b border-border px-4 py-3 align-top text-muted-foreground"
                  style={{ textAlign: align ?? "left" }}
                >
                  {children}
                </td>
              ),
              img: ({ src, alt }) => (
                <a
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block my-8"
                  aria-label={`Open full-size figure: ${alt ?? "article image"}`}
                >
                  <img
                    src={src}
                    alt={alt ?? ""}
                    loading="lazy"
                    className="mx-auto h-auto max-w-full rounded-xl border border-border"
                  />
                </a>
              ),
            }}
          >
            {article}
          </ReactMarkdown>
        </div>

        <Link
          to="/blog"
          className="inline-flex items-center gap-2 mt-12 mb-20 text-sm font-semibold uppercase tracking-widest text-primary hover:underline transition-colors"
        >
          &larr; Back to Blogs
        </Link>
      </div>
    </article>
  </main>
);

export default EnsembleLearningPost;
