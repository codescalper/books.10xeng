import React from "react";

type Props = {};

function AboutUs({ }: Props) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="about-us-image">
                {/* You can put your image here */}
            </div>
            <div className="about-us-text">
                <h2 className="text-xl font-bold sm:text-3xl xl:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-lime-500 to-emerald-400">About Us</h2>
                <p className="mb-4 xl:text-xl ">At 10xeng, we believe in the power of knowledge and the importance of personal growth. We understand that every student, regardless of their field of study, has the potential to excel and make a significant impact in their chosen field.</p>
                <p className="mb-4 xl:text-xl">We are committed to providing FREE resources to help students achieve academic excellence and personal growth. Our offerings include a wide range of books, insightful blogs on engineering life, tech in general, and tips to score a good CGPA.</p>
                <p className="mb-4 xl:text-xl">But we don’t stop at academics. We understand that being a successful professional requires more than just good grades. That’s why we also focus on the holistic development of our users. We provide free training aimed at nurturing better developers and offer guidance to help you excel in your career.</p>
                <p>We also host weekly and monthly events aimed at enhancing your skills and providing a platform for you to interact and learn from like-minded individuals.</p>
            </div>
        </div>
    );
}

export default AboutUs;
