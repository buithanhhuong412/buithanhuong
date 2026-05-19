import React from 'react';
import SectionLabel from './SectionLabel';
import WannaTalk from './WannaTalk';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

interface StudyProps {
}

const Study: React.FC<StudyProps> = () => {
  const gems = [
    {
      text: "Teeter-totter wall - designing for human connection rights",
      image: "images/image1.png",
      width: "256px",
      height: "175px"
    },
    {
      text: "Missing bullet holes of fighters - a classic data analysis case study",
      image: "images/image2.png",
      width: "256px",
      height: "191px"
    },
    {
      text: "Mōn - Tran Canh's ashtray",
      image: "images/image3.png",
      width: "180px",
      height: "180px"
    }
  ];

  // Use Swiper for mobile "infinite" scroll simulation
  // Duplicate enough times to ensure smooth loop with Swiper
  const mobileGems = [...gems, ...gems, ...gems, ...gems];

  return (
    <section className="w-full md:h-screen relative overflow-hidden flex-grow flex flex-col md:block flex-1">
      {/* Mobile Layout - Full height, No scroll, WannaTalk at bottom */}
      <div className="md:hidden w-full h-full flex flex-col justify-between items-center pt-[60px]">
        {/* Header Block */}
        <div className="w-full flex justify-center">
          <SectionLabel
            text="gems"
            width="192px"
            mobileWidth="192px"
            className="relative"
          />
        </div>

        {/* Content Block - Centered vertically in available space */}
        <div className="w-full flex-1 flex items-end overflow-hidden pb-8">
          <Swiper
            direction="horizontal"
            slidesPerView="auto"
            spaceBetween={32}
            centeredSlides={true}
            loop={true}
            speed={6000} // Slow continuous speed
            autoplay={{
              delay: 0,
              disableOnInteraction: false, // Continue autoplay after interaction
              pauseOnMouseEnter: true, // Pause when holding/hovering
            }}
            freeMode={{
              enabled: true,
              momentum: true,
            }}
            modules={[Autoplay, FreeMode]}
            className="w-full study-swiper"
          >
            {mobileGems.map((item, i) => (
              <SwiperSlide key={`mobile-${i}`} className="!w-[219px] !flex !justify-center !h-auto">
                <a
                  href="#"
                  className="group relative flex flex-col items-center shrink-0 w-[219px] text-[16px] font-stix text-[#1d3413] transition-all leading-[20px]"
                >
                  <div
                    className="relative mb-6 opacity-100 transition-opacity duration-300 pointer-events-none z-20 w-[219px] h-[150px]"
                  >
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="block whitespace-normal w-full text-center">{item.text}</span>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
          <style>{`
             .study-swiper .swiper-wrapper {
               transition-timing-function: linear; /* For marquee effect */
             }
           `}</style>
        </div>

        {/* Footer Block */}
        <div className="w-full flex justify-center">
          <WannaTalk isActive={false} />
        </div>
      </div>

      {/* PC VIEW: Restore original structure exactly */}
      <div className="hidden md:flex fixed top-1/2 left-0 w-full -translate-y-1/2 items-center justify-center pointer-events-none z-10">
        <SectionLabel
          text="gems"
          width="192px"
          mobileWidth="192px"
        />
      </div>

      <div className="hidden md:flex flex-col relative md:fixed bottom-0 left-0 w-full items-center justify-end z-10 pointer-events-none">
        <div className="w-full text-center p-[120px_32px_32px_32px] pointer-events-auto overflow-visible">
          <div className="flex flex-col gap-[16px] items-center">
            {gems.map((item, i) => (
              <a
                key={`desktop-${i}`}
                href="#"
                className="group relative block text-[16px] font-stix text-[#1d3413] transition-all w-fit leading-[20px]"
              >
                {/* Hover Image: Centered, 8px above text */}
                <div
                  className="absolute bottom-full mb-[8px] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 md:w-[var(--d-w)] md:h-[var(--d-h)]"
                  style={{ '--d-w': item.width, '--d-h': item.height } as React.CSSProperties}
                >
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                <span className="block">{item.text}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Study;
