import React, { createContext, useContext, useState } from "react";

const usercontext = createContext();

export const useUserContext = () => {
  return useContext(usercontext);
};

const ContextUser = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (data) => {
    setUser(data);
    localStorage.setItem('user', JSON.stringify(data))
  };

  const logOut = () => {
    console.log("first");

    localStorage.removeItem('user')
    setUser(null);
  };

  return (
    <usercontext.Provider value={{ user, login, logOut }}>
      {children}
    </usercontext.Provider>
  );
};

export default ContextUser;


// import React, { createContext, useContext, useState } from "react";

// const usercontext = createContext();

// export function ProviderContext() {
//   return useContext(usercontext);
// }

// const ContextUser = ({ children }) => {
//     const [user, setUser] = useState(null)
//   const login = (userdata) => {
// console.log("i am in login component ------" ,userdata );

//   };

//   const logout = () => {};

//   return <usercontext.Provider value={{user,login,logout}}>{children}</usercontext.Provider>;
// };

// export default ContextUser;
