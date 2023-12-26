import React, { useEffect } from "react";

const Call3 = ({change}) => {
  useEffect(()=>{
    console.log("call 3 component");

  },[change])
  
  return <div><button onClick={change}>Change theme</button></div>;
};

export default Call3;
