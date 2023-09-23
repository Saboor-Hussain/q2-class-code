"use client"
import React, { useState } from 'react'
import Button from './Button'

export default function page() {
    const [count, setCount] = useState<number>(1);

  return (
    <div className='myColor3 h-screen flex justify-center items-center gap-4'>
        {/* Use State Button */}
        {/* <Button/>     */}

        {/* Props Buttons */}
        <Button count={count} setCount={setCount} name={"Increament"} />
        <Button count={count} setCount={setCount} name={"Decreament"}/>
    </div>
  )
}
