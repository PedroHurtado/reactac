import {useSearchParams } from "react-router-dom"

export default function Pagina2(){
    const [URLSearchParams] = useSearchParams()
    const data =[...URLSearchParams] 
    const obj = data.reduce((a,p)=>{
        const [key,value] = p
        a[key] = value
        return a
    },{})
    console.log(obj)
    return <div>Pagina2</div>
}
