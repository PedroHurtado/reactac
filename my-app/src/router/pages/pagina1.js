import { useParams } from "react-router-dom"

export default function Pagina1(){
    const params = useParams()
    console.log(params)
    return <div>Pagina1</div>
}
