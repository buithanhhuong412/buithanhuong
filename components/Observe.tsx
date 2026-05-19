import React from 'react';
import SectionLabel from './SectionLabel';
import WannaTalk from './WannaTalk';
import ThoughtDetailModal from './ThoughtDetail';
import { OBSERVE_POPUPS, ObservePopup } from '../data/observe';

interface ObserveProps {
}

const Observe: React.FC<ObserveProps> = () => {
  const [selectedThought, setSelectedThought] = React.useState<ObservePopup | null>(null);

  const thoughts = OBSERVE_POPUPS;

  return (
    <section className="w-full md:h-screen relative md:overflow-hidden flex flex-col items-center flex-1">
      {/* Mobile Layout - Scrollable Container */}
      <div className="md:hidden w-full flex flex-col justify-between items-center px-[32px] flex-1">
        <div className="w-full flex flex-col items-center">
          {/* Section Label */}
          <SectionLabel
            text="what's around me"
            width="214px"
            mobileWidth="214px"
            className="relative"
          />

          {/* Thoughts List */}
          <div className="w-full flex flex-col gap-8 items-center">
            {thoughts.map((item, i) => (
              <div
                key={i}
                onClick={() => setSelectedThought(item)}
                className="group relative flex flex-row items-end text-[16px] font-stix text-[#1d3413] leading-[20px] cursor-pointer w-full gap-[24px]"
              >
                {/* Mobile Image: Left side, static */}
                {item.image && (
                  <div className="shrink-0 w-[120px] h-[120px]">
                    <img
                      src={item.image.src}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Text */}
                <span className="relative z-10 text-left flex-1">
                  {i === 0 && (
                    <>
                      Highschool Student <br /> Assessment or fastest- <br /> finger-first competition?
                    </>
                  )}
                  {i === 1 && (
                    <>
                      Digital Product vs <br /> Architecture - a type of <br /> huge physical product
                    </>
                  )}
                  {i > 1 && item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* WannaTalk - Always at bottom */}
        <div className="w-full pt-[88px] flex justify-center pb-0">
          <WannaTalk isActive={false} />
        </div>
      </div>

      {/* Desktop Layout - Fixed Viewport (Hidden on Mobile) */}
      <div className="hidden md:flex fixed inset-0 w-full h-full flex-col items-center justify-center pointer-events-none">

        {/* Desktop Section Label */}
        <div className="fixed top-1/2 left-0 w-full -translate-y-1/2 flex items-center justify-start z-10">
          <SectionLabel
            text="what's around me"
            width="214px"
            mobileWidth="214px"
          />
        </div>

        {/* Main Content - Centered */}
        <div className="relative w-full md:w-max md:ml-[120px] md:p-[32px_42px] pointer-events-auto">
          <div className="flex flex-col gap-[16px] w-full items-start">
            {thoughts.map((item, i) => (
              <div
                key={i}
                onClick={() => setSelectedThought(item)}
                className="group relative block items-start text-[16px] font-stix text-[#1d3413] leading-[20px] cursor-pointer w-fit transition-opacity"
              >
                {/* Desktop Text */}
                <span className="relative z-10 text-left inline-block">
                  {item.text}
                </span>

                {/* Desktop Hover Image */}
                {item.image && (
                  <div
                    className="absolute left-full top-1/2 -translate-y-1/2 ml-4 z-50 pointer-events-none"
                    style={{
                      width: item.image.width,
                    }}
                  >
                    <img
                      src={item.image.src}
                      alt={item.text}
                      className="w-full h-auto object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-left rounded-sm"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <ThoughtDetailModal
        isOpen={!!selectedThought}
        onClose={() => setSelectedThought(null)}
        data={selectedThought}
      />
    </section>
  );
};

export default Observe;

