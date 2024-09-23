import { Outlet } from "react-router-dom";
import Menu from "./Menu";
import './Layout.css'

export default function Layout(){
    return(
        <div className="layout">
            <div>
                <Menu/>
            </div>            
            <div>
                <Outlet/>
            </div>            
        </div>
    )
}