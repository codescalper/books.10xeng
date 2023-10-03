"use client"
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Confetti from "react-dom-confetti";
export default function ClientHero () {
  const [isConfettiActive, setIsConfettiActive] = useState(false);

  const confettiConfig = {
    angle: 90,
    spread: 180,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: "20px",
    height: "40px",
    colors: ["#F7D708", "#FF6B6B", "#70A1FF", "#23D5AB", "#E38627"],
  };

  const handleGetStartedClick = () => {

    setIsConfettiActive(true);  
    setTimeout(() => {
      setIsConfettiActive(false);
    }, 100);  
   
  };


  return (
    <section className="flex items-center justify-center w-full h-screen py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">

        <div className="grid gap-6 items-center">

          <div className="flex flex-col justify-center space-y-4 text-center">

            <div className="space-y-2">

              <h1 className="selection:bg-pink-400 text-4xl font-bold tracking-tighter sm:text-5xl xl:text-8xl mb-5">
                Level up your
                <span className="selection:text-white bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-400 ">
                  &nbsp;engineering&nbsp;
                </span>
                skills
              </h1>

              <p className="selection:bg-lime-400 selection:text-black max-w-[600px] md:text-2xl mx-auto ">
                Learn from experts and ace your exams with our tips, tricks and study resources.
              </p>

            </div>

            <div className="w-full max-w-sm space-y-2 mx-auto">

              <Button className="bg-white text-gray-900" onClick={handleGetStartedClick}>Get Started</Button>
              <div className="mt-4 mx-auto flex justify-center" >
                <Confetti active={isConfettiActive} config={confettiConfig} />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );

}