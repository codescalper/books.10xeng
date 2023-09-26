"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Faq() {
    return (
        <>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>In which form books are available?</AccordionTrigger>
                    <AccordionContent>
                        Books are available in the form of PDF.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Is there book for Core Branches like Civil, Mechanical, Electronics? </AccordionTrigger>
                    <AccordionContent>
                        No, But would be happy to add them if someone provides me the pdf on any of my socails
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Will you provide materials for VIVA</AccordionTrigger>
                    <AccordionContent>
                        Yes. The materails for viva would be provided for Computer Engineering students
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </>
    )
}
