import React, { useState } from "react";
import { useUserContext } from "./ContextUser";


const LoginComponent = () => {

  const { login, user, logOut } = useUserContext()



  const [data, setData] = useState({
    username: "",
  });
  
  const handleLogin  = (e)=>{
    e.preventDefault()
    // console.log(data.username);
    const userdata = {username : data.username}
    // console.log(userdata);
    login(userdata)
  }

  // const newUser =  localStorage.getItem('user')
  // const anotherUser = JSON.parse(newUser)
  
  // const  {username } = anotherUser

  // if (newUser == null){
    
  // }

  const logout = ()=>{
    logOut()
  }
  return (
    <div>
      {
        user ? <span>{(user.username)}</span> : <span>No user</span>
      }
     
      <div>
        <h3>Login Page</h3>
      </div>
      <form onSubmit={handleLogin}>
        Name:{" "}
        <input
          type="text"
          name="username"
          value={data.username}
          onChange={(e) => setData({...data, [e.target.name]: e.target.value})}
        />
        <button>Submit</button>
        <button onClick={logout}>Logout</button>
      </form>
    </div>
  );
};

export default LoginComponent;
