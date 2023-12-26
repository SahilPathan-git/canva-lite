import React,{useState} from "react";

const NewToggle = () => {
  const [dark,setDark] = useState(true)

  const theme = {
    "background-color": dark ? "green" : "red",    
    width: "100vw",
    height: "100vh",
  };
         
  return (
    <div style={theme}>
      <div>{dark ? "Green" : "Red"}</div>
      <button onClick={()=>setDark(!dark)}>Change Theme</button>
    </div>
  );
};

export default NewToggle;
