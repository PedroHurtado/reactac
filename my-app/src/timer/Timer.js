import { useTimer } from "./useTimer"

export default function Timer(){
    const time =useTimer(new Date())
    return(
        <div>{time}</div>
    )
}