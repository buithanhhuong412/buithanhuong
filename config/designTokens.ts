/**
 * Global Design Tokens - Shared across all components
 * Based on Figma specs: Laptop (1440px), Tablet (1024px), Mobile (375px)
 */

// ============ BREAKPOINTS ============
export const BREAKPOINTS = {
  mobile: 375,
  tablet: 768,
  tabletLg: 1024,
  laptop: 1440,
} as const;

export const MEDIA_QUERIES = {
  mobile: `(max-width: ${BREAKPOINTS.tablet - 1}px)`,
  tablet: `(min-width: ${BREAKPOINTS.tablet}px) and (max-width: ${BREAKPOINTS.tabletLg - 1}px)`,
  tabletLg: `(min-width: ${BREAKPOINTS.tabletLg}px)`,
  laptop: `(min-width: ${BREAKPOINTS.laptop}px)`,
  notMobile: `(min-width: ${BREAKPOINTS.tablet}px)`,
  notTablet: `(min-width: ${BREAKPOINTS.tabletLg}px)`,
} as const;

// ============ COLORS ============
export const COLORS = {
  // Brand Colors
  brandGreen: '#1d3413',
  brandGreenRgb: 'rgb(29, 52, 19)',

  // Background
  bgPrimary: '#faf7f3',
  bgLight: '#ffffff',

  // Text
  textPrimary: '#1d3413',
  textLight: '#ffffff',

  // Decorative
  decorativeOpacity: 0.3,
} as const;

// ============ TYPOGRAPHY ============
export const TYPOGRAPHY = {
  // Font Families
  fontFamily: {
    dongle: "'Dongle', sans-serif",
    stix: "'STIX Two Text', serif",
  },

  // Hero Text (Dongle)
  hero: {
    fontFamily: "'Dongle', sans-serif",
    fontWeight: 300,
    laptop: {
      fontSize: 115,
      lineHeight: 60,
    },
    tablet: {
      fontSize: 80,
      lineHeight: 48,
    },
    mobile: {
      fontSize: 48,
      lineHeight: 32,
    },
  } as const,

  // Body Text (STIX)
  body: {
    fontFamily: "'STIX Two Text', serif",
    regular: {
      fontSize: 18,
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: '20px',
    },
    italic: {
      fontSize: 18.5,
      fontWeight: 400,
      fontStyle: 'italic',
      lineHeight: '20px',
    },
  } as const,
} as const;

// ============ SPACING & LAYOUT ============
export const SPACING = {
  // Padding
  padding: {
    default: '32px',
    mobile: '16px',
  },

  // Gaps
  gap: {
    default: '32px',
    mobile: '12px',
  },

  // Container widths
  container: {
    laptop: 1440,
    tablet: 1024,
    mobile: 375,
  },
} as const;

// ============ Z-INDEX ============
export const Z_INDEX = {
  background: 0,
  decorative: 1,
  content: 10,
  navbar: 50,
  modal: 100,
} as const;

// ============ ANIMATIONS ============
export const ANIMATIONS = {
  duration: {
    fast: '200ms',
    normal: '300ms',
    slow: '500ms',
  },
  easing: {
    bouncy: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    smooth: 'ease-in-out',
  },
} as const;

// ============ HELPER FUNCTIONS ============
export const getResponsiveValue = <T extends any>(
  laptop: T,
  tablet: T,
  mobile: T,
  currentWidth?: number
): T => {
  if (typeof window === 'undefined' && !currentWidth) return laptop;

  const width = currentWidth ?? window.innerWidth;

  if (width >= BREAKPOINTS.laptop) return laptop;
  if (width >= BREAKPOINTS.tabletLg) return tablet;
  return mobile;
};

// ============ TAILWIND BREAKPOINT UTILITIES ============
export const tailwindBreakpoints = {
  'sm': `${BREAKPOINTS.mobile}px`,
  'md': `${BREAKPOINTS.tablet}px`,
  'lg': `${BREAKPOINTS.tabletLg}px`,
  'xl': `${BREAKPOINTS.laptop}px`,
} as const;
