// Simple Section

import Image from 'next/image'
import Link from 'next/link'
import Pic from "public/Pic.png"


export default function Home() {
  return (
    <>

    <div className='bg-cyan-200 p-6 flex'>
      <div>
        <h1 className='text-2xl font-bold underline text-white'> Portfolio</h1>
        <h1 className='text-lg font-semibold'> Syed Ali Saboor Hussain</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At unde, reprehenderit expedita nesciunt voluptate accusantium maiores dicta amet doloribus corrupti incidunt ducimus quis quam temporibus debitis nulla? Incidunt, eligendi temporibus.</p>
      </div>
      <div>
        <Image src={Pic} alt='picture' className='rounded-lg border w-48'/>
      </div>
    </div>

    <div>
     <Link href={"/class2"}> <h3 className='text-white text-center bg-gray-800 border p-3'>Next Class </h3> </Link>
    </div>
    </>
  )
}
