import React, { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    city: "",
  });

 
  const handleChange = (e) => {
     
    setData({
      ...data,
     [e.target.name]:e.target.value
    });
  };


  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(`${data.name} and ${data.city}`)
  }
  return (
    <div>
      <h2>Form Handling</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Name:{" "}
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </div>
        <div>
          City:{" "}
          <input
            type="text"
            name="city"
            value={data.city}
            onChange={handleChange}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
