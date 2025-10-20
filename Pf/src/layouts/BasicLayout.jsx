import React from "react"
import BasicHeader from "./header/BasicHeader"
import BasicMain from "./main/BasicMain"

export default function BasicLayout(){
  return(
    <React.Fragment>
      <BasicHeader/>
      <div className="main-wrapper">
        <BasicMain/>
      </div>
    </React.Fragment>
  )
}