import React from "react";
import Image from 'next/image';
type Props = {};



function AboutUs({ }: Props) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-1/2 " id="about-us">
            <div className="md:mb-1">
                <Image src="/aboutUs.png" alt="Eng Hub" width={500} height={500} />
            </div>
            <div className="about-us-text p-4 md:p-0">
                <h2 className="text-4xl  sm:text-5xl xl:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-lime-500 to-emerald-400 selection:bg-pink-400 selection:text-white">About Us</h2>
                <ul className="text-lg sm:text-xl xl:text-2xl list-disc list-inside mb-4">
                    <li>10xEng provides free resources like books and blogs to help students excel academically in engineering.</li><br></br>
                    <li>Free training offered beyond academics to nurture better developers and guide career excellence.</li><br></br>
                    <li>Focus on holistic development through events that enhance skills and enable networking.</li><br></br>
                    <li>Weekly live chats hosted on Discord to get your doubts solved.</li><br></br>
                </ul>
            </div>
        </div>
    );
}

export default AboutUs;
