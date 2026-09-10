import React, { useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'

import PrimaryHeader from './PrimaryHeader'
import { ChevronsUpIcon } from '@animateicons/react/lucide'

const Layout = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [infoState, setInfoState] = useState({
        showToTopBtn: false
    })

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleScroll = () => {
            if (container.scrollTop > 300) {
                setInfoState((prev) => ({ ...prev, showToTopBtn: true }));
            } else {
                setInfoState((prev) => ({ ...prev, showToTopBtn: false }));
            }
        };
        container.addEventListener('scroll', handleScroll);
        
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='h-dvh px-[20px] pt-[20px] bg-white relative'>
            <div className='absolute top-[40px] z-1 place-self-center'>
                <PrimaryHeader />
            </div>
            <div ref={scrollContainerRef} className='h-[calc(100%-20px)] overflow-y-auto scroll-smooth'>
                <Outlet />
            </div>

            <div className={`absolute left-0 right-0 bottom-8 flex justify-center z-50 w-full transition-opacity duration-500 ease-in-out ${infoState?.showToTopBtn ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        scrollContainerRef.current?.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    }}
                    className="btn btn-lg bg-transparent hover:bg-primary-color/10 border-0 rounded-full animate-bounce pointer-events-auto flex items-center justify-center"
                >
                    <ChevronsUpIcon
                        size={30}
                        duration={1}
                        color="#0a6451"
                    />
                </button>

            </div>
        </div>
    )
}

export default Layout