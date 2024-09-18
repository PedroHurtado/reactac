import './Day.css'
export default function Day({day}){   
    return(<div className="day" data-day={day}>{day}</div>)
}