import React, { useReducer } from "react";

const reducer = (count, action) => {
  switch (action) {
    case "add":
      return count + 1
      break;
  }
};

const UseReducerHook = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      UseReducerHook
      <div>{count}</div>
      <div>
        <button onClick={()=>dispatch("Add")}>Increment</button>
      </div>
    </div>
  );
};

export default UseReducerHook;
