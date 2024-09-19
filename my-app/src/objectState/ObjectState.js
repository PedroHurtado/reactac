import { useState } from "react";
export default function ObjectState(){
    const [data,setData] = useState([{id:1,name:'pedro'}, {id:2,name:'cesar'}])
    function handlerClick(){
        data[0].name ="pedro hurtado"
        setData([...data])
    }
    return(
        <>
            <button onClick={handlerClick}>Change data</button>
            {
                data.map(({id,name})=>{
                    return(
                        <div key={id}>{name}</div>
                    )
                })
            }
        </>
    )
}