import { useState } from "react";
import { UserLogin,UserSignup } from "../api/FireBaseAPI";

export default function useFireBase() {
  const [ user,setUser ] = useState<any>(null);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState<string | null>(null);

  
  const tryLogin = async(email:string,password:string) => {
    try{
      setLoading(true);
      const result = await UserLogin(email,password);
      setUser(result.user);
    }catch(err:any){
      setError(err);
    }finally{
      setLoading(false);
    }
  }

  return { }
}