import { useState, useEffect } from "react";
import { formatTimer } from "../util";

export function useTimer(date){
    const [time,setTime] = useState(formatTimer(date))
    useEffect(()=>{
        setTimeout(() => {
            setTime(formatTimer(new Date()),1000)    
        }, 1000);
    })
    return time
}