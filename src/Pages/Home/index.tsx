import React from 'react'

import { AboutSection, HeroSection } from './Sections'

const HomePage = () => {
    return (
        <main className='flex flex-col gap-[20px]'>
            <HeroSection />
            <AboutSection/>
        </main>
    )
}

export default HomePage