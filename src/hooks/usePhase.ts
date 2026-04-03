import { useLocation } from "react-router-dom";

const WEB3_PROJECT_SLUGS = ["harapay", "arcle", "ai-sales-inbox"];

/**
 * Single source of truth for determining which phase (Web2 vs Web3)
 * the user is currently in. Used by Navbar, MusicPlayer, and any other
 * component that needs phase-aware behaviour.
 */
export function usePhase() {
  const location = useLocation();
  const locationState = location.state as { phase?: string } | null;

  const isWeb3 =
    location.pathname.startsWith("/web3") ||
    location.pathname.startsWith("/events") ||
    ((location.pathname.startsWith("/blog") || location.pathname === "/services") &&
      locationState?.phase === "web3") ||
    (location.pathname.startsWith("/project/") &&
      WEB3_PROJECT_SLUGS.some((slug) => location.pathname.includes(slug)));

  return { isWeb3, location, locationState };
}
