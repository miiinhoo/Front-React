import React, { JSX } from "react";
import useEvent from "../hooks/useEvent";

type Props = {
  text: string,
  click: string,
}

export default function ButtonComponent({text,click}:Props):JSX.Element{
  const { navigate } = useEvent();

  return(
    <React.Fragment>
      <button onClick={() => navigate(click)}>
        { text }
      </button>
    </React.Fragment>
  );
}