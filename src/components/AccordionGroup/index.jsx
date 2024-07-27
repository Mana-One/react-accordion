/* eslint-disable react/prop-types */
import { useMemo } from "react"
import AccordionGroupContext from "./AccordionGroup.context"
import useDetailsNamePoliyfill from "./useDetailsNamePoliyfill"

export default function AccordionGroup({ children, groupName }) {
    const value = useMemo(
        () => ({ name: groupName }),
        [groupName]
    )

    useDetailsNamePoliyfill(value.name)

    return (
        <AccordionGroupContext.Provider value={value}>
            {children}
        </AccordionGroupContext.Provider>
    )
}