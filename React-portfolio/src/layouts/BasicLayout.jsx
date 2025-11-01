import { Outlet } from "react-router-dom";
import BasicHeader from "./header/BasicHeader";

export default function BasicLayout(){
    return (
        <div className="site-wrapper">
            <header>
                <BasicHeader/>
            </header>
            <>
                <Outlet/>
            </>
        </div>
    )
}