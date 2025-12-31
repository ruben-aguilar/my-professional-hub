import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
  themeVariables: {
    primaryColor: "#e86c3a",
    primaryTextColor: "#f0f4f8",
    primaryBorderColor: "#2a3441",
    lineColor: "#6b7a8a",
    secondaryColor: "#1e2633",
    tertiaryColor: "#151b24",
    background: "#0d1117",
    mainBkg: "#1e2633",
    nodeBorder: "#2a3441",
    clusterBkg: "#1e2633",
    edgeLabelBackground: "#1e2633",
  },
});

interface MermaidDiagramProps {
  chart: string;
}

const MermaidDiagram = ({ chart }: MermaidDiagramProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const renderChart = async () => {
      if (!containerRef.current) return;

      try {
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
        const { svg } = await mermaid.render(id, chart);
        setSvg(svg);
        setError(null);
      } catch (err) {
        console.error("Mermaid rendering error:", err);
        setError("Failed to render diagram");
      }
    };

    renderChart();
  }, [chart]);

  if (error) {
    return (
      <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 my-4 text-destructive">
        {error}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="my-4 flex justify-center bg-muted/30 rounded-lg p-4 overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

export default MermaidDiagram;
