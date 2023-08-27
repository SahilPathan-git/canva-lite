import React from "react";

const Child = (props) => {
// console.log(data)
const {id,name,city} = props.newData
  return (
    <div>
      <h1>Child</h1>
      <div> {id}</div>
      <div> {name}</div>
      <div> {city}</div>
    </div>
  );
};

export default Child;
