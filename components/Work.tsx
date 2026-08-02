import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { FreeMode, Keyboard, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';

import ThoughtDetailModal from './ThoughtDetail';
import { PAGE_EXPERIMENT_POPUPS, PageExperimentPopup } from '../data/experiment';

const Work: React.FC = () => {
  const { projectId } = useParams();
  useEffect(() => {
    console.log("Work mounted");

    return () => {
      console.log("Work unmounted");
    };
  }, []);
  useEffect(() => {
    console.log("projectId changed:", projectId);
  }, [projectId]);

  console.log("projectId:", projectId);
  const navigate = useNavigate();

  const originalProjects = PAGE_EXPERIMENT_POPUPS;

  const [selectedProject, setSelectedProject] = React.useState<PageExperimentPopup | null>(null);
    useEffect(() => {
    if (!projectId) {
      setSelectedProject(null);
      return;
    }

    const project = originalProjects.find(
      (p) => p.slug === projectId
    );
    
    console.log("Found project:", project);
    console.log("All slugs:", originalProjects.map(p => p.slug));

    if (project) {
      setSelectedProject(project);
    }
  }, [projectId]);

  const repeatCount = 9;

  const projects = Array(repeatCount)
    .fill(originalProjects)
    .flat();
  
  const initialSlide =
  Math.floor(repeatCount / 2) * originalProjects.length;

  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    let velocityTracker = 0;
    let lastTime = Date.now();
    let animationFrame: number;

    const smoothScroll = () => {
      // Disabled for the new auto-scroll logic, or we can keep it for desktop if needed. 
      // The user asked for "mobile auto scroll", but typically with Swiper Autoplay delay 0, it overrides manual control unless configured well.
      // However, usually "drift" implies continuous movement.
      if (!swiperRef.current || Math.abs(velocityTracker) < 0.1) {
        velocityTracker = 0;
        return;
      }

      const swiper = swiperRef.current;

      // Giảm dần velocity (friction)
      velocityTracker *= 0.94;

      // Áp dụng velocity
      swiper.setTransition(0);

      const newTranslate = swiper.getTranslate() + velocityTracker;

      swiper.setTranslate(newTranslate);

      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();

      animationFrame = requestAnimationFrame(smoothScroll);
    };

    const onWheel = (e: WheelEvent) => {
      if (!swiperRef.current) return;
      if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;

      // Stop autoplay on wheel
      if (swiperRef.current.autoplay.running) {
        swiperRef.current.autoplay.stop();
      }

      e.preventDefault();

      const now = Date.now();
      const deltaTime = now - lastTime;
      lastTime = now;

      // Tính velocity mới dựa trên deltaY
      const wheelVelocity = -e.deltaY * 0.4;

      // Cộng dồn velocity (để có cảm giác tích lũy khi scroll nhanh)
      velocityTracker += wheelVelocity;

      // Giới hạn velocity tối đa
      const maxVelocity = 40;
      velocityTracker = Math.max(-maxVelocity, Math.min(maxVelocity, velocityTracker));

      // Bắt đầu animation nếu chưa chạy
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(smoothScroll);
    };

    window.addEventListener('wheel', onWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', onWheel);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="h-screen md:min-h-0 md:h-screen mt-[20px] md:mt-0 py-0 md:pb-[30vh] px-0 w-full relative overflow-hidden flex flex-col md:justify-end">

      {/* Unified Swiper Layout for both Mobile and Desktop */}
      <div className="w-full h-full relative">
        <style>{`
          .work-item-container {
             /* Mobile: Use large reference width to keep images "PC-sized" */
             width: calc(var(--scale) * 1440px); 
          }
          @media (min-width: 768px) {
            .work-item-container {
               /* Desktop: Scale based on viewport width */
               width: calc(var(--scale) * 100vw);
            }
          }
          /* Smooth linear scrolling for Marquee effect - MOBILE ONLY */
          @media (max-width: 767px) {
            .swiper-wrapper {
              transition-timing-function: linear !important;
            }
          }
        `}</style>

        <div className="flex w-full items-end justify-start pointer-events-none absolute left-0 z-20 px-8 bottom-[20%]">
          {/* ... keeping original absolute spacer label if needed, or remove if unused ... */}
        </div>

        <Swiper
          watchOverflow={false}
          onSwiper={(s) => {
            swiperRef.current = s;
          }}
          direction="horizontal"
          slidesPerView="auto"
          initialSlide={initialSlide}
          spaceBetween={0}
          loop={false}
          loopedSlides={originalProjects.length}
          autoplay={false}
          speed={600}
          freeMode={{
            enabled: true,
            momentum: true,
            momentumRatio: 0.8,
            momentumVelocityRatio: 0.8,
            momentumBounce: false,
            sticky: false,
          }}
          grabCursor={false}
          mousewheel={false} // Custom wheel implementation above
          slidesOffsetBefore={32}
          keyboard={{
            enabled: true,
            onlyInViewport: true,
          }}
          modules={[FreeMode, Keyboard, Autoplay]}
          className="w-full h-full flex items-end swiper-work"
        >
          {projects.map((p, i) => (
            <SwiperSlide
              key={i}
              style={{ width: 'auto', paddingRight: `${p.marginRight}px` }}
              className="!flex items-end !h-auto"
            >
              <div
                className="space-y-4 flex flex-col items-center group flex-shrink-0 work-item-container"
                style={{ '--scale': p.scale } as React.CSSProperties}
                onClick={() => {
                  setSelectedProject(p);
                }}
              >
                <div className="w-full overflow-hidden transition-all duration-700 cursor-pointer max-h-[244px]">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-all duration-1000"
                  />
                </div>
                <p
                  className="font-stix text-[16px] text-[#1d3413] opacity-0 group-hover:opacity-100 whitespace-nowrap mt-4 leading-[20px] text-center"
                  style={{ fontFamily: '"STIX Two Text", serif', fontStyle: 'normal', fontWeight: 400 }}
                >
                  {p.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <ThoughtDetailModal
        isOpen={!!selectedProject}
        onClose={() => {
          setSelectedProject(null);
        }}
        data={selectedProject ? { text: selectedProject.title, article: selectedProject.article, image: { src: selectedProject.img } } : null}
      />

    </section>
  );
};

export default Work;