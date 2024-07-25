/* eslint-disable react/prop-types */
import { Children, useCallback } from "react"
import { useRef } from "react"
import AccordionControllerContext from "./AccordionControllerContext"
import ControlledAccordion from "./ControlledAccordion"

export default function AccordionController({ children }) {
	const ref = useRef()
	const accordions = useRef(new Map())

	const register = useCallback((id, callback) => {
		accordions.current.set(id, callback)
		return () => accordions.current.delete(id)
	}, [])

	const notifyHasOpened = useCallback((targetId) => {
		if (!accordions.current.has(targetId)) {
			return
		}

		accordions.current.forEach((callback, id) => {
			if (id === targetId) {
				return
			}
			callback()
		})
	}, [])

	return (
		<AccordionControllerContext.Provider value={{ notifyHasOpened, register }} ref={ref}>
			{Children.map(children, (child) => (
				<ControlledAccordion>
					{child}
				</ControlledAccordion>
			))}
		</AccordionControllerContext.Provider>
	)
}