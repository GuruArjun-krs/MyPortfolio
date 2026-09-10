import React from 'react'
import SecondaryHeader from '../../../../Core/Layout/SecondaryHeader'
import ArjunImage from '../../../../Assets/Images/ArjunAnimeSec.png'

const HeroSection = () => {
    return (
        <section id='main' className='h-[calc(100vh-40px)] bg-primary-bg rounded-xl relative'>
            <SecondaryHeader />
            <div className="absolute left-1/2 -translate-x-1/2 top-[100px] z-10 w-max">
                <p className=' text-text-primary font-primary font-bold text-3xl'>HI THERE, I'M GURU ARJUN</p>
            </div>

            <div className="hidden md:block absolute right-[5%] top-1/4 -translate-y-1/2 w-48 z-30">
                <p className="text-text-primary text-xs font-mono font-semibold uppercase tracking-widest leading-relaxed text-right">
                    I am a creative front-end developer with a strong focus on motion and interaction.
                </p>
            </div>

            <div className="absolute inset-0 z-10 flex flex-col justify-between pt-[15%] pb-[5%] px-[5%] pointer-events-none">
                <div className="flex justify-between w-full items-start">
                    <h1 className="text-[15vw] xl:text-[200px] leading-none font-black text-primary-color uppercase scale-y-125 transform origin-top">FRONT</h1>
                    <h1 className="text-[15vw] xl:text-[200px] leading-none font-black text-primary-color uppercase scale-y-125 transform origin-top">END</h1>
                </div>
                <div className="flex justify-between w-full items-end">
                    <h1 className="text-[12vw] xl:text-[160px] leading-none font-black text-primary-color uppercase scale-y-125 transform origin-bottom">DEVELOPER</h1>
                    <h1 className="text-[12vw] xl:text-[160px] leading-none font-black text-primary-color uppercase scale-y-125 transform origin-bottom">{"</>"}</h1>
                </div>
            </div>

            <img
                src={ArjunImage}
                alt="my_profile"
                className='w-auto h-[80%] object-contain absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none'
            />
        </section>
    )
}

export default HeroSection