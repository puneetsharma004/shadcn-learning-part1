import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const menuData = [
    {
        title: "Product",
        link: "/product"
    },
    {
        title: "Feature",
        link: "/feature"
    },
    {
        title: "Pricing",
        link: "/pricing"
    },
    {
        title: "Learn",
        link: "/learn"
    }
]

export default function Header() {
  return (
    <>
        <header className='px-30 py-5 bg-[#FDF9EE]'>
            <div className='flex justify-between items-center'>
                <div>
                    <Image src='/Scholarly_AI_logo.png' className='w-50' width={1000} height={100} alt='n'/>
                </div>
                <div>
                    <ul >
                        {menuData.map((nav, id)=>(    
                            <Link href={nav.link} key={id}>
                                <Button variant='link' size="lg" className="text-black uppercase">{nav.title}</Button>
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className='flex gap-4'>
                    <Button variant='outline' size="lg" className="uppercase">Login</Button>
                    <Button size="lg" className="uppercase">Register</Button>
                </div>
            </div>
        </header>  
    </>
  )
}
