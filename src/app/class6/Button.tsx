"use client"

import { useState } from "react";

// const Button = () => {
//     const [count, setCount] = useState<number>(1);

//     const Increament = () => {
//         setCount(count + 1);        
//     }
//     const Decreament = () => {
//         setCount( (count<=1) ? 1 :count - 1);
//     }

//     return (
//         <div className="flex gap-4 items-center">
//             <button className="bg-white p-2 rounded " onClick={Decreament}>Decreament</button>
//             <div className="border p-1 w-10 text-center bg-white text-lg font-medium"> {count} </div>
//             <button className="bg-white p-2 rounded" onClick={Increament}>Increament</button>
//         </div>
//     )
// }



// Props
interface iProps {
    name: string,
    count: number,
    setCount: (count: number) => void;
}

// const Button = (props: iProps) => {
    // Props Destructuring
const Button = ({name,count,setCount}: iProps) => {
    return (
        <div>
            <button className="bg-lime-400 p-2 rounded text-white text-lg"
                onClick={() => setCount(count + 1)}
            >
                {name} {count}
            </button>
        </div>
    )
}

export default Button;