import { useLocation } from "react-router-dom";
import BlockchainBlocks from "./scenes/BlockchainBlocks";
import CodeMatrix from "./scenes/CodeMatrix";
import TokenFlow from "./scenes/TokenFlow";
import Starfield from "./scenes/Starfield";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();

  let Scene;
  switch (pathname) {
    case "/":
      Scene = Starfield;
      break;
    case "/projects":
      Scene = Starfield;
      break;
    case "/about":
      Scene = Starfield;
      break;
    case "/contact":
      Scene = Starfield;
      break;
    default:
      Scene = Starfield;
  }

  return (
    <div className="h-screen w-screen relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#312e81]">
      {/* Dynamic 3D Scene */}
      <Scene />

      {/* Overlay Content */}
      <div className="absolute inset-0 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
