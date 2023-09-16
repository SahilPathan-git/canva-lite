

import React, { useEffect, useState } from "react";

const LocalStorage = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState(""); // Add user state

  // Load the initial user value from localStorage when the component mounts
  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", name);
    setUser(name); // Update the user state with the new username
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        username : <input type="text" value={name} onChange={handleChange} />
        <button>Submit to localStorage</button>
      </form>
      <div>
        {user && <p>User: {user}</p>} {/* Display the user */}
      </div>
    </div>
  );
};

export default LocalStorage;
