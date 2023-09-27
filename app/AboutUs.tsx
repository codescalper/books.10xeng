import React from "react";

type Props = {};

function AboutUs({ }: Props) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="about-us-image">
                {/*Will add image here*/}
            </div>
            <div className="about-us-text">
                <h2 className="text-xl font-bold sm:text-3xl xl:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-lime-500 to-emerald-400">About Us</h2>
                <p className="mb-4 xl:text-xl ">10xEng provides free resources like books and blogs to help students excel academically in engineering.</p>
                <p className="mb-4 xl:text-xl">Free training offered beyond academics to nurture better developers and guide career excellence.</p>
                <p className="mb-4 xl:text-xl">Focus on holistic development through events that enhance skills and enable networking.</p>
                <p className="mb-4 xl:text-xl">Weekly live chats hosted on Discord to get your doubts solved.</p>
            </div>
        </div>
    );
}

export default AboutUs;
