/* eslint-disable react/prop-types */
import useAccordion from "./useAccordion"

export default function Content({ children }) {
	useAccordion()

	return <div className="content">{children}</div>
}