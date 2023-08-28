import React, { useState } from "react";

const UseState = () => {
  const [data, setData] = useState({
    FirstName: "",
    LastName: "",
  });

  const [count, setCount] = useState(0)

  const handleChange = (e)=>{
    const {name,value} = e.target
    setData({...data, [name]: value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    alert(`${data.FirstName} and ${data.LastName}`)

  }
  return (
    <div>
      <h1>UseSate</h1>
      <div>
        <form onSubmit={handleSubmit}>
          First name:
          <input
            type="text"
            // name= "FirstName"
            value={data.FirstName}
            // onChange={(e) => setdata({ ...data, FirstName: e.target.value })}
            onChange={handleChange}
          />
          Last Name:
          <input
            type="text"
            // name="LastName"
            value={data.LastName}
            // onChange={(e) => setData({ ...data, LastName: e.target.value })}
            onChange={handleChange}
          />
          <button>Submit</button>
        </form>
        {/* {document.write(name.FirstName)} */}
        {/* <div>First name is - {name.FirstName}</div>
        <div>Last name is - {name.LastName}</div> */}
      </div>
      <div>
        <hr />
        <div>
          <h4>Counter using Use State</h4>
          <div>Count -- {count}</div>
          <button onClick={() => setCount(count + 1)}>Add</button>
          <button onClick={() => setCount(count + 1)}>sub</button>
          <button onClick={() => setCount(0)}>reset</button>
        </div>
      </div>
    </div>
  );
};

export default UseState;
