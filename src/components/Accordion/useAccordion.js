import { useContext } from "react";
import AccordionContext from "./Accordion.context";

export default function useAccordion() {
	const isInAccordion = useContext(AccordionContext)
	if (!isInAccordion) {
		throw new Error('Component must be used within an Accordion.')
	}
}