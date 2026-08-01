import React from 'react';
import { useNavigate } from 'react-router-dom';
import WannaTalk from './WannaTalk';
import { COLORS, TYPOGRAPHY, SPACING } from '../config/designTokens';

interface NavbarMobileProps {
    currentPage: string;
    showWannaTalk?: boolean; // Hiển thị WannaTalk cho scrollable pages
}

const NavbarMobile: React.FC<NavbarMobileProps> = ({ currentPage, showWannaTalk = false }) => {
    const navigate = useNavigate();

    const menuItems = [
        { id: 'about', label: 'I', path: '/about' },
        { id: 'study', label: 'study', path: '/study' },
        { id: 'observe', label: 'observe', path: '/observe' },
        { id: 'work', label: 'and experiment', path: '/experiment' }
    ];

    return (
        <nav
            className="relative w-full px-[24px] pt-[16px] pb-[16px] flex flex-col items-center bg-transparent"
            style={{ gap: '16px' }}
        >
            {/* Block 1: Intro text */}
            <button
                onClick={() => navigate('/experiment')}
                className="relative transition-none outline-none after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[0.5px] after:bg-[#1d3413]"
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
            <div className="flex flex-col items-center gap-6">
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => navigate(item.path)}
                        className={`
              transition-none outline-none relative text-center grid place-items-center
              after:content-[""] after:absolute after:bottom-0 after:h-[0.5px] after:bg-[#1d3413]
              ${item.id === 'about'
                                ? 'after:left-1/2 after:-translate-x-1/2 after:w-[20px]'
                                : 'after:left-[-1px] after:w-[calc(100%+2px)]'
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
                            flexShrink: 0,
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer'
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

            {/* Block 3: CTA - WannaTalk (conditional) */}
            {showWannaTalk && (
                <div className="w-full mt-6">
                    <WannaTalk isActive={currentPage === 'contact'} />
                </div>
            )}
        </nav>
    );
};

export default NavbarMobile;
