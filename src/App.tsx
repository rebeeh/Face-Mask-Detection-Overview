import { useState, useEffect, useCallback, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Layout
import ProgressBar from './components/layout/ProgressBar';
import SideNav from './components/layout/SideNav';
import NavControls from './components/layout/NavControls';

// Slides
import HeroSlide from './components/slides/HeroSlide';
import DataSlide from './components/slides/DataSlide';
import StackSlide from './components/slides/StackSlide';
import PreprocessingSlide from './components/slides/PreprocessingSlide';
import YuNetSlide from './components/slides/YuNetSlide';
import AnalyticsSlide from './components/slides/AnalyticsSlide';
import MobileNetSlide from './components/slides/MobileNetSlide';
import ThreadingSlide from './components/slides/ThreadingSlide';
import OptimizationSlide from './components/slides/OptimizationSlide';
import ConclusionSlide from './components/slides/ConclusionSlide';

import type { SlideDefinition } from './types';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  /**
   * Stable slides array — recreated only once (no data dependencies change).
   * Avoids the performance hit of rebuilding the JSX array on every render.
   */
  const slides: SlideDefinition[] = useMemo(
    () => [
      { id: 'hero', content: <HeroSlide /> },
      { id: 'data', content: <DataSlide /> },
      { id: 'stack', content: <StackSlide /> },
      { id: 'preprocessing', content: <PreprocessingSlide /> },
      { id: 'yunet', content: <YuNetSlide /> },
      { id: 'analytics', content: <AnalyticsSlide /> },
      { id: 'mobilenet', content: <MobileNetSlide /> },
      { id: 'threading', content: <ThreadingSlide /> },
      { id: 'optimization', content: <OptimizationSlide /> },
      { id: 'conclusion', content: <ConclusionSlide /> },
    ],
    [],
  );

  /**
   * Stable navigation callbacks — prevents unnecessary re-subscriptions
   * of the keyboard listener on every render.
   */
  const next = useCallback(
    () => setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1)),
    [slides.length],
  );

  const prev = useCallback(
    () => setCurrentSlide(prev => Math.max(prev - 1, 0)),
    [],
  );

  /**
   * Keyboard navigation.
   * Bug fix: `next` and `prev` are now stable `useCallback` refs, so this
   * effect correctly re-runs only when those functions change — no more
   * stale closure capturing the initial slide index.
   */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [next, prev]);

  return (
    <div className="fixed inset-0 bg-[#020617] text-slate-200 overflow-hidden font-sans selection:bg-emerald-500/30">
      {/* Ambient background glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/10 blur-[200px] rounded-full pointer-events-none opacity-40" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/5 blur-[200px] rounded-full pointer-events-none opacity-40" />

      {/* Progress bar */}
      <ProgressBar current={currentSlide} total={slides.length} />

      {/* Side navigation dots */}
      <SideNav
        count={slides.length}
        current={currentSlide}
        onSelect={setCurrentSlide}
      />

      {/* Slide content */}
      <div className="relative z-10 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div key={currentSlide} className="w-full h-full">
            {slides[currentSlide].content}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom navigation */}
      <NavControls
        current={currentSlide}
        total={slides.length}
        onNext={next}
        onPrev={prev}
      />
    </div>
  );
}