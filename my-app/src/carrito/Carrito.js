import { useState, useEffect } from "react";
export default function Carrito(){
    const [items, setItems] = useState([])
    const addElement =(ev)=>{
        ev.stopPropagation()
        const {detail} = ev
        items.push(detail)
        setItems([...items])
    }  
    useEffect(()=>{                
        document.addEventListener('carrito', addElement)
        return ()=>document.removeEventListener('carrito', addElement)
    })
    const length = items.length
    return(
        <div>Total:{length}</div>
    )
}