"use client"
import { type } from 'os';
import React, { useState, useReducer } from 'react'

// export default function page() {
//   const [num, setNum] = useState(0);

//   const handleCount = () => {
//     setNum((tempnum) => tempnum+1);
//     setNum((tempnum) => tempnum+1);
//     setNum((tempnum) => tempnum+1);
//   }
//   console.log(num)

//   return (
//     <div className='bg-white h-screen'>
//       <h1>{num}</h1>
//       <button onClick={handleCount}>+3 </button>      
//     </div>
//   )
// }

function reducer(state: number, action: { type: string }) {
  if (action.type === "Increament_count") {
    return state + 1;
  }
  return state;
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, 0);

  const handleCount = () => {
    dispatch({ type: "incremented_count" })
  }

  return (
    <>
      {/* <button onClick={handleCount}>
        Increment age
      </button>
      <p>Hello! You are {state.age}.</p> */}
    </>
  );
}

