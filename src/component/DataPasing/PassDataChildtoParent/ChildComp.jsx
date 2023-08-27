import React from 'react'

const ChildComp = (props) => {
  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={()=>props.parentData("Hello World")}>PassData</button>
    </div>
  );
}

export default ChildComp