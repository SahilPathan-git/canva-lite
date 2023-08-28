import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      return 0;
  }
};

function UseReducerHook() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1>Use Reducer Hook</h1>
      <div>Count -- {count}</div>
      <div>
        <button onClick={() => dispatch("increment")}>Increment</button>
        <button onClick={() => dispatch("decrement")}>Decrement</button>
        <button onClick={() => dispatch("reset")}>reset</button>
      </div>
    </div>
  );
}
export default UseReducerHook;
