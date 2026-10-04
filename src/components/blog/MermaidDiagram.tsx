import { useEffect, useId, useRef, useState } from "react";
import mermaid from "mermaid";

type MermaidDiagramProps = {
  chart: string;
  className?: string;
};

mermaid.initialize({
  startOnLoad: false,
  securityLevel: "strict",
  theme: "base",
});

const MermaidDiagram = ({ chart, className }: MermaidDiagramProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const reactId = useId();
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const renderDiagram = async () => {
      try {
        setError(false);

        const id = `mermaid-${reactId}`.replace(/[^a-zA-Z0-9-_]/g, "");

        const { svg } = await mermaid.render(id, chart);

        if (!cancelled && containerRef.current) {
          containerRef.current.innerHTML = svg;
        }
      } catch (err) {
        console.error("Mermaid rendering failed:", err);
        if (!cancelled) {
          setError(true);
        }
      }
    };

    renderDiagram();

    return () => {
      cancelled = true;
    };
  }, [chart, reactId]);

  if (error) {
    return (
      <div className="text-sm text-muted-foreground">Diagram unavailable</div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`overflow-x-auto [&_svg]:max-w-full [&_svg]:h-auto ${className ?? ""}`}
      aria-label="RAG architecture diagram"
    />
  );
};

export default MermaidDiagram;
