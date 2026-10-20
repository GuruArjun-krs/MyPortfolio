import React from 'react';
import { ContactContent } from '../../../Contact';

const ContactSection = () => {
    return (
        <section
            id="contact"
            className="min-h-[calc(100vh-40px)] bg-primary-bg rounded-xl relative overflow-hidden flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-16 sm:py-20"
        >
            {/* Background architectural typography element like Hero & Projects */}
            <div
                className="absolute -bottom-6 left-0 right-0 font-primary font-black text-[#2d4a45]/5 uppercase leading-none select-none pointer-events-none text-center text-[18vw] whitespace-nowrap overflow-hidden"
                style={{ letterSpacing: '-0.02em', lineHeight: 0.8 }}
            >
                CONNECT
            </div>

            <div className="relative z-10 max-w-6xl mx-auto w-full">
                <ContactContent isSection={true} />
            </div>
        </section>
    );
};

export default ContactSection;
