'use client';

import React, { useState, useEffect } from 'react';
import { COLORS, TYPOGRAPHY, SPACING, BREAKPOINTS } from '../config/designTokens';
import SectionLabel from './SectionLabel';
import WannaTalk from './WannaTalk';

interface HeroProps {
}

const Hero: React.FC<HeroProps> = () => {
  // Helper to calculate style based on window width
  const calculateStyle = () => {
    if (typeof window === 'undefined') return { scale: 1, top: '50%' };
    const width = window.innerWidth;
    let scale = 1;
    if (width >= 1440) {
      scale = Math.min(1.2, 1 + (width - 1440) * (0.2 / 465));
    }
    return { scale, top: '50%' };
  };

  // State for fluid scaling and positioning
  const [heroStyle, setHeroStyle] = useState(calculateStyle());
  const [imageIndexes, setImageIndexes] = useState<Record<number, number>>({});

  useEffect(() => {
    const handleResize = () => {
      setHeroStyle(calculateStyle());
    };

    // Initial calculation (just in case window wasn't available during state init)
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Figma asset URLs for decorative rainbow elements
  const rainbowLightStickerUrl = 'https://www.figma.com/api/mcp/asset/c652ca89-7bd9-46c5-b869-04ffd572b903';
  const rainbowLightSticker286Url = 'images/8881352c-5c4c-4dea-8f71-8d51fa2e91e9.png';

  // Text lines with positioning (top-aligned, laptop 1440px width)
  const textLines = [
    {
      text: 'I WALK',
      top: '60px', // Legacy props kept for reference/fallback
      left: 'calc(50% - 78px)'
    },
    {
      text: 'THIS EARTH,',
      top: '147px',
      left: 'calc(50% - 305px)',
      images: [
        'images/earth.avif',
        'images/earth2.png',
        'images/earth3.png',
        'images/earth4.png',
      ],
      image: {
        width: '199px',
        height: '125px',
        top: '20px',
        left: '189px',
      }
    },
    {
      text: 'WATER THE FLOWERS',
      top: '234px',
      left: 'calc(50% - 208px)',
      images: [
      'images/theflower.avif',
      'images/flower2.png',
      'images/flower3.png',
      ],
      image: {
        width: '230px',
        height: '135px',
        top: '20px',
        left: '340px',
      }
    },
    {
      text: 'PAT THE LITTLE PUPPIES,',
      top: '321px',
      left: 'calc(50% - 486px)',
      images: [
        'images/pat.avif',
        'images/pat1.png',
        'images/pat2.png',
      ],
        image: {
        width: '155px',
        height: '150px',
        top: '20px',
        left: '200px',
      }
    },
    {
      text: 'SEW, GROW RICE, AND',
      top: '408px',
      left: 'calc(50% - 257px)'
    },
    {
      text: 'READ ARCHITECTURE NEWS',
      top: '495px',
      left: 'calc(50% - 446px)',
      images: [
        'images/news.avif',
        'images/news1.png',
      ],
      image: {
        width: '145px',
        height: '140px',
        top: '20px',
        left: '620px',
      }
    },
  ];


  return (
    <section
      className="w-full overflow-hidden relative hero-mobile-height flex flex-col"
      style={{
        backgroundColor: COLORS.bgPrimary
      }}
    >
      <style>{`
        .hero-mobile-height {
          flex: 1;
        }
        @media (min-width: ${BREAKPOINTS.tablet}px) {
          .hero-mobile-height {
            height: calc(100vh - 90px);
            flex: none;
          }
        }
      `}</style>


      {/* Right side decoration - fixed to screen right edge */}
      <div
        className="absolute flex items-center justify-center pointer-events-none hidden lg:flex"
        style={{
          right: '-105px',
          top: '150px',
          width: '200px',
          height: '100px'
        }}
      >
        <div style={{ transform: 'rotate(-32.491degdeg)', width: '300px', height: '250px', opacity: 0.3 }}>
          <img
            src={rainbowLightSticker286Url}
            alt=""
            className="w-full h-full object-cover"
            style={{ opacity: 1 }}
          />
        </div>
      </div>

      {/* Additional bottom-right large decoration */}
      <div
        className="absolute flex items-center justify-center pointer-events-none hidden lg:flex"
        style={{
          right: '-105px',
          bottom: '-120px',
          top: 'auto',
          width: '700px',
          height: '470px'
        }}
      >
        <div style={{ transform: 'rotate(-28.701deg)', width: '5000px', height: '650px', opacity: 0.1 }}>
          <img
            src={rainbowLightSticker286Url}
            alt=""
            className="w-full h-full object-cover"
            style={{ opacity: 1 }}
          />
        </div>
      </div>

      {/* Main hero text - responsive scaling */}
      {/* Mobile Hero Content Wrapper - Flex Column to stack 3 blocks: Text, Label, WannaTalk */}
      <div className="w-full h-full flex flex-col justify-between items-center md:hidden z-40 pointer-events-none relative overflow-hidden pt-[24px]">
        {/* Absolute Background Layer (Desktop Only) */}
        <div className="absolute bottom-[120px] left-[25%] w-[400px] h-[400px] z-0 transform scale-[0.5] origin-bottom-left -rotate-[20deg] opacity-50 hidden md:block">
          <img src={rainbowLightSticker286Url} alt="" className="w-full h-full object-contain" />
        </div>

        {/* Block 1: TextLines - Fixed at Top */}
        <div className="w-full flex flex-col items-center gap-[5px] shrink-0 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] z-0 transform scale-[0.8] -rotate-[10deg] opacity-30 pointer-events-none">
            <img src={rainbowLightSticker286Url} alt="" className="w-full h-full object-contain" />
          </div>
          <span className="relative z-10" style={{ fontFamily: "'STIX Two Text', serif", fontSize: '16px', lineHeight: '20px', color: COLORS.textPrimary }}>I walk this Earth,</span>
          <span className="relative z-10" style={{ fontFamily: "'STIX Two Text', serif", fontSize: '16px', lineHeight: '20px', color: COLORS.textPrimary }}>water the flowers,</span>
          <span className="relative z-10" style={{ fontFamily: "'STIX Two Text', serif", fontSize: '16px', lineHeight: '20px', color: COLORS.textPrimary }}>pat the little puppies,</span>
          <span className="relative z-10" style={{ fontFamily: "'STIX Two Text', serif", fontSize: '16px', lineHeight: '20px', color: COLORS.textPrimary }}>sew, grow rice, and</span>
          <span className="relative z-10" style={{ fontFamily: "'STIX Two Text', serif", fontSize: '16px', lineHeight: '20px', color: COLORS.textPrimary }}>read architecture news</span>
        </div>

        {/* Block 2: SectionLabel - Automatically centered by justify-between */}
        <div className="w-full flex items-center justify-center pointer-events-auto">
          <SectionLabel
            text="or mostly just breathe"
            width="205px"
            mobileWidth="205px"
            className="relative z-50"
          />
        </div>

        {/* Block 3: WannaTalk - Fixed at Bottom */}
        <div className="w-full flex justify-center pointer-events-auto shrink-0">
          <WannaTalk isActive={false} />
        </div>
      </div>

      {/* Main hero text - responsive scaling (Desktop/Tablet Only) */}
      <div
        className="absolute pointer-events-none hero-container hidden md:block"
        style={{
          width: '960px',
          left: '50%',
          top: '50%',
          transform: `translate(-50%, -55%) scale(${heroStyle.scale})`,
          transformOrigin: 'center center',
        }}
      >
        <style>{`

          @media (min-width: ${BREAKPOINTS.tabletLg}px) {
            .hero-text { 
              font-size: ${TYPOGRAPHY.hero.laptop.fontSize}px; 
              line-height: ${TYPOGRAPHY.hero.laptop.lineHeight}px; 
            }
          }
          @media (min-width: ${BREAKPOINTS.tablet}px) and (max-width: ${BREAKPOINTS.tabletLg - 1}px) {
            .hero-text { 
              font-size: ${TYPOGRAPHY.hero.tablet.fontSize}px; 
              line-height: ${TYPOGRAPHY.hero.tablet.lineHeight}px; 
            }
          }

          /* Custom overrides per user request */
          .hero-line {
             position: relative !important;
             top: auto !important;
             left: auto !important;
          }
        `}</style>

        <div
          className="hero-text relative w-full flex flex-col gap-[28px] md:gap-[27px] pb-[15px]"
          style={{ alignItems: 'flex-start' }}
        >
          {/* Decorative light-leak elements - hide on mobile */}
          <div className="hidden md:block absolute top-0 left-0 w-full h-full pointer-events-none">
            {/* Center decoration - laptop only */}
            <div
              className="absolute flex items-center justify-center pointer-events-none hidden lg:flex"
              style={{
                left: '150px',
                top: '230px',
                width: '367.399px',
                height: '469.488px'
              }}
            >
              <div style={{ transform: 'rotate(-28.701deg)', width: '367.399px', height: '469.488px', opacity: 0.8 }}>
                <img
                  src={rainbowLightSticker286Url}
                  alt=""
                  className="w-full h-full object-cover"
                  style={{ opacity: 1 }}
                />
              </div>
            </div>

          </div>

          {/* Right side decoration - fixed to screen right edge */}
          {textLines.map((line, index) => (
            <div
              key={index}
              onMouseEnter={() => {
                if (!('images' in line)) return;

                setImageIndexes(prev => ({
                  ...prev,
                  [index]:
                    ((prev[index] ?? -1) + 1) % line.images.length,
                }));
              }}
              className="hero-line whitespace-nowrap group pointer-events-auto cursor-default inline-flex items-center justify-center z-40 group-hover:z-[100] relative"
              style={{
                fontFamily: TYPOGRAPHY.hero.fontFamily,
                fontWeight: TYPOGRAPHY.hero.fontWeight,
                color: COLORS.textPrimary,
                letterSpacing: '0',
                marginLeft: line.left,
              }}
            >
              {line.text}
              {line.images && (
                <div
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-[9999]"
                  style={{
                    width: line.image.width,
                    height: line.image.height,
                    ...(line.image.top && { top: line.image.top }),
                    ...(line.image.left && { left: line.image.left }),
                  }}
                >
                  <img
                    src={
                      line.images?.[
                      imageIndexes[index] ?? 0
                    ]}
                    alt=""
                    className="w-full h-full object-cover rounded-sm"
                  />
                </div>
              )}
            </div>
          ))}

        </div>
      </div>

      {/* Desktop Section Label at literal bottom edge */}
      <div className="hidden md:block absolute bottom-0 left-0 w-full pointer-events-none z-50">
        <div className="flex justify-center">
          <a
            href="https://www.instagram.com/buithanhuong/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SectionLabel
              text="or mostly just breathe"
              width="337px"
              className="pointer-events-auto"
            />
          </a>
        </div>
      </div>

    </section>
  );
};

export default Hero;
