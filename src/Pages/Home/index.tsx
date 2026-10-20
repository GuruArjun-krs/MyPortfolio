import React from 'react'

import { AboutSection, ContactSection, HeroSection, PassionSection, ProjectSection } from './Sections'

const HomePage = () => {
    return (
        <main className='flex flex-col gap-[20px]'>
            <HeroSection />
            <AboutSection />
            <PassionSection />
            <ProjectSection />
            <ContactSection />
        </main>
    )
}

export default HomePage