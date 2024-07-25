/* eslint-disable react/prop-types */
import './Accordion.css'
import AccordionContext from './Accordion.context'
import { forwardRef } from 'react'

/**
 * @typedef {import('react').ReactNode} ReactNode
 * @typedef {import('react').RefAttributes} RefAttributes
 */

/**
 * @component
 * @param {Object} props
 * @param {ReactNode?} props.children
 * @param {string?} props.id
 * @param {RefAttributes<any>} props.ref
 * @param {boolean?} props.opened
 * @param {(() => void)?} props.onToggle
 */
export default forwardRef(function Accordion({ children, id, opened, onToggle }, ref) {
	return (
		<AccordionContext.Provider value={true}>
			<details 
				id={id} 
				ref={ref} 
				open={opened}
				onToggle={onToggle}>
				{children}
			</details>
		</AccordionContext.Provider>
	)
})