import React from 'react';
import SectionLabel from './SectionLabel';
import WannaTalk from './WannaTalk';
import { COLORS, TYPOGRAPHY } from '../config/designTokens';

const About: React.FC = () => {
  const currentInterests = [
    { label: 'redesigning', desc: 'my family living experience at Phuongmao house' },
    { label: 'redesigning', desc: 'my family living experience at Phuongmao house' },
    { label: 'learning', desc: 'data analytics & psychology' },
    { label: 'arranging', desc: 'flowers at felicità' },
    { label: 'coloring', desc: 'what color was your day?' },
  ];

  const history = [
    { period: '2021 - now', desc: 'design digital product' },
    { period: '2020 - 2021', desc: 'simulate energy and audit green building' },
    { period: '2018 - 2021', desc: 'design architecture' },
    { period: '2013 - 2018', desc: 'learn architecture & design' },
  ];

  return (
    <section className="w-full md:h-screen relative md:overflow-hidden flex flex-col items-center flex-1">
      {/* Mobile Layout - Scrollable Container */}
      <div className="md:hidden w-full flex flex-col justify-between items-center pt-[60px] px-[32px] flex-1">
        <div className="w-full flex flex-col items-center gap-[48px]">
          {/* Block 1: Interests */}
          <div className="w-full flex flex-col items-center gap-0">
            <SectionLabel
              text="'m"
              width="84px"
              mobileWidth="84px"
              className="relative"
            />
            <div className="w-full space-y-2 flex flex-col items-center pt-[32px]">
              {currentInterests.map((item, idx) => (
                <div key={idx} className="w-full text-center text-[#1d3413] px-2" style={{ fontFamily: TYPOGRAPHY.body.fontFamily, fontSize: '16px', lineHeight: '24px' }}>
                  <span className="font-medium mr-1">{item.label}</span>
                  <span className="opacity-100">{item.desc}{idx < currentInterests.length - 1 ? ',' : ''}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Block 2: History */}
          <div className="w-full flex flex-col items-center gap-0">
            <SectionLabel
              text="drifted"
              width="112px"
              mobileWidth="112px"
              className="relative"
            />
            <div className="w-full space-y-4 pt-[32px]">
              {history.map((item, idx) => (
                <div key={idx} className="flex flex-row gap-4 text-[16px] leading-[20px] justify-between items-start text-left w-full">
                  <span className="w-[120px] shrink-0 text-[#1d3413] font-normal whitespace-nowrap">{item.period}</span>
                  <span className="text-[#1d3413] flex-1 opacity-100">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Block 3: WannaTalk */}
        <div className="w-full pt-[88px] pb-0 flex justify-center">
          <WannaTalk isActive={false} />
        </div>
      </div>

      {/* Desktop Layout - Kept but hidden on mobile */}
      <div className="hidden md:flex w-full flex-1 relative flex flex-col">

        {/* Group 1: Interests - Vertically Centered on Desktop (Fixed to Viewport) */}
        <div className="w-full flex flex-col md:fixed md:inset-0 md:justify-center md:items-center px-0 md:px-12 z-10 mb-10 md:mb-0 pointer-events-none">
          <SectionLabel
            text="'m"
            width="84px"
            mobileWidth="84px"
            className="md:fixed md:left-0 md:top-1/2 md:-translate-y-1/2 relative mb-8 md:mb-0 mx-auto md:mx-0 pointer-events-auto"
          />

          {/* Content Wrapper: Centered & Width-Matched to Hero */}
          <div className="relative w-full md:w-fit mx-auto px-4 md:px-0 pointer-events-auto">
            {/* Ghost to Set Width - Desktop Only */}
            <div className="hidden md:flex flex-col select-none w-full space-y-4 opacity-0 pointer-events-none h-0 overflow-hidden">
              <div className="w-full text-left ml-[340px]"><h1 className="hero-title">I WALK</h1></div>
              <div className="w-full text-left ml-[100px]"><h1 className="hero-title">THIS EARTH,</h1></div>
              <div className="w-full text-left ml-[280px] !mb-[10px]"><h1 className="hero-title">WATER THE FLOWERS,</h1></div>
              <div className="w-full text-left -ml-[100px] !mb-[10px]"><h1 className="hero-title">PAT THE LITTLE PUPPIES,</h1></div>
              <div className="w-full flex items-baseline space-x-6 ml-[260px] !mb-[10px]"><h1 className="hero-title">SEW, GROW RICE, AND</h1></div>
              <div className="w-full text-left ml-[90px] !mb-[10px]"><h1 className="hero-title">READ ARCHITECTURE NEWS</h1></div>
            </div>

            {/* Actual Content - Interests */}
            <div className="w-full md:w-auto ml-0 md:ml-[340px] md:space-y-4 px-2 md:px-[16px] py-0 md:py-[32px]">
              {currentInterests.map((item, idx) => (
                <div key={idx} className="flex flex-col md:flex-row gap-0 md:gap-8 text-[16px] leading-[20px] items-center md:items-start text-center md:text-left">
                  {/* Mobile: Inline text */}
                  <span className="md:hidden text-[#1d3413]">
                    <span className="font-medium mr-1">{item.label}</span>
                    {item.desc}{idx < currentInterests.length - 1 ? ',' : ''}
                  </span>
                  {/* Desktop: Columns */}
                  <span className="hidden md:block w-full md:w-[120px] h-auto md:h-[20px] shrink-0 text-[#1d3413] font-medium md:font-normal">{item.label}</span>
                  <span className="hidden md:block text-[#1d3413]">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Group 2: History - Fixed to bottom on Desktop */}
        <div className="w-full flex-1 md:flex-none flex flex-col md:fixed md:bottom-0 md:left-0 md:w-full md:justify-end px-0 md:px-12 z-20 pb-[64px] md:pb-0 pointer-events-none">
          <SectionLabel
            text="drifted"
            width="112px"
            mobileWidth="112px"
            className="md:fixed md:left-0 md:bottom-0 md:translate-y-0 relative mb-8 md:mb-0 mx-auto md:mx-0 pointer-events-auto"
          />

          <div className="relative w-full md:w-fit mx-auto px-4 md:px-0 pointer-events-auto">
            {/* Ghost (Identical Copy) - Desktop Only */}
            <div className="hidden md:flex flex-col select-none w-full space-y-4 opacity-0 pointer-events-none h-0 overflow-hidden">
              <div className="w-full text-left ml-[340px]"><h1 className="hero-title">I WALK</h1></div>
              <div className="w-full text-left ml-[100px]"><h1 className="hero-title">THIS EARTH,</h1></div>
              <div className="w-full text-left ml-[280px] !mb-[10px]"><h1 className="hero-title">WATER THE FLOWERS,</h1></div>
              <div className="w-full text-left -ml-[100px] !mb-[10px]"><h1 className="hero-title">PAT THE LITTLE PUPPIES,</h1></div>
              <div className="w-full flex items-baseline space-x-6 ml-[260px] !mb-[10px]"><h1 className="hero-title">SEW, GROW RICE, AND</h1></div>
              <div className="w-full text-left ml-[90px] !mb-[10px]"><h1 className="hero-title">READ ARCHITECTURE NEWS</h1></div>
            </div>

            {/* Actual Content - History */}
            <div className="w-full md:w-auto ml-0 md:ml-[340px] space-y-4 md:space-y-4 px-0 md:px-[16px] md:py-[32px] py-0">
              {history.map((item, idx) => (
                <div key={idx} className="flex flex-row md:flex-row gap-4 md:gap-8 text-[16px] leading-[20px] justify-between md:justify-start items-start text-left w-full">
                  <span className="w-[120px] md:w-[120px] shrink-0 text-[#1d3413] font-normal whitespace-nowrap">{item.period}</span>
                  <span className="text-[#1d3413] text-left md:text-left flex-1">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
