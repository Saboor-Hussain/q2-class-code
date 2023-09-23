// Grid Box Class

import React from 'react'
import Pic from '/public/next.svg'
import Link from 'next/link'

export default function page() {
  return (
    // Grid Col
    // <div className='grid min-h-screen grid-cols-[1fr,auto]'>
    //     <div className='bg-red-500 '>Sidebar</div>
    //     <div className='bg-green-300'>lorem*50</div>
    //     {/* <div className='bg-blue-300'>3</div> */}
    // </div>


    // // Grid Row
    // <div className='h-screen grid grid-rows-[auto,1fr,auto]'>
    //   <div className='bg-red-500 h-20'>Header</div>
    //   <div className='bg-green-300'>Main</div>
    //   <div className='bg-blue-600 h-20'>Footer</div>
    // </div>


    // Grid Gap Col,Row Task
    // <div className='grid h-screen grid-cols-[300px,1fr]'>
    //     <div className='grid grid-rows-2 gap-y-4'>
    //       <div className='bg-red-500'> 1</div>
    //       <div className='bg-green-500'> 2</div>
    //     </div>
    //     <div className='bg-yellow-500'>3</div>
    // </div>

    // <div className='grid grid-cols-2'>
    //   <div className='bg-red-500 '>1</div>
    //   <div className='bg-green-500 row-span-2'>2</div>
    //   <div className='bg-blue-500'>3</div>
    // </div>




    // task - 1
    <div className='p-10'>
      <h1 className='text-white absolute top-2 left-16 font-semibold text-xl'>Grid box</h1>
      <div className='grid h-screen grid-rows-[auto,1fr,auto]'>
        <div className='bg-green-700 h-32 flex text-4xl text-white font-semibold justify-center items-center'>
          <Link href={"/class2"}> <span className='text-white bg-red-500 border border-transparent p-2 absolute left-0 top-0 text-2xl'> ← </span> </Link>
          Header
        </div>
        <div className='grid grid-cols-[auto,1fr]'>
          {/* Sidebar */}
          <div className='bg-blue-700 w-16 sm:w-64 flex text-xl sm:text-4xl text-white font-semibold justify-center items-center'> Sidebar</div>
          {/* Content */}
          <div className='bg-blue-500 flex text-4xl text-white font-semibold justify-center items-center'> Content</div>
        </div>
        <div className='bg-green-600 h-24 flex flex-col gap-y-1 text-4xl text-white font-semibold justify-center items-center'> Footer </div>

      </div>
      <Link href={"/class4"} className='absolute -bottom-30 left-[45%]'> <h3 className='text-white text-center text-xl bg-gray-800 border border-transparent p-3'>Next Class </h3> </Link>
    </div>

  )
}
