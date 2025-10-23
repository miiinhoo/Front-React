import React, { JSX } from "react";
import ButtonComponent from "../../components/ButtonComponent";
import LoginComponent from "../../components/user/LoginComponent";

export default function LoginPage():JSX.Element{
  return(
    <div className="page-wrapper">
      LoginPage입니다..
      <React.Fragment>
          <LoginComponent/>
      </React.Fragment>
      
      <ButtonComponent text={"회원가입"} click={"/user/signup"}/>
    </div>
  );
}