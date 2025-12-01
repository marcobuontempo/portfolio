import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/reset.css";
import "./styles/index.css";
import App from "./App.tsx";
import ReactCursor from "@holmesdev/cursors";
import Foreground from "./components/layout/Foreground/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactCursor
      layers={[
        {
          opacity: 0.5,
          strokeSize: 10,
          effects: {
            hover: {
              scale: 1.1,
              opacity: 0.8,
            },
          },
        },
      ]}
      hoverSelector="a, button, [role='button'], input, textarea, select, [data-hoverable='true']"
    />
    <Foreground
      particleColors={["#5a00ff", "#ea00ff", "#5ff5ff"]}
      particleCount={200}
      particleSpread={12}
      speed={0.1}
      particleBaseSize={80}
      moveParticlesOnHover={true}
      alphaParticles={true}
      disableRotation={true}
    />
    <App />
  </StrictMode>
);
