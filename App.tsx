
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import NavbarMobile from './components/NavbarMobile';
import Hero from './components/Hero';
import About from './components/About';
import Study from './components/Study';
import Observe from './components/Observe';
import Work from './components/Work';
import Play from './components/Play';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import WannaTalk from './components/WannaTalk';
import Lenis from 'lenis';
import NotFound from "./components/NotFound";

// Cấu hình scroll behavior cho mobile
// Default: false (không scroll dọc)
// true: cho phép scroll dọc
const MOBILE_SCROLL_CONFIG: Record<string, boolean> = {
  home: false,      // Hero - không scroll
  about: true,      // About - scroll dọc
  study: false,      // Study - không scroll dọc
  observe: true,    // Observe - scroll dọc
  work: false,      // Work - không scroll dọc (scroll ngang)
  play: false,       // Play - không scroll dọc
  contact: false,    // Contact - không scroll dọc
};

const AppContent: React.FC = () => {
  const location = useLocation();
  const mainRef = React.useRef<HTMLElement>(null);

  useEffect(() => {
    if (!mainRef.current) return;

    const lenis = new Lenis({
      wrapper: mainRef.current,
      duration: 1.5,
      lerp: 0.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.6,
      orientation: 'vertical',
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

  // Map current path to a "page ID" for styling and Navbar state
  const getPageId = (path: string) => {
    switch (path) {
      case '/hi': return 'hi';
      case '/about': return 'about';
      case '/study': return 'study';
      case '/observe': return 'observe';
      case '/experiment': return 'work';
      case '/contact': return 'contact';
      case '/play': return 'play';
      default: return 'experiment';
    }
  };

  const currentPage = getPageId(location.pathname);
  const isNotFound = currentPage === "experiment" &&
    ![
      "/",
      "/hi",
      "/about",
      "/study",
      "/observe",
      "/experiment",
      "/play",
      "/contact",
    ].includes(location.pathname) &&
    !location.pathname.startsWith("/experiment/");
  const isMobileScrollable = MOBILE_SCROLL_CONFIG[currentPage] ?? false;

  return (
    <div className="app-container min-h-screen flex flex-col">
      {/* Desktop Navbar - hidden on mobile */}
        {!isNotFound && (
          <div className="hidden md:block">
            <Navbar currentPage={currentPage} />
          </div>
        )}

      {/* Mobile Layout - NavbarMobile + Content + WannaTalk as unified block */}
      {/* Mobile Layout - NavbarMobile + Content + WannaTalk as unified block */}
      <div className={`md:hidden flex flex-col fixed inset-0 z-50 bg-[#faf7f3] ${isMobileScrollable ? 'overflow-y-auto' : 'overflow-hidden'}`}>
        {/* Inner wrapper - contains all mobile content as unified block */}
        <div className="flex flex-col flex-1 min-h-0">
          {location.pathname !== "/404" && (
            <NavbarMobile currentPage={currentPage} showWannaTalk={false} />
          )}

          {/* Mobile Content + WannaTalk together */}
          <div className={`flex-1 flex flex-col ${isMobileScrollable ? '' : 'overflow-hidden'}`}>
            <Routes>
              <Route path="/" element={<Work />} />
              <Route path="/experiment/:projectId" element={<Work />} />
              <Route path="/hi" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/study" element={<Study />} />
              <Route path="/observe" element={<Observe />} />
              <Route path="/experiment" element={<Work />} />
              <Route path="/play" element={<Play />} />
              <Route path="/contact" element={<Contact />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>

          {/* WannaTalk - inside unified block, at bottom - hidden on Home page (handled by Hero) and About page (handled by About) */}
          {!['/', '/hi', '/about', '/study', '/observe', '/experiment', '/contact'].includes(location.pathname) && (
            <div className="w-full bg-[#faf7f3] shrink-0">
              <WannaTalk isActive={currentPage === 'contact'} />
            </div>
          )}
        </div>
      </div>


      {/* Desktop Main Container */}
      <style>{`
        @media (max-width: 767px) {
          .desktop-main {
            display: none !important;
          }
        }
      `}</style>
      <main
        ref={mainRef}
        className={`desktop-main flex-1 flex-col hidden md:flex md:justify-start
        pt-0 ${['home', 'hi', 'work', 'experiment', 'study', 'observe', 'about'].includes(currentPage) ? 'md:pt-0' : 'md:pt-[84px]'}
        ${currentPage === 'home' ? 'md:overflow-hidden' : 'overflow-y-auto'} no-scrollbar`}
      >
        <Routes>
          <Route path="/" element={<Navigate to="/experiment" replace />} />
          <Route path="/hi" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/study" element={<Study />} />
          <Route path="/observe" element={<Observe />} />
          <Route path="/experiment" element={<Work />} />
          <Route path="/experiment/:projectId" element={<Work />} />
          <Route path="/play" element={<Play />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <ScrollToTop />
    </div >
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
