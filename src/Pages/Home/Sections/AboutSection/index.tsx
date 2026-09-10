import React, { useState } from 'react';
import { WorkSectionImg } from '../../../../Assets/Svg';

const AboutSection = () => {
    const [activeStack, setActiveStack] = useState<string | null>(null);

    const stackMap: Record<string, string[]> = {
        DESIGN: ['Tailwind CSS', 'Bootstrap', 'SCSS', 'CSS', 'Responsive Design'],
        DEVELOP: ['React Native', 'React.js', 'TypeScript', 'JavaScript'],
        TOOLS: ['Xcode', 'Android Studio', 'Git'],
        BACKEND: ['Node.js', 'Express.js', 'MongoDB'],
        SERVICES: ['Firebase', 'Google Cloud', 'Mapbox', 'Razorpay'],
        DEPLOYMENT: ['Vercel'],
    };

    return (
        <section id='about' className='h-[calc(100vh-40px)] bg-white rounded-xl relative overflow-hidden flex items-center px-10 md:px-24'>
            <div className="text-[5vw] leading-[1.1] font-black uppercase flex flex-col z-10 cursor-default">
                {Object.keys(stackMap).map((word) => (
                    <span
                        key={word}
                        onMouseEnter={() => setActiveStack(word)}
                        onMouseLeave={() => setActiveStack(null)}
                        className={`transition-all duration-300 origin-left font-primary transform ${activeStack === word
                            ? 'text-primary-color scale-110'
                            : activeStack
                                ? 'text-gray-100'
                                : 'text-gray-200'
                            }`}
                    >
                        {word}
                    </span>
                ))}
            </div>

            <div className="absolute right-10 md:right-24 top-1/6 w-1/2 flex flex-wrap gap-4 justify-end pointer-events-none">
                {activeStack && stackMap[activeStack].map((skill, index) => (
                    <div className='aura rounded-full text-primary-bg '>
                        <span
                            key={skill}
                            className="card px-6 py-3 font-primary  bg-white border border-gray-100 text-primary-color rounded-full text-lg sm:text-xl shadow-sm"
                            style={{
                                animation: `slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                                animationDelay: `${index * 50}ms`,
                                opacity: 0,
                                transform: 'translateX(20px)'
                            }}
                        >
                            {skill}
                        </span>
                    </div>
                ))}
            </div>

            <div className='absolute bottom-0 right-0 pointer-events-none'>
                <WorkSectionImg className="w-[50vw] max-w-md h-auto" />
            </div>
        </section>
    );
};

export default AboutSection;