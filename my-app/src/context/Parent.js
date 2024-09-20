import { useState } from "react";
import { UserContext } from "./usercontext";
import Child from "./Child";
export default function Parent(){
    const [user,setUser] = useState({name:'pedro'})
    function handlerClick(){
        console.log(user)
        setUser({name:'Pedro Hurtado'})
    }
    return(
        <UserContext.Provider value={{...user}}>
            <button onClick={handlerClick}>Cambiar nombre</button>
            <Child/>
        </UserContext.Provider>
    )

}