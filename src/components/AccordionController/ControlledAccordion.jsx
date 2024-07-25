import { Children, cloneElement, useCallback, useId, useRef } from "react"
import useAccordionController from "./useAccordionController"

// TODO: ControlledAccordion will set the 'opened' prop to false
// => setting multiple Accordions with 'opened' prop results in unexpected behaviour
// try to allow user to open multiple Accordions on mount

/**
 * @typedef {import("react").ReactNode} ReactNode
 */

/**
 * @component 
 * @param {Object} props
 * @param {ReactNode} props.children
 * @returns {JSX.Element}
 */
export default function ControlledAccordion({ children }) {
	const id = useId()
	const ref = useRef()
	
	const accordion = Children.only(children)

	const onOpen = useCallback(() => {
		if (!ref?.current) {
			return
		}

		ref.current.open = false
	}, [])

	const notifyHasOpened = useAccordionController(id, onOpen)

	const onToggle = useCallback(() => {
		if (!ref?.current?.open) {
			return
		}
		notifyHasOpened(id)
	}, [id, notifyHasOpened])

	return cloneElement(accordion, {
		id,
		ref,
		onToggle,
		opened: false // for now close all Accordions on mount within an AccordionController
	})
}