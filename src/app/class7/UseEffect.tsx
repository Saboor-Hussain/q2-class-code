"use client"

import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {

        //Mount Code
        console.log("Use Effect");

        if (true) {
            setCount(count + 1);
        }

        // Unmount Code
        return (() => {

        })

    }, []);

    return (
        <div>

        </div>
    )
}

function Panel() {
    return (
        <div>
            Use Effect
        </div>
    )
}
