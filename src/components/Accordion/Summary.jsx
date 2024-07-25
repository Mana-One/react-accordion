/* eslint-disable react/prop-types */
import useAccordion from "./useAccordion"

export default function Summary({ children }) {
	useAccordion()
	
	return <summary>{children}</summary>
}