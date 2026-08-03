import React, { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ContentBlock, ThoughtArticle } from '../data/thought-content';
import ScrollToTop from './ScrollToTop';
import { COLORS, TYPOGRAPHY } from '../config/designTokens';

interface ThoughtInfo {
    text: string;
    article: ThoughtArticle;
    image?: {
        src: string;
    };
}

interface ThoughtDetailProps {
    isOpen: boolean;
    onClose: () => void;
    data: ThoughtInfo | null;
}

// Inner component to handle scroll logic safely when mounted
const ThoughtDetailContent: React.FC<{ data: ThoughtInfo; onClose: () => void }> = ({ data, onClose }) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const article = data.article;

    return createPortal(
        <>
            {/* Scrollable Overlay Container */}
            <motion.div
                style={{ pointerEvents: 'auto' }}
                ref={scrollContainerRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[99999] overflow-y-auto scroll-smooth pointer-events-auto"
                onWheel={(e) => e.stopPropagation()}
            >
                {/* Backdrop (fixed relative to screen, not scrolling) */}
                <div
                    className="fixed inset-0 bg-[#000000]/60 -z-10"
                />

                {/* Layout Wrapper: Spans full scrollable height */}
                {/* Added onClick={onClose} to handle clicks outside the card */}
                <div
                    className="min-h-screen flex flex-col items-center cursor-pointer pointer-events-auto pt-[18vh] pb-[18vh]"
                    onClick={onClose}
                    onWheel={(e) => e.stopPropagation()}
                >

                    {/* Top Spacer: 15% of viewport initially */}
                    {/* <div className="h-[15vh] w-full shrink-0" /> */}

                    {/* Modal Card */}
                    <motion.div
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 200, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="shadow-2xl relative z-10 shrink-0 cursor-auto modal-card pointer-events-auto"
                        onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside card
                        style={{
                            backgroundColor: COLORS.bgLight,
                            width: 'calc(100% - (var(--popup-margin-x) * 2))',
                            marginLeft: 'var(--popup-margin-x)',
                            marginRight: 'var(--popup-margin-x)',
                            minHeight: '85vh', // Ensure it fills at least the "visible" part initially
                            borderRadius: '12px',
                            overflow: 'hidden',
                            marginBottom: '8vh',
                        }}
                    >
                        {/* Close Button - Absolute inside Modal */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-50 p-4 bg-[#FFFFFF99] hover:bg-white rounded-full transition-colors backdrop-blur-md md:hidden"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                        </button>

                        {/* Part 1: Full Width Image */}
                        {data.image && (
                            <div className="w-full shrink-0"
                                 style={{
                                    paddingLeft: 'var(--content-padding-x)',
                                    paddingRight: 'var(--content-padding-x)',
                                    paddingTop: '48px'
                                }}
                            >
                                <img
                                    src={data.image.src}
                                    alt={data.text}
                                    className="object-contain block"
                                    style={{
                                        width: '240px',
                                        maxWidth: '100%',
                                        height: 'auto'
                                    }}
                                />
                            </div>
                        )}

                        {/* Part 2: Content Block */}
                        <div
                            className="flex flex-col md:mt-[56px] w-full box-border content-block"
                            style={{
                                paddingLeft: 'var(--content-padding-x)',
                                paddingRight: 'var(--content-padding-x)',
                                paddingBottom: '15vh',
                                fontSize: '17px',
                            }}
                        >
                                {/* Title */}
                                <h2
                                    className="mb-8 mobile-title"
                                    style={{
                                        color: COLORS.textPrimary,
                                        fontFamily: TYPOGRAPHY.body.fontFamily,
                                        fontWeight: 350,
                                        fontSize: '38px',
                                        lineHeight: '60px',
                                        letterSpacing: '0%',
                                        fontStyle: 'normal',
                                    }}
                                >
                                    {data.text}
                                </h2>

                                <div className="prose prose-xl max-w-none mobile-body">
                                    {/* Dynamic Intro */}

                                    <div
                                        className="space-y-12 leading-relaxed"
                                        style={{ 
                                            color: COLORS.textPrimary,
                                            fontFamily: TYPOGRAPHY.body.fontFamily,
                                            fontSize: '17px',
                                            fontWeight: 400,
                                            lineHeight: '20px',
                                        }}
                                    >
                                        {/* Dynamic Blocks */}
                                        {article.blocks.map((block: ContentBlock, index: number) => {
                                            if (block.type === 'grid' && block.items) {
                                            return (
                                                <div key={index} className="space-y-8">
                                                    {block.items.map((item, idx) => (
                                                        <div key={idx}>
                                                            <p>{item.desc}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            );
                                        }
                                            return null;
                                        })}

                                        {/* Mobile Bottom Close Button */}
                                        <div className="flex justify-center w-full md:hidden box-border" style={{ padding: '32px 32px 48px 32px' }}>
                                            <button
                                                onClick={onClose}
                                                className="hover:opacity-70 transition-opacity"
                                            >
                                                <img src="/images/Vector-close.svg" alt="Close" width="32" height="32" />
                                            </button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </motion.div>

            {/* Internal ScrollToTop Button */}
            <ScrollToTop containerRef={scrollContainerRef} />

            <style>{`
        /* Replaced broken font with system fonts or standard imports if available */
        
        :root {
            /* 
              Fluid Scaling from 1440px to 1905px
            */
            --popup-margin-x: clamp(180px, 28vw - 120px, 240px);
            --content-padding-x: clamp(178px, 22.8vw - 150px, 284px);
        }
        
        /* Mobile Responsive Overrides */
        @media (max-width: 1024px) {
           :root {
                --popup-margin-x: 0px;
                --content-padding-x: 24px;
           }
           .modal-card {
                width: 100% !important;
                margin: 0 !important;
                min-height: 100vh;
           }
           .h-\\[15vh\\] {
               height: 0 !important;
               display: none;
           }
           /* Reset content padding on mobile */
           .content-block {
               padding-top: 32px !important;
               padding-left: 24px !important;
               padding-right: 24px !important;
               margin-top: 0 !important; /* Remove any top margin relative to image */
           }
           
           /* Typography Overrides */
           .mobile-title {
               font-weight: 400 !important;
               font-size: 36px !important;
               line-height: 42px !important;
           }
           
           .mobile-body p, .mobile-body div {
               font-weight: 400 !important;
               font-size: 18px !important;
               line-height: 1.2 !important; 
           }
        }
      `}</style>
        </>,
        document.body
    );
};

const ThoughtDetail: React.FC<ThoughtDetailProps> = ({ isOpen, onClose, data }) => {
    // Only render on client side to avoid hydration mismatch with Portal
    const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (isOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
    }

    return () => {
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
    };
    }, [isOpen]);
    if (!mounted) return null;
    return (
        <AnimatePresence>
            {isOpen && data && (
                <ThoughtDetailContent data={data} onClose={onClose} />
            )}
        </AnimatePresence>
    );
};

export default ThoughtDetail;
