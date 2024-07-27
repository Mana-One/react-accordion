/* eslint-disable react/prop-types */
import { useMemo } from "react"
import AccordionGroupContext from "./AccordionGroup.context"

export default function AccordionGroup({ children, groupName }) {
    const value = useMemo(
        () => ({ name: groupName }),
        [groupName]
    )

    return (
        <AccordionGroupContext.Provider value={value}>
            {children}
        </AccordionGroupContext.Provider>
    )
}