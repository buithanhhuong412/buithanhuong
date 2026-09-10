import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { FreeMode, Keyboard, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';

import ThoughtDetailModal from './ThoughtDetail';
import {
  PAGE_EXPERIMENT_POPUPS,
  PageExperimentPopup,
} from '../data/experiment';

const Work: React.FC = () => {
  const { projectId } = useParams();

  useEffect(() => {
    console.log('Work mounted');

    return () => {
      console.log('Work unmounted');
    };
  }, []);

  useEffect(() => {
    console.log('projectId changed:', projectId);
  }, [projectId]);

  console.log('projectId:', projectId);

  const originalProjects = PAGE_EXPERIMENT_POPUPS;

  const [selectedProject, setSelectedProject] =
    React.useState<PageExperimentPopup | null>(null);

  useEffect(() => {
    if (!projectId) {
      setSelectedProject(null);
      return;
    }

    const project = originalProjects.find(
      (p) => p.slug === projectId
    );

    console.log('Found project:', project);
    console.log(
      'All slugs:',
      originalProjects.map((p) => p.slug)
    );

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
    let animationFrame: number;

    const smoothScroll = () => {
      if (
        !swiperRef.current ||
        Math.abs(velocityTracker) < 0.1
      ) {
        velocityTracker = 0;
        return;
      }

      const swiper = swiperRef.current;

      velocityTracker *= 0.94;

      swiper.setTransition(0);

      const newTranslate =
        swiper.getTranslate() + velocityTracker;

      swiper.setTranslate(newTranslate);

      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();

      animationFrame = requestAnimationFrame(smoothScroll);
    };

    const onWheel = (e: WheelEvent) => {
      if (!swiperRef.current) return;

      if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;

      if (swiperRef.current.autoplay.running) {
        swiperRef.current.autoplay.stop();
      }

      e.preventDefault();

      const wheelVelocity = -e.deltaY * 0.4;

      velocityTracker += wheelVelocity;

      const maxVelocity = 40;

      velocityTracker = Math.max(
        -maxVelocity,
        Math.min(maxVelocity, velocityTracker)
      );

      cancelAnimationFrame(animationFrame);

      animationFrame =
        requestAnimationFrame(smoothScroll);
    };

    window.addEventListener('wheel', onWheel, {
      passive: false,
    });

    return () => {
      window.removeEventListener('wheel', onWheel);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="h-screen md:min-h-0 md:h-screen mt-[20px] md:mt-0 py-0 md:pb-[30vh] px-0 w-full relative overflow-hidden flex flex-col md:justify-end">

      <div className="w-full h-full relative">

        <style>{`
          .work-item-container {
            width: calc(var(--scale) * 1440px);
          }

          @media (min-width: 768px) {
            .work-item-container {
              width: calc(var(--scale) * 100vw);
            }
          }

          @media (max-width: 767px) {
            .swiper-wrapper {
              transition-timing-function: linear !important;
            }
          }
        `}</style>

        <div className="flex w-full items-end justify-start pointer-events-none absolute left-0 z-20 px-8 bottom-[20%]">
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
          mousewheel={false}
          slidesOffsetBefore={32}
          keyboard={{
            enabled: true,
            onlyInViewport: true,
          }}
          modules={[FreeMode, Keyboard, Autoplay]}
          className="w-full h-full flex items-end swiper-work !overflow-visible"
        >

          {projects.map((p, i) => (
            <SwiperSlide
              key={i}
              style={{
                width: 'auto',
                paddingRight: `${p.marginRight}px`,
              }}
              className="!flex !items-end !h-auto !overflow-visible"
            >

              <div
                className="relative flex-shrink-0 group work-item-container"
                style={
                  {
                    '--scale': p.scale,
                  } as React.CSSProperties
                }
                onClick={() => {
                  setSelectedProject(p);
                }}
              >

                {/* IMAGE */}
                <div className="relative w-full overflow-visible cursor-pointer">

                  {/* Image wrapper */}
                  <div className="relative w-full overflow-hidden transition-all duration-700 max-h-[244px]">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="block w-full h-full object-cover transition-all duration-1000"
                    />
                  </div>

                  {/* TITLE */}
                  <div
                    className="absolute left-1/2 opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{
                      top: 'calc(100% + 18px)',
                      transform: 'translateX(-50%)',
                      width: 'max-content',
                      maxWidth: 'none',
                    }}
                  >
                    <p
                      className="font-stix text-[16px] text-[#1d3413] leading-[20px]"
                      style={{
                        fontFamily: '"STIX Two Text", serif',
                        fontStyle: 'normal',
                        fontWeight: 400,

                        /*
                         * Cho phép \n trong title tạo xuống dòng.
                         * Không tự động wrap nếu không có \n.
                         */
                        whiteSpace: 'pre',

                        textAlign: 'center',
                        margin: 0,
                      }}
                    >
                      {p.title}
                    </p>
                  </div>

                </div>

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
        data={
          selectedProject
            ? {
                text: selectedProject.title,
                article: selectedProject.article,
                image: {
                  src: selectedProject.img,
                },
              }
            : null
        }
      />

    </section>
  );
};

export default Work;