import { useContext } from "react";
import { UserContext } from "./usercontext";


export default function Child1(){
    const user = useContext(UserContext)
    function handlerClick(){
        user.name = "Pedro Hurtado Candel"
    }
    return(
        <>
            <button onClick={handlerClick}>Cambiar referencia</button>
            <div>Soy el nieto</div>
            <div>{user.name}</div>
        </>
        
    )
}