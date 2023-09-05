import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [name, setName] = useState("");

  const inputRef = useRef();
  console.log(inputRef);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={inputRef}
        name="name"
        value={name}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
};

export default UseRef;
