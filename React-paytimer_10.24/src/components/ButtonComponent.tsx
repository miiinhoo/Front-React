import React, { JSX } from "react";
import useEvent from "../hooks/useEvent";

type Props = {
  text: string,
  classN: string,
  click: () => void,
  types? : "submit" | "button" | "reset",
}

export default function ButtonComponent({text,click,types,classN}:Props,):JSX.Element{

  return(
    <React.Fragment>
      <button 
      onClick={click}
      type={types}
      className={classN}>
        { text }
      </button>
    </React.Fragment>
  );
}