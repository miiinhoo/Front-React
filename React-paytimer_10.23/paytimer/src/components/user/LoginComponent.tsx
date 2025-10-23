import { JSX } from "react";
import { UserSignup, UserLogin } from "../../api/FireBaseAPI";

export default function LoginComponent():JSX.Element{


  return(
    <div className="login-form">
      <input type="text" 
      onChange={(e) => e.target.value}
      />
    </div>
  );
}