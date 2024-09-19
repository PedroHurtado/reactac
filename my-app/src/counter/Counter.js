import {useState} from 'react'

export default function Counter(){
    const [counter,setCounter] = useState(0)
    function handlerClick(){
        setCounter(counter+1)
    }
    return(
        <button onClick={handlerClick}>Click: {counter}</button>
    )
}