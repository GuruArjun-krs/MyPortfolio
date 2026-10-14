import React from 'react'
import { Link } from 'react-router-dom'
import SolarARImg from '../../../../Assets/Images/solar_ar_preview.jpg'
import WearableBLEImg from '../../../../Assets/Images/wearable_ble_app.jpg'
import GeoFarmImg from '../../../../Assets/Images/geofarm_map_dashboard.jpg'

const projects = [
    {
        id: 1,
        image: WearableBLEImg,
        title: 'PulseStep BLE Wearable',
        rotate: '-rotate-6',
        zIndex: 'z-10',
        margin: '-mr-6 sm:-mr-10 md:-mr-14',
        translateY: 'translate-y-3',
    },
    {
        id: 2,
        image: SolarARImg,
        title: 'SolarAR Vision 3D',
        rotate: 'rotate-1',
        zIndex: 'z-20',
        margin: '',
        translateY: '-translate-y-2',
    },
    {
        id: 3,
        image: GeoFarmImg,
        title: 'GeoFarm Spatial Intelligence',
        rotate: 'rotate-7',
        zIndex: 'z-10',
        margin: '-ml-6 sm:-ml-10 md:-ml-14',
        translateY: 'translate-y-5',
    },
]

const ProjectSection = () => {
    return (
        <section
            id='project'
            className='h-[calc(100vh-40px)] rounded-xl relative flex items-center justify-center overflow-hidden'
        >
            <h1
                className='absolute top-0 left-0 font-primary font-thin text-[#2d4a45] uppercase leading-none select-none pointer-events-none
                           text-[22vw] sm:text-[20vw] md:text-[18vw] lg:text-[16vw]'
                style={{ letterSpacing: '-0.02em', lineHeight: 0.85 }}
            >
                HANDS ON
            </h1>

            <h1
                className='absolute bottom-0 right-0 font-primary font-thin text-[#2d4a45] uppercase leading-none select-none pointer-events-none text-right
                           text-[22vw] sm:text-[20vw] md:text-[18vw] lg:text-[16vw]'
                style={{ letterSpacing: '-0.02em', lineHeight: 0.85 }}
            >
                EXPERIENCE
            </h1>

            <div className='relative z-20 flex items-center justify-center'>
                {projects.map((p) => (
                    <Link
                        key={p.id}
                        to='/projects'
                        className={`relative ${p.rotate} ${p.zIndex} ${p.margin} ${p.translateY}
                                    transition-all duration-500 ease-out hover:scale-105 hover:z-30 hover:-translate-y-2
                                    cursor-pointer group`}
                        title={p.title}
                    >
                        <div
                            className='bg-white shadow-2xl overflow-hidden rounded-sm'
                            style={{ width: 'clamp(100px, 13vw, 200px)', aspectRatio: '3/4' }}
                        >
                            <img
                                src={p.image}
                                alt={p.title}
                                className='w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105'
                            />
                        </div>
                    </Link>
                ))}
            </div>

            <div className='absolute left-6 sm:left-10 top-1/2 -translate-y-1/2 z-40 max-w-[160px] sm:max-w-[200px]'>
                <p className='font-primary text-[10px] sm:text-xs text-[#2d4a45] leading-relaxed'>
                    A creative developer who believes the best products are born at the intersection of clean code, motion design, and instinct.
                </p>
            </div>

            <div className='absolute top-6 right-6 sm:bottom-8 sm:right-10 z-40'>
                <Link
                    to='/projects'
                    className='group flex items-center gap-2 border border-[#2d4a45] text-[#2d4a45] font-primary font-semibold text-xs sm:text-sm uppercase tracking-widest px-4 sm:px-5 py-2.5 sm:py-3 rounded-full overflow-hidden relative transition-colors duration-300 hover:text-white cursor-pointer shadow-xs'
                >
                    <span className='absolute inset-0 bg-[#2d4a45] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out rounded-full' />
                    <span className='relative z-10'>View All Projects</span>
                    <svg
                        className='relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1'
                        viewBox='0 0 16 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path d='M1 8h14M9 2l6 6-6 6' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                    </svg>
                </Link>
            </div>
        </section>
    )
}

export default ProjectSection