import React from 'react'
import SecondaryHeader from '../../../../Core/Layout/SecondaryHeader'
import ArjunImage from '../../../../Assets/Images/ArjunAnimeSec.png'
import { ExternalLinks } from '../../../../Core/Interface'

const HeroSection = () => {
    return (
        <section id='main' className='h-[calc(100vh-40px)] bg-primary-bg rounded-xl relative overflow-hidden'>
            <SecondaryHeader />

            {/* Greeting text — responsive sizing, centred */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[70px] md:top-[100px] z-10 w-full text-center px-4">
                <p className='text-text-primary font-primary font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl whitespace-nowrap'>
                    HI THERE, I'M GURU ARJUN
                </p>
            </div>

            {/* Social links — left side, repositioned so they don't clip */}
            <div className='absolute bottom-[20px] left-[20px] md:top-[20px] md:bottom-auto flex flex-col gap-2 z-30'>
                {ExternalLinks?.map((el) => (
                    <a
                        key={el?.id}
                        href={el?.url}
                        className="font-primary text-text-secondary animated-underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {el?.icon}
                        {el?.title}
                    </a>
                ))}
            </div>

            {/* Side description — hidden on mobile to avoid clutter */}
            <div className="hidden md:block absolute right-[5%] top-1/4 -translate-y-1/2 w-48 z-30">
                <p className="text-text-primary text-xs font-primary font-semibold uppercase tracking-widest leading-relaxed text-right">
                    I am a creative front-end developer with a strong focus on motion and interaction.
                </p>
            </div>

            {/* Big background title text — fluid vw scales gracefully */}
            <div className="absolute inset-0 z-10 flex flex-col justify-between pt-[14%] pb-[4%] px-[4%] pointer-events-none">
                <div className="flex justify-between w-full items-start">
                    <h1 className="text-[18vw] sm:text-[16vw] md:text-[15vw] xl:text-[200px] leading-none font-black text-primary-color uppercase scale-y-125 transform origin-top">FRONT</h1>
                    <h1 className="text-[18vw] sm:text-[16vw] md:text-[15vw] xl:text-[200px] leading-none font-black text-primary-color uppercase scale-y-125 transform origin-top">END</h1>
                </div>
                <div className="flex justify-between w-full items-end">
                    <h1 className="text-[13vw] sm:text-[12vw] md:text-[12vw] xl:text-[160px] leading-none font-black text-primary-color uppercase scale-y-125 transform origin-bottom">DEVELOPER</h1>
                    <h1 className="text-[13vw] sm:text-[12vw] md:text-[12vw] xl:text-[160px] leading-none font-black text-primary-color uppercase scale-y-125 transform origin-bottom">{"</" + ">"}</h1>
                </div>
            </div>

            {/* Profile image — proportionally smaller on mobile */}
            <img
                src={ArjunImage}
                alt="my_profile"
                className='w-auto h-[60%] sm:h-[70%] md:h-[80%] object-contain absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none'
            />
        </section>
    )
}

export default HeroSection