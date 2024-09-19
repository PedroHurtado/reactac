import { useState, useEffect } from "react";
export function useCarrito(initalItems){
    const [items, setItems] = useState(initalItems)
    const addElement =(ev)=>{
        ev.stopPropagation()
        const {detail} = ev
        items.push(detail)
        setItems([...items])
    }          
    useEffect(()=>{                
        document.addEventListener('carrito', addElement)
        return ()=>{
            document.removeEventListener('carrito', addElement)
        }
    })
    return items
}