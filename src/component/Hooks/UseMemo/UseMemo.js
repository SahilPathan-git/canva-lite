import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);

  const countSquare = useMemo(() => {
    console.log("Calculate Square value");

    return count * count;
  }, [count]);
  return (
    <div>
      <h3>Use Memo</h3>
      <div> Count : {count}</div>
      <div>
        <button onClick={(e) => setCount(count + 1)}>Increment</button>
      </div>
          <div>Count Square : {countSquare}</div>
    </div>
  );
};

export default UseMemo;



// import React, { useState, useMemo } from 'react';

// function UseMemo({ limit }) {
//     const [count, setCount] = useState(1);

//     // Generate a list of even numbers up to the specified limit
//     const evenNumbers = useMemo(() => {
//         const evenList = [];
//         for (let i = 2; i <= limit; i += 2) {
//             evenList.push(i);
//         }
//         return evenList;
//     }, [limit]);

//     return (
//         <div>
//             <p>Generate a list of even numbers up to:</p>
//             <input
//                 type="number"
//                 value={limit}
//                 onChange={(e) => setCount(e.target.value)}
//             />
//             <ul>
//                 {evenNumbers.map((number) => (
//                     <li key={number}>{number}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default UseMemo;
