import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import PracChild from "./PracChild";



const PracParent = () => {
  let ref =React.createRef();
  return (
    <div>
      <PracChild ref={ref} />
      <button onClick={ref.current.focus()}>Submit</button>
    </div>
  );
};

export default PracParent;
