"use client"
import React, { useContext } from 'react'
import { CountContext } from '@/app/layout'

export default function UseContext() {
    const count = useContext(CountContext)
  return (
    <div>
        <h1 className='text-white text-4xl'> {count} </h1>
    </div>
  )
}
