import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function () {

  return (
    <section className=" w-full h-screen py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">

        <div className="grid gap-6 items-center">

          <div className="flex flex-col justify-center space-y-4 text-center">

            <div className="space-y-2">

              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                Level up your
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-400">
                  engineering
                </span>
                skills
              </h1>

              <p className="max-w-[600px] md:text-xl mx-auto">
                Learn from experts and ace your exams with our tips, tricks and study resources.
              </p>

            </div>

            <div className="w-full max-w-sm space-y-2 mx-auto">

              <Button className="bg-white text-gray-900">Get Started</Button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );

}