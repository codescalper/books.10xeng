"use client"

import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Router, { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import Confetti from "react-dom-confetti";

const GlowingBadge = ({ children }: { children: React.ReactNode }) => (
  <div className="relative inline-block">
    <div className="absolute inset-0 rounded-full bg-gradient-to-r shadow-xl from-blue-500 via-purple-500 to-indigo-500 opacity-90 blur-md animate-pulse"></div>
    {/* <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 animate-border"></div> */}
    <Badge variant="outline" className="relative z-10 bg-background border-transparent">
      {children}
    </Badge>
  </div>
);

export default function ClientHero() {
  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const router = useRouter();
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
    setTimeout(() => {
      router.push("/books");
    }, 600);
  };

  return (
    <section className="flex items-center justify-center w-full min-h-screen text-white">
      <div className="container px-4 md:px-6 py-10">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="flex justify-center space-x-2 mb-4">
                <GlowingBadge>New books Updated</GlowingBadge>
              </div>

              <h1 className="selection:bg-pink-400 text-4xl font-bold tracking-tighter sm:text-5xl xl:text-8xl mb-5">
                Level up your
                <span className="block mt-1 bg-clip-text text-transparent text-gradient">
                  engineering skills
                </span>
              </h1>
              <p className="max-w-[300px] md:max-w-[600px] text-gray-400 md:text-xl dark:text-gray-400 mx-auto mt-4">
                Learn from experts and ace your exams with our tips, tricks and study resources.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2 mx-auto">
              <Button
                className=" " 
                onClick={handleGetStartedClick}
              >
                Get Started
              </Button>
              <div className="mt-4 mx-auto flex justify-center">
                <Confetti active={isConfettiActive} config={confettiConfig} />
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <GlowingBadge>Updating notes and PYQ soon</GlowingBadge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}