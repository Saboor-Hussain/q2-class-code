// Intoduction to Shadcn UI

import React from 'react'

import { ShoppingCart, ShoppingBasket, ShoppingBagIcon, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'

export default function page() {
    return (
        <div className='h-screen flex flex-col justify-center relative items-center bg-gradient-to-tl from-indigo-500 via-purple-500 to-pink-500'>
            <Link href={"/"}> <span className='text-white bg-red-500 border border-transparent p-2 text-2xl absolute top-0 left-0'> ← </span> </Link>

            {/* <Button variant={'primary'} size={'icon'}>
                <ShoppingCart />
            </Button> */}

            <Sheet>
                <SheetTrigger>
                    <Button variant={'primary'} size={'icon'}>
                        <Menu />
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetTitle>E-Commerce Website</SheetTitle>
                    <ul>
                        <li>Home</li>
                        <li>About </li>
                        <li>Contact Us</li>
                        <li>Blog</li>
                    </ul>

                    <SheetDescription className='mt-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, nisi?
                    </SheetDescription>

                    <SheetDescription className='mt-3'>
                        <Button variant={'secondary'} size={'icon'}>
                            <ShoppingBasket />
                        </Button>

                        <Button variant={'destructive'} size={'icon'} className='mx-4'>
                            <ShoppingCart />
                        </Button>

                        <Button variant={'ghost'} size={'icon'} className='mx-2'>
                            <ShoppingBagIcon />
                        </Button>
                    </SheetDescription>

                </SheetContent>
            </Sheet>
            <div>

                <Link href={"/class5"}> <h3 className='text-white text-center bg-gray-800 border border-transparent p-3 absolute bottom-0 left-0 w-full'>Next Class </h3> </Link>
            </div>
        </div>
    )
}
