import React, { useState } from "react";

const Counter = () => {
  const [count, setcount] = useState(0);

  const increment = ()=>{
    setcount(count +1)
  }

  return (
    <div>
      <center>
        <h1>Counter</h1>
        <div>
          <span>{count}</span>
        </div>
        <button onClick={increment}>Add</button>
        <button onClick={()=>setcount(count-1)}>sub</button>
        <button onClick={()=>setcount(0)}>reset</button>
      </center>
    </div>
  );
};

export default Counter;
