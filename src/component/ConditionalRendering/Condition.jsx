import React, { useState } from 'react'

const Condition = () => {
   const [data,setData] =  useState(true)

   const ChangeData = ()=>{
    setData(! data)
   }
  return (
    <div>

        <h2>Condition</h2>
        <h3>{data}</h3>
        <button onClick={ChangeData}>{!data ? 'Hide' : 'Show'}</button>
        {/* <div>
            {data ? <div>I am Sahil Pathan</div>:<div> I am from Satara</div>}
        </div> */}
    </div>
  )
}

export default Condition