import { GetDays } from "./calendarService";
import Day from "./Day";
import './Calendar.css'
export default function Calendar(){
    const data = [...GetDays()]
    function handlerClick(ev){
        ev.stopPropagation()
        const {nativeEvent} = ev;
        const node = nativeEvent.composedPath().find(n=>n.dataset && 'day' in n.dataset)
        if(node){
            const {day} = node.dataset
            console.log(day) 
        }
    }
    return(
        <div className="calendar" onClick={handlerClick}>
            {data.map(day=><Day key={day} day={day}/>)}
        </div>
    )
}