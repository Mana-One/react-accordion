import { useContext } from "react";
import AccordionGroupContext from "./AccordionGroup.context";

export default function useAccordionGroup() {
    return useContext(AccordionGroupContext)
}