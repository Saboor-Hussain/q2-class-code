"use client"

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function page() {

    const user = {
        name: 'Hedy Lamarr',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        age: 21,
        imageSize: 90,
    }

    const isLoggedIn = true;
    let content;
    if (isLoggedIn) {
        content = <h2>Admin Panel</h2>;
    } else {

        content = <h2>Login Form</h2>;
    }

    const products = [
        { title: 'Cabbage', id: 1 },
        { title: 'Garlic', id: 2 },
        { title: 'Apple', id: 3 },
    ];

    // Using Hook
    const [age, setAge] = useState(20);
    // console.log(age)
    // console.log(setAge);
    const handleClick = () => {
        console.log('You Clicked me!' + "\nYour Age:" + age);
        setAge(age + 1);
    }

    return (
        <div className='myColor2 h-full p-4 relative'>
            <Link href={"/"}> <span className='text-white bg-red-500 border border-transparent p-2 text-2xl absolute top-0 left-0'> ← </span> </Link>
            <div className='flex flex-col gap-4 justify-center items-center'>

                {/* Displaying Data */}
                <div className='box flex flex-col gap-2 items-center'>
                    <h2 className='text-2xl font-semibold'>Displaying Data</h2>
                    <hr className='border-2 border-blue-400 w-full' />
                    <Image className='rounded-3xl border' src={user.imageUrl} alt={user.name} width={user.imageSize} height={user.imageSize} />
                    <h2>{user.name}</h2>
                </div>


                {/* Conditional Rendering */}
                <div className={`p-12 w-1/2 text-xl text-white rounded-lg border-2 border-white ${(isLoggedIn) ? "bg-green-500" : "bg-red-500"}`}>
                    <h2 className='text-2xl font-semibold'>Conditional Rendering</h2>
                    <p>Condition: {String(isLoggedIn)}</p>
                    <hr className='border-2 border-blue-500' />
                    <h4>Option 1:</h4>
                    {content}

                    {/* Ternery Operator */}
                    {/* Ternery Operator always return a value. */}
                    {/* Tt cannot be undefined just like if-else */}
                    <h4>Option 2:</h4>
                    {isLoggedIn ? // isLoggedIn is a Condition
                        //if true - it will run Admin Panel
                        <h2>Admin Panel</h2>
                        : // ":" is used for else
                        <h2>Login Form</h2>
                    }

                    <h4>Option 3:</h4>
                    {/* Short Circit Operator */}
                    {/* no else required for this Operator */}
                    {isLoggedIn && <h2>Admin Panel</h2>}
                </div>

                {/* Rendering lists */}
                <div className='box grid grid-flow-row gap-2 items-center'>
                    <h2 className='text-2xl font-semibold'>Rendering Lists</h2>
                    <hr className='border-2 border-blue-400 w-full' />

                    {/* Map Function always works with Array */}
                    {
                        products.map((item) => {
                            return (
                                <div key={item.id}>
                                    <li>
                                        {item.title}
                                    </li>
                                </div>
                            )
                        })
                    }
                </div>

                {/* Events and Hooks*/}
                <div className='box flex flex-col gap-2 mb-6'>
                    <h2 className='text-2xl font-semibold'>Events and Hooks </h2>
                    <hr className='border-2 border-blue-400 w-full' />
                    <span>Age: {age}</span>
                    <Button onClick={handleClick}>
                        Click Me
                    </Button>
                </div>

                <Link href={"/class6"}> <h3 className='text-white text-center bg-gray-800 border border-transparent p-3 mt-6 absolute bottom-0 left-0 w-full rounded'>Next Class </h3> </Link>
            </div>
        </div>
    )
}
