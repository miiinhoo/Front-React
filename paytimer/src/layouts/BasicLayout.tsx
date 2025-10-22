import { JSX } from "react";
import { Outlet } from "react-router-dom";

const BasicLayout = ():JSX.Element => {
  return(
    <div>
      Main
      <Outlet/>
    </div>
  )
}
export default BasicLayout;