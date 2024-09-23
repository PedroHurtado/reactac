import { Outlet } from "react-router-dom";
import Menu from "./Menu";
import style from './Layout.module.css'

export default function Layout(){
    return(
        <div className={style.layout}>
            <div>
                <Menu/>
            </div>            
            <div>
                <Outlet/>
            </div>            
        </div>
    )
}