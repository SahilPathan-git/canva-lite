import React, { useCallback, useEffect, useState } from "react";
import Call2 from "./Call2";
import Call3 from "./Call3";

const Call = () => {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);
  const [counter,setCounter] = useState(0)

  useEffect(()=>{
    setTimeout(()=>{
      setCounter(pre=>pre+1)
    },3000)
  },[counter])

  const increment = useCallback(() => {
    setCount((pre) => pre + 1);
  },[count]);
  const theme = {
    backgroundColor: dark ? "white" : "black",
    width: "100vw",
    height: "50px",
  };
  const change = useCallback(() => {
    setDark(!dark);
  },[dark]);
  return (
    <div>
      <div>Call Counter : {counter}</div>
      <hr />
      <div>
        Count : {count}
        <Call2 increment={increment} />
      </div>
      <hr />
      <div style={theme}>
        <Call3 change={change} />
      </div>
      <hr />
    </div>
  );
};

export default Call;


