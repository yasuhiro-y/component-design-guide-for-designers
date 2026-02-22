import { Suspense } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import { figures, getFigureById } from "./routes";

function Gallery() {
  return (
    <div style={{ padding: "48px 0", maxWidth: 820, margin: "0 auto" }}>
      <h1
        style={{
          fontSize: 18,
          fontWeight: 600,
          marginBottom: 40,
          color: "#18181b",
          fontFamily: '"Inter", sans-serif',
          paddingLeft: 10,
        }}
      >
        All Illustrations ({figures.length})
      </h1>
      <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
        {figures.map((fig) => {
          const Component = fig.component;
          return (
            <div key={fig.id}>
              <div
                style={{
                  fontSize: 12,
                  color: "#a1a1aa",
                  marginBottom: 8,
                  paddingLeft: 10,
                  fontFamily: '"SF Mono", Menlo, monospace',
                }}
              >
                {fig.id}
              </div>
              <Suspense fallback={<div style={{ padding: 40, color: "#a1a1aa" }}>Loading...</div>}>
                <Component />
              </Suspense>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function FigureView() {
  const { id } = useParams<{ id: string }>();
  const figure = id ? getFigureById(id) : null;

  if (!figure) {
    return <div style={{ padding: 48, color: "#71717a" }}>Figure not found: {id}</div>;
  }

  const Component = figure.component;

  return (
    <div style={{ padding: 48, display: "flex", justifyContent: "center" }}>
      <Suspense fallback={<div>Loading...</div>}>
        <Component />
      </Suspense>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Gallery />} />
      <Route path="/fig/:id" element={<FigureView />} />
    </Routes>
  );
}
