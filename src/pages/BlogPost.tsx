import { Link } from "react-router-dom";
import Navbar from "@/components/portfolio/Navbar";
import CursorFollower from "@/components/portfolio/CursorFollower";
import MermaidDiagram from "@/components/blog/MermaidDiagram";

const BlogPost = () => {
  return (
    <main className="min-h-screen bg-background pt-32 md:cursor-none">
      <CursorFollower />
      <Navbar />
      <article className="container mx-auto px-6 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              &larr; Back to Blogs
            </Link>
          </div>

          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            AI Systems • RAG
          </span>

          <h1 className="heading-display text-4xl md:text-6xl mt-4 mb-6">
            Building RAG for Company-Specific Knowledge
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            A practical look at building retrieval-augmented generation
            systems for private organizational data.
          </p>

          <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground mb-16">
            <span>Oct 04, 2026</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/40" aria-hidden="true" />
            <span>12 min read</span>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              Large language models are powerful, but they do not automatically
              know the private information that belongs to an organization.
              Product catalogues, technical manuals, internal procedures,
              support documents, and company-specific knowledge may never have
              appeared in the model&apos;s training data.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-12">
              Retrieval-Augmented Generation, or RAG, provides a practical way
              to connect this private knowledge with a language model without
              retraining the entire model.
            </p>

            <h2 className="heading-display text-2xl md:text-4xl mt-16 mb-6">
              Why RAG?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              Imagine asking an AI assistant a question such as:
            </p>
            <blockquote className="border-l-4 border-primary pl-6 italic text-foreground/90 mb-8">
              &ldquo;What is the recommended operating pressure for Product X?&rdquo;
            </blockquote>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-12">
              If that information exists only inside an internal product
              catalogue, a general-purpose language model cannot reliably answer
              the question. Instead of expecting the model to memorize company
              data, a RAG system retrieves the most relevant information at
              query time and provides that information as context to the model.
            </p>

            <h2 className="heading-display text-2xl md:text-4xl mt-16 mb-6">
              The Basic Architecture
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              A typical RAG pipeline moves data through several stages before
              an answer reaches the user.
            </p>
            <div className="rounded-2xl border border-border bg-secondary/60 p-6 md:p-10 mb-12">
              <MermaidDiagram
                chart={`
                  flowchart LR
                      A[Documents] --> B[Parsing]
                      B --> C[Chunking]
                      C --> D[Embeddings]
                      D --> E[Vector Store]
                      E --> F[Retrieval]
                      F --> G[LLM]
                      G --> H[Answer]
                    `}
              />
            </div>

            <h2 className="heading-display text-2xl md:text-4xl mt-16 mb-6">
              1. Document Processing
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              Before information can be retrieved, the source documents must be
              converted into clean text. Depending on the source, this may
              involve PDF parsing, OCR, spreadsheet processing, document
              extraction, or metadata handling.
            </p>
            <ul className="list-disc list-inside text-base md:text-lg text-muted-foreground leading-relaxed mb-12 space-y-2">
              <li>PDF documents</li>
              <li>Product catalogues</li>
              <li>Technical manuals</li>
              <li>Internal documentation</li>
              <li>Structured company information</li>
            </ul>

            <h2 className="heading-display text-2xl md:text-4xl mt-16 mb-6">
              2. Chunking
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-12">
              Instead of storing an entire document as one searchable object,
              the content is divided into smaller chunks. Chunk size and overlap
              affect both retrieval quality and the amount of context passed to
              the model. Very small chunks may lose important context, while
              very large chunks may retrieve too much irrelevant information.
            </p>

            <h2 className="heading-display text-2xl md:text-4xl mt-16 mb-6">
              3. Embeddings
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-12">
              Each chunk can be converted into a numerical vector representation
              called an embedding. Semantically similar pieces of text tend to
              occupy nearby regions in the embedding space.
            </p>

            <h2 className="heading-display text-2xl md:text-4xl mt-16 mb-6">
              4. Retrieval
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-12">
              When a user asks a question, the query is also converted into a
              representation that can be compared against stored knowledge. The
              system retrieves the chunks most relevant to the query and passes
              them to the generation model as supporting context.
            </p>

            <h2 className="heading-display text-2xl md:text-4xl mt-16 mb-6">
              A Simple Retrieval Example
            </h2>
            <div className="rounded-2xl border border-border bg-foreground p-6 md:p-8 overflow-x-auto mb-12">
              <pre className="text-sm md:text-base text-background/90 font-mono leading-relaxed whitespace-pre">
{`query = "What is the operating pressure of Product X?"

relevant_chunks = retriever.search(
    query=query,
    top_k=5
)

context = "\\n".join(relevant_chunks)

answer = llm.generate(
    question=query,
    context=context
)

print(answer)`}
              </pre>
            </div>

            <h2 className="heading-display text-2xl md:text-4xl mt-16 mb-6">
              Challenges That Matter
            </h2>
            <ul className="list-disc list-inside text-base md:text-lg text-muted-foreground leading-relaxed mb-12 space-y-2">
              <li>Choosing the right chunk size</li>
              <li>Handling tables and technical documents</li>
              <li>Preventing irrelevant retrieval</li>
              <li>Managing document updates</li>
              <li>Evaluating answer quality</li>
              <li>Reducing hallucinations</li>
            </ul>

            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 md:p-10 mb-12">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                RAG quality depends on much more than the language model.
                Document quality, chunking, metadata, retrieval strategy,
                reranking, and evaluation can have a major effect on the final
                answer.
              </p>
            </div>

            <h2 className="heading-display text-2xl md:text-4xl mt-16 mb-6">
              What I Learned
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-12">
              Building a useful RAG system is not simply a matter of connecting a
              vector database to an LLM. Retrieval quality becomes one of the
              most important parts of the system. The process also forces
              careful thinking about how knowledge is organized, updated,
              retrieved, and evaluated.
            </p>

            <h2 className="heading-display text-2xl md:text-4xl mt-16 mb-6">
              Conclusion
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-16">
              RAG provides a practical architecture for making
              organization-specific knowledge available to AI systems while
              keeping the underlying information separate from the model itself.
              This dummy post is currently being used to design and evaluate the
              technical-blog experience of this portfolio.
            </p>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary hover:underline transition-colors mb-20"
          >
            &larr; Back to Blogs
          </Link>
        </div>
      </article>
    </main>
  );
};

export default BlogPost;
