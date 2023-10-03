import { Button } from "@/components/ui/button"; 
import React from "react";
import { FaGithub } from "react-icons/fa";

const OpenSource = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-24 h-screen flex flex-col md:flex-row justify-center md:justify-between items-center">
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-4xl xl:text-6xl mb-3 md:mb-0 sm:mb-4 mt-0 pt-0 selection:bg-pink-400">
          10xEng is Proudly <span className="bg-clip-text selection:text-white text-transparent bg-gradient-to-r from-red-600 to-rose-600">Open Source</span>
        </h1>
        <p className="text-lg md:text-xl xl:text-2xl mt-10" >Built with the vision to encourage open-source enthusiasts!</p>
      </div>
      <div className="mt-10 sm:mt-4 md:mt-0">
        <a href="https://github.com/codescalper/books.10xeng" target="blank">
          <Button size='lg' className="bg-rose-600 text-white-900 text-lg">
            <FaGithub size={24} />&nbsp; Star on Github
          </Button>
        </a>
      </div>
    </div>
  );
};

export default OpenSource;
