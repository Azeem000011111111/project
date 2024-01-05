"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export default function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-full text-[1.25rem]">
        <AccordionItem value="item-1">
          <AccordionTrigger>How to play this game?</AccordionTrigger>
          <AccordionContent className="text-[1rem] text-[#777]">
          Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
        <AccordionTrigger>How to play this game?</AccordionTrigger>
          <AccordionContent className="text-[1rem] text-[#777]" >
          Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
        <AccordionTrigger>How to play this game?</AccordionTrigger>
          <AccordionContent className="text-[1rem] text-[#777]" >
          Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
        <AccordionTrigger>How to play this game?</AccordionTrigger>
          <AccordionContent className="text-[1rem] text-[#777]" >
          Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
        <AccordionTrigger>How to play this game?</AccordionTrigger>
          <AccordionContent className="text-[1rem] text-[#777]" >
          Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  