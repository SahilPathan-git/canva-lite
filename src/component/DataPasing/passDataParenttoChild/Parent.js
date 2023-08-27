import React from "react";
import Child from "./Child";

const Parent = () => {
  const data = {
    id: 1,
    name: "Sahil",
    city: "Pune",
  };
  return (
    <div>
      <h1>Parent</h1>

      <Child newData={data} />
    </div>
  );
};

export default Parent;
