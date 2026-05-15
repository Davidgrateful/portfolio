/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import BackgroundWave from "./components/BackgroundWave";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Works from "./pages/Works";
import About from "./pages/About";
import ProjectDetail from "./pages/ProjectDetail";
import Web3Portfolio from "./pages/Web3Portfolio";
import Web3Works from "./pages/Web3Works";
import Web3About from "./pages/Web3About";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Demo from "./pages/Demo";

// Dashboard Imports
import LoginPage from "./pages/dashboard/LoginPage";
import DashboardHome from "./pages/dashboard/DashboardHome";
import DashboardProjects from "./pages/dashboard/DashboardProjects";
import DashboardBlog from "./pages/dashboard/DashboardBlog";
import DashboardEcosystem from "./pages/dashboard/DashboardEcosystem";
import DashboardSettings from "./pages/dashboard/DashboardSettings";
import DashboardLayout from "./pages/dashboard/DashboardLayout";

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

  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard') || location.pathname === '/login';

  return (
    <>
      <ScrollToTop />
      <div className={`text-sec min-h-screen font-sans selection:bg-sec selection:text-main transition-colors duration-700 ${isDashboard ? 'bg-[#0a0a0a]' : 'bg-main'}`}>
        {!isDashboard && (
          <>
            <BackgroundWave />
            <CustomCursor />
            <Navbar />
          </>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
          <Route path="/web3" element={<Web3Portfolio />} />
          <Route path="/web3-works" element={<Web3Works />} />
          <Route path="/web3-about" element={<Web3About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:slug" element={<EventDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/demo" element={<Demo />} />

          {/* Dashboard Hub */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={
            <DashboardLayout>
              <DashboardHome />
            </DashboardLayout>
          } />
          <Route path="/dashboard/projects" element={
            <DashboardLayout>
              <DashboardProjects />
            </DashboardLayout>
          } />
          <Route path="/dashboard/blog" element={
            <DashboardLayout>
              <DashboardBlog />
            </DashboardLayout>
          } />
          <Route path="/dashboard/ecosystem" element={
            <DashboardLayout>
              <DashboardEcosystem />
            </DashboardLayout>
          } />
          <Route path="/dashboard/settings" element={
            <DashboardLayout>
              <DashboardSettings />
            </DashboardLayout>
          } />
        </Routes>
        {!isDashboard && <Footer />}
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
