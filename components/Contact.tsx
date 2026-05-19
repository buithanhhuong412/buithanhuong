
import React from 'react';
import SectionLabel from './SectionLabel';

import WannaTalk from './WannaTalk';

interface ContactProps {
}

const Contact: React.FC<ContactProps> = () => {
    interface ContactConfig {
        label: string;
        text: string;
        link?: string;
    }

    const contacts: ContactConfig[] = [
        {
            label: "email",
            text: "hi@buithanhhuong.com",
            link: "mailto:hi@buithanhhuong.com"
        },
        {
            label: "linkedin",
            text: "/buithanhhuong",
            link: "https://www.linkedin.com/in/buithanhhuong/"
        },
        {
            label: "behance",
            text: "/buithanhhuong",
            link: "https://www.behance.net/buithanhhuong"
        },
        {
            label: "unsplash",
            text: "/buithanhhuong",
            link: "https://unsplash.com/@buithanhhuong/illustrations"
        },
        {
            label: "threads",
            text: "/buithanhhuong_as_usual",
            link: "https://www.threads.com/@buithanhuong_as_usual"
        }
    ];

    return (
        <section className="flex-1 w-full flex flex-col items-center relative md:overflow-hidden md:justify-end">
            {/* Desktop Left Side (Absolute) */}
            <div className="hidden md:flex absolute left-[0px] flex-col gap-[23px] items-start">
                <SectionLabel
                    text="ping me"
                    width="144px"
                    className="absolute"
                    style={{ position: 'relative' }}
                />
                <div className="p-[24px]">
                    <img src="images/Frame 7.svg" alt="" className="w-full h-full" />
                </div>
            </div>

            {/* Mobile Top Section (Vertical Stack) */}
            <div className="flex md:hidden flex-col items-center gap-6 mt-12 w-full">
                {/* Image First */}
                <div className="w-[100px] h-[100px]">
                    <img src="images/Frame 7.svg" alt="" className="w-full h-full object-contain" />
                </div>
                {/* Label Second */}
                <SectionLabel
                    text="ping me"
                    width="144px"
                    mobileWidth="144px"
                    className="absolute relative"
                    style={{ left: 'auto', top: 'auto', transform: 'none' }}
                />
            </div>


            {/* Main Content - Bottom aligned */}
            <div className="w-full flex flex-col justify-end items-center z-10 flex-1 md:flex-none">
                <div className="relative w-full md:w-fit mx-auto px-4 md:px-0">
                    {/* Ghost Element from Hero to force identical centering */}
                    <div className="flex flex-col select-none w-full space-y-4 opacity-0 pointer-events-none h-0 overflow-hidden">
                        <div className="w-full text-left ml-[340px]"><h1 className="hero-title">I WALK</h1></div>
                        <div className="w-full text-left ml-[100px]"><h1 className="hero-title">THIS EARTH,</h1></div>
                        <div className="w-full text-left ml-[280px] !mb-[10px]"><h1 className="hero-title">WATER THE FLOWERS,</h1></div>
                        <div className="w-full text-left -ml-[100px] !mb-[10px]"><h1 className="hero-title">PAT THE LITTLE PUPPIES,</h1></div>
                        <div className="w-full flex items-baseline space-x-6 ml-[260px] !mb-[10px]"><h1 className="hero-title">SEW, GROW RICE, AND</h1></div>
                        <div className="w-full text-left ml-[90px] !mb-[10px]"><h1 className="hero-title">READ ARCHITECTURE NEWS</h1></div>
                    </div>

                    {/* Actual Content aligned with ghost structure */}
                    <div className="ml-0 md:ml-[340px] flex flex-col space-y-4 text-left md:text-left px-0 md:px-[16px] py-[32px] w-full">
                        {contacts.map((item, i) => (
                            <div key={i} className="flex flex-row items-baseline gap-4 md:gap-8">
                                <span className="text-[16px] font-stix text-[#1d3413] leading-[20px] min-w-[120px]">
                                    {item.label}
                                </span>
                                <a
                                    href={item.link || "#"}
                                    target={item.link?.startsWith('http') ? '_blank' : undefined}
                                    rel={item.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="group relative block w-fit text-[16px] font-stix text-[#1d3413] leading-[20px] text-left md:text-left"
                                >
                                    <span className="relative z-10">{item.text}</span>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/* Mobile "Wanna Talk" - Integrated in flow - only visible on mobile */}
            <div className="md:hidden w-full pointer-events-auto bg-[#faf7f3] mt-12">
                <WannaTalk />
            </div>
        </section >
    );
};

export default Contact;