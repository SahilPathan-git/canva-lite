import React, { useEffect, useState } from "react";

const UseEffect = () => {

const [windowWidth, setWindowWidth] = useState(window.innerWidth);

const resize = ()=>{
    setWindowWidth(window.innerWidth)
}
useEffect(()=>{
  window.addEventListener("resize",resize)
  console.log(window);
  
},[])

localStorage.setItem("Sahil", 1233)

let b = localStorage.getItem("Sahil")
console.log(b);

  return <div>UseEffect

    <div>
        {windowWidth}
    </div>
  </div>;
};

export default UseEffect;
