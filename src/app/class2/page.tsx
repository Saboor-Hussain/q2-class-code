// Flex Box Class

import Link from 'next/link'
import React from 'react'

export default function Class2() {
  return (
    <div>
      <Link href={"/"}> <span className='text-white bg-red-500 border border-transparent p-2 text-2xl'> ← </span> </Link>
      <h1 className='text-white absolute top-8 left-16 font-semibold text-xl'>Flex box</h1>
      <div className='flex flex-col sm:flex-row bg-gray-200 sm:bg-orange-200 lg:bg-blue-500 justify-evenly items-center gap-2 h-screen m-16 border-4 border-white'>
        <div className='w-40 h-40 bg-green-400 text-center '> Box 1</div>
        <div className='w-40 h-40  bg-red-400 text-center '> Box 2</div>
        <div className='w-40 h-40  bg-blue-400 text-center '> Box 3</div>
        <div className='w-40 h-40  bg-orange-400 text-center '> Box 4</div>
      </div>
      <Link href={"/class3"}> <h3 className='text-white text-center bg-gray-800 border border-transparent p-3'>Next Class </h3> </Link>
    </div>
  )
}
