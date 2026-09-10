import React from 'react'
import { CVTLogo, WorkFlow } from '../../../../Assets/Svg'
import AwardImg from '../../../../Assets/Images/award.png'
import { TimeLine } from '../../../../Shared/Components'

const TimeLineData = [
    {
        id: 1,
        title: 'Swami Vivekananda Vidhya Mandir - CBSE'
    },
    {
        id: 2,
        title: 'Velammal Vidhalaya Bodhi Campus - CBSE'
    },
    {
        id: 3,
        title: 'Vels Institute Of Advance Science & Technology'
    },
    {
        id: 4,
        title: 'Coderz Vision Technology'
    }
]

const PassionSection = () => {
    return (
        <section id='main' className='h-[calc(100vh-40px)] bg-primary-bg rounded-xl relative'>
            <div className='absolute right-5 bottom-5'>
                <TimeLine timelineItems={TimeLineData} />
            </div>
            <h1 className="text-[5vw] absolute top-1/4 left-1/6 leading-[0.8] font-primary font-regular text-text-secondary uppercase tracking-tighter">
                PASSIONATE  ABOUT
            </h1>
            <h1 className="text-[8vw] absolute top-1/3 left-1/3 leading-[0.8] font-primary font-extrabold text-primary-color uppercase tracking-tighter">
                DEVELOPMENT
            </h1>

            <div className="absolute top-1/2 left-1/3">
                <div className='bg-primary-color/50 flex place-content-center py-2 rounded-2xl mb-1'>
                    <CVTLogo />
                </div>
                <h1 className='font-primary font-bold text-2xl'>
                    Coderz Vision Technology
                </h1>
                <p className='font-primary font-regular'>March 2024 - Present</p>
                <span className='font-primary font-regular text-text-secondary'>Software Developer</span>
            </div>

            <div className="block absolute right-[5%] top-1/6 -translate-y-1/2 w-75 z-30">
                <p className="text-text-primary text-xs font-primary font-semibold uppercase tracking-widest leading-relaxed text-right">
                    Constantly iterating between front-end precision and backend logic. Passionate about clean UI, smooth mobile navigation, and the relentless cycle of building, shipping, and scaling.
                </p>
            </div>

            <div className='absolute bottom-10 right-1/5 rotate-10'>
                <WorkFlow className='w-100 h-auto' />
            </div>

            <img src={AwardImg} className='absolute bottom-0' alt="" />
        </section>
    )
}

export default PassionSection