import { useState, useEffect, useRef } from "react";

export function useNearScreen({distance = '250px', externalRef, once=true} = {}){
    const [isNearScreen, setShow] = useState(false)
    const options = {rootMargin: distance}
    const fromRef = useRef()

    useEffect(() => {
        const element = externalRef ? externalRef.current : fromRef.current

        const onChange = (entries, observer) => {
            const elemento = entries[0]
            if(elemento.isIntersecting){
                setShow(true)
                once && observer.disconnect()
            } else{
                !once && setShow(false)
            }
        }
     const observer = new IntersectionObserver(onChange, options)
     observer.observe(element)
        
    })
    return {isNearScreen, fromRef}
}