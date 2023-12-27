import React, { useReducer } from "react";

const Reducer = () => {

    const reducer = (state,action)=>{
        switch(action){
            case 'increment':
               return state+1 ;
            case 'decrement':
                return state -1;
            case 'reset':
                return 0       
        }
    }



    const [count, dispatch] = useReducer(reducer , 0)
  return (
    <div>
      <div>UseReducer</div>
      <div>Count : {count}</div>
      <div>
        <button onClick={() => dispatch("increment")}>Increment</button>
      </div>
      <div>
        <button onClick={() => dispatch("decrement")}>Decrement</button>
      </div>
      <div>
        <button onClick={() => dispatch("reset")}>Reset</button>
      </div>
    </div>
  );
};

export default Reducer;
