/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import BackgroundWave from "./components/BackgroundWave";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Works from "./pages/Works";
import About from "./pages/About";
import Events from "./pages/Events";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <ScrollToTop />
      <div className="text-sec min-h-screen font-sans selection:bg-sec selection:text-main transition-colors duration-700 bg-main">
        <BackgroundWave />
        <CustomCursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/events" element={<Events />} />

          {/* Old links from the previous template point to the current pages */}
          <Route path="/web3" element={<Navigate to="/" replace />} />
          <Route path="/web3-works" element={<Navigate to="/works" replace />} />
          <Route path="/web3-about" element={<Navigate to="/about" replace />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}
