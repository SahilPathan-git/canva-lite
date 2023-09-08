import React, { useEffect, useState } from "react";

const List = ({getItems}) => {
    const [show, setshow] = useState([])

    useEffect(()=>{
        setshow(getItems)
        console.log("I am render");
        console.log("I from use Effect");
        
        
        
    }, [getItems])
  return <div>

      {/* {show.map(item => <div key={item}>{item}</div>)} */}
     {
        show.map((i,u)=>{
            return(
                <div key={u}>{i}</div>
            )
        })
     }

  </div>;
};

export default List;
