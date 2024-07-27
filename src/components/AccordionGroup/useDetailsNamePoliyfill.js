import { useEffect } from "react"

export default function useDetailsNamePoliyfill(name) {
    useEffect(() => {
        if (!navigator.userAgent.toLowerCase().includes('firefox')) {
            console.log('not firefox')
            return
        }

        function handleToggle() {
            if (!this.hasAttribute('open')) {
                return
            }
            getOpenGroupDetails(name).forEach(otherDetailElement => {
                if (this === otherDetailElement) {
                    return
                }
                otherDetailElement.removeAttribute('open')
            })
        }

        getOpenGroupDetails(name).forEach((detailElement, index) => {
            if (index === 0) {
                return
            }
            detailElement.removeAttribute('open')
        })

        getGroupDetails(name).forEach(detailElement => {
            detailElement.addEventListener('toggle', handleToggle)
        })

        return () => {
            getGroupDetails(name).forEach(detailElement => {
                detailElement.removeEventListener('toggle', handleToggle)
            })
        }
    }, [name])
}

function getGroupDetails(name) {
    return document.querySelectorAll(`details[name=${name}]`)
}

function getOpenGroupDetails(name) {
    return document.querySelectorAll(`details[name=${name}][open]`)
}