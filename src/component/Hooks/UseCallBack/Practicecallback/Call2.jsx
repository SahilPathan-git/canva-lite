import React, { useEffect } from "react";

const Call2 = ({increment}) => {
    useEffect(()=>{
        
        console.log("call 2 component");
    },[increment])
  return (
    <div>
      <button onClick={increment}>Call 2 component</button>
    </div>
  );
};

export default Call2;
