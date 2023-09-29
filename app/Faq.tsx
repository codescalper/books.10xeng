"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
    return (
        <div className="px-4 md:px-8 lg:px-12 py-8 mt-16 sm:mt-32 xl:mt-64 mb-32">
            <h1 className="text-4xl md:text-5xl xl:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-t from-cyan-500 to-purple-400 selection:bg-pink-400 selection:text-white">
                FAQs
            </h1>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-base md:text-xl xl:text-2xl">
                        In which form books are available?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm md:text-lg xl:text-xl">
                        Books are available in the form of PDF.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-base md:text-xl xl:text-2xl">
                        Is there a book for Core Branches like Civil, Mechanical, Electronics?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm md:text-lg xl:text-xl">
                        No, but I would be happy to add them if someone provides me the PDF on any of my socials.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-base md:text-xl xl:text-2xl">
                        Will you provide materials for VIVA?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm md:text-lg xl:text-xl">
                        Yes. The materials for viva would be provided for Computer Engineering students.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
