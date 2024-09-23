//
import {Link} from 'react-router-dom'
export default function Menu(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/pagina1/1/monica">pagina1</Link>
                </li>
                <li>
                    <Link to="/pagina2?name=pedro&size=25&page=1">pagina2</Link>
                </li>
                <li>
                    <Link to="/pagina3">pagina3</Link>
                </li>
            </ul>
        </nav>
    )
}