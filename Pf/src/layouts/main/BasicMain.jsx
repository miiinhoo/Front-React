import { Outlet } from "react-router-dom";

const BasicMain = () => {
  return(
    <div className="main-content">
      <Outlet/>
    </div>
  )
}
export default BasicMain;