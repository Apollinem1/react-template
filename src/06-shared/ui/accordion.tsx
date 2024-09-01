import { Accordion } from "flowbite-react"
import type { AccordionProps } from "flowbite-react"

export function UiAccordeon ({...props}: AccordionProps) {
  return <Accordion color={props.color ?? 'dark'} {...props}></Accordion>
};

export const UiAccordeonPanel = Accordion.Panel
export const UiAccordeonTitle = Accordion.Title
export const UiAccordeonContent = Accordion.Content
