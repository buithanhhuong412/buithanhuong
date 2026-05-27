
import React from 'react';
import { useNavigate } from 'react-router-dom';
import WannaTalk from './WannaTalk';
import { COLORS, TYPOGRAPHY, SPACING } from '../config/designTokens';

interface NavbarProps {
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage }) => {
  const navigate = useNavigate();

  const menuItems = [
    { id: 'about', label: 'I', path: '/about' },
    { id: 'study', label: 'study', path: '/study' },
    { id: 'observe', label: 'observe', path: '/observe' },
    { id: 'work', label: 'and experiment', path: '/page-experiment' }
  ];

  return (
    <nav className="relative top-0 left-0 z-50 px-[24px] pt-[32px] pb-[24px] md:py-[32px] flex md:flex-row flex-col md:justify-between md:items-center items-center bg-transparent pointer-events-none w-full h-[21px]" style={{ gap: SPACING.gap.default }}>
      {/* Block 1: Intro text */}
      <button
        onClick={() => navigate('/hi')}
        className={`
          relative transition-none outline-none after:transition-all after:duration-300 pointer-events-auto
          ${currentPage === 'home'
            ? ''
            : 'hover:after:content-[""] hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[0.5px] hover:after:bg-[#1d3413]'
          }
        `}
        style={{
          fontFamily: TYPOGRAPHY.fontFamily.stix,
          fontSize: '16px',
          fontWeight: TYPOGRAPHY.body.regular.fontWeight,
          fontStyle: currentPage === 'home' ? 'italic' : 'normal',
          transform: currentPage === 'home' ? 'scaleX(1.035)' : 'scaleX(1)',
          lineHeight: '20px',
          color: COLORS.textPrimary,
          display: 'inline-block',
          flexShrink: 0,
          background: 'none',
          border: 'none',
          paddingLeft: '2px',
          paddingRight: '2px',
          paddingTop: 0,
          paddingBottom: 0,
          cursor: 'pointer'
        }}
      >
        Hi, I'm Thanh Huong Bui,
      </button>

      {/* Block 2: Navigation */}
      <div className="flex flex-col md:flex-row items-center flex-wrap md:absolute md:left-1/2 md:-translate-x-1/2 gap-6 md:gap-8 pointer-events-none">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => navigate(item.path)}
            className={`
              transition-none outline-none relative text-center grid place-items-center after:transition-all after:duration-300 pointer-events-auto
              ${currentPage === item.id
                ? ''
                : item.id === 'about'
                  ? 'hover:after:content-[""] hover:after:absolute hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:bottom-0 hover:after:w-[20px] hover:after:h-[0.5px] hover:after:bg-[#1d3413]'
                  : 'hover:after:content-[""] hover:after:absolute hover:after:left-[-1px] hover:after:bottom-0 hover:after:w-[calc(100%+2px)] hover:after:h-[0.5px] hover:after:bg-[#1d3413]'
              }
            `}
            style={{
              fontFamily: '"STIX Two Text", serif',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '20px',
              color: '#1D3413',
              width: item.id === 'about' ? '32px' : 'auto',
              paddingLeft: item.id === 'about' ? '0' : '2px',
              paddingRight: item.id === 'about' ? '0' : '2px',
              flexShrink: 0
            }}
          >
            {/* Reserve space for bold/italic/normal widest variant */}
            <span className="invisible col-start-1 row-start-1 font-normal opacity-0 pointer-events-none" style={{ fontSize: '16px' }} aria-hidden="true">{item.label}</span>
            <span className="invisible col-start-1 row-start-1 italic opacity-0 pointer-events-none" style={{ fontSize: '16px', transform: 'scaleX(1.06)' }} aria-hidden="true">{item.label}</span>

            {/* Visible Text */}
            <span
              className="col-start-1 row-start-1"
              style={{
                fontStyle: currentPage === item.id ? 'italic' : 'normal',
                transform: currentPage === item.id ? 'scaleX(1.06)' : 'scaleX(1)',
              }}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>

      {/* Block 3: CTA */}
      <WannaTalk
        isActive={currentPage === 'contact'}
        className={`md:relative md:w-auto md:bottom-auto md:left-auto md:bg-transparent md:block pointer-events-auto
          ${(currentPage === 'study' || currentPage === 'home' || currentPage === 'observe' || currentPage === 'work' || currentPage === 'contact') ? 'hidden md:block' : 'fixed bottom-0 left-0 w-full flex bg-[#faf7f3]'}
        `}
      />
    </nav>
  );
};

export default Navbar;
