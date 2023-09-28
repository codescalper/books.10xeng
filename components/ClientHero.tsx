import { Button } from "@/components/ui/button";

export default function () {

  return (
    <section className="flex items-center justify-center w-full h-screen py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">

        <div className="grid gap-6 items-center">

          <div className="flex flex-col justify-center space-y-4 text-center">

            <div className="space-y-2">

              <h1 className="selection:bg-pink-400 text-3xl font-bold tracking-tighter sm:text-5xl xl:text-8xl mb-5">
                Level up your
                <span className="selection:text-white bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-400">
                  &nbsp;engineering&nbsp;
                </span>
                skills
              </h1>

              <p className="selection:bg-lime-400 selection:text-black max-w-[600px] md:text-2xl mx-auto ">
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