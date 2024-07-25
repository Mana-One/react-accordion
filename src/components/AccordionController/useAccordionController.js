import { useContext, useEffect } from "react";
import AccordionControllerContext from "./AccordionControllerContext";

export default function useAccordionController(id, callback) {
	const controller = useContext(AccordionControllerContext)
	if (controller === null) {
		throw new Error('Must be used within an AccordionController.')
	}

	const { notifyHasOpened, register } = controller

	useEffect(() => {
		return register(id, callback)
	}, [id, callback, register])

	return notifyHasOpened
}