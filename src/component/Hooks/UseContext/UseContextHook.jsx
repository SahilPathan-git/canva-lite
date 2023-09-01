import React, { createContext, useState } from "react";

const userContext = createContext();

const UseContextHook = () => {
  const [user] = useState("Sahil Pathan");
  return (
    <div>
      <h2>Use ContextHook</h2>
      <userContext.Provider value={user}>
        <div>
          <Comp0 />
        </div>
      </userContext.Provider>
    </div>
  );
};

function Comp0() {
  return (
    <div>
      <Comp1 />
    </div>
  );
}
function Comp1() {
  return (
    <div>
      <h4>Component 1</h4>

      <Comp2 />
    </div>
  );
}
function Comp2() {
  return (
    <div>
      <h4>Component 2</h4>
      <userContext.Consumer>
        {(value) => <p>User : {value}</p>}
      </userContext.Consumer>

      <Comp3 />
    </div>
  );
}
function Comp3() {
  // const user = useContext(userContext)

  return (
    <div>
      <h3>Component 3</h3>
      <div>
        <userContext.Consumer>
          {(value) => <p>User : {value}</p>}
        </userContext.Consumer>
      </div>
    </div>
  );
}

export default UseContextHook;
