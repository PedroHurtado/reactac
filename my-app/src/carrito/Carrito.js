import { useCarrito } from "./useCarrito";

export default function Carrito(){
    const items = useCarrito([])
    function handlerClick(){
        console.log(items)
    }
    return(
        <>
            <div>Total:{items.length}</div>
            <button onClick={handlerClick}>Pagar</button>
        </>
    )
}