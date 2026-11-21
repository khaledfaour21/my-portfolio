import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import type { PortfolioDemoHosts } from "./lib/demoUrls";

async function loadDemoHosts(): Promise<PortfolioDemoHosts> {
  try {
    const res = await fetch("/demo-hosts.json", { cache: "no-cache" });
    if (!res.ok) return {};
    const data = (await res.json()) as PortfolioDemoHosts;
    return data ?? {};
  } catch {
    return {};
  }
}

async function bootstrap() {
  window.__PORTFOLIO_DEMO_HOSTS__ = await loadDemoHosts();

  const root = document.getElementById("root");
  if (!root) throw new Error("Missing #root");

  createRoot(root).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>,
  );
}

void bootstrap();