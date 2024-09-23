import { useLocation, useNavigate } from "react-router-dom"

//https://developer.mozilla.org/en-US/docs/Web/API/Window/location
//https://developer.mozilla.org/en-US/docs/Web/API/Window/history

export default function Pagina3(){
    const location = useLocation()
    //const history = useHistory()
    const navigate = useNavigate()
    console.log(location)
    console.log(navigate)
    //navigate("/pagina1")
    function handlerClick (){
        navigate("/pagina1/2/pedro")
        //window.history.back()
    }
    return (<>
        <button onClick={handlerClick}>Atras</button>
        <div>Pagina3</div>
    </>)
}
