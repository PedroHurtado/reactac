import { useState, useEffect } from "react";
import pubub from "../pubsub";
export function useCarrito(initalItems){
    const [items, setItems] = useState(initalItems)
    const addElement =(item)=>{                
        setItems([...items,item])
    }          
    useEffect(()=>{                
        const dispose = pubub.on('carrito', addElement)
        return ()=>{
            dispose()
        }
    })
    return items
}