"use client"
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image'
import React from 'react'

const logoData = [
    {
        name: "ChatGPT-logo",
        src: "/logos/chatgpt-logo.png"
    },
    {
        name: "Vercel-logo",
        src: "/logos/vercel-logo.png"
    },
    {
        name: "Microsoft-logo",
        src: "/logos/microsoft-windows-logo.png"
    },
    {
        name: "Meta-logo",
        src: "/logos/meta-logo.png"
    },
    {
        name: "Github-logo",
        src: "/logos/github-official-logo.png"
    },
    {
        name: "Vercel-logo",
        src: "/logos/vercel-logo.png"
    },
    {
        name: "Microsoft-logo",
        src: "/logos/microsoft-windows-logo.png"
    },
    
]

export default function LogoSection() {
  return (
    <>
        <section className='px-30 py-10'>
            <div>
                    <Carousel 
                    opts={{
                        loop: true
                    }}
                    plugins={[
                        
                    Autoplay({
                    delay: 2000,
                    stopOnLastSnap: false,
                    stopOnInteraction: false,   
                    }),

                ]}
                    >
                        <CarouselContent>
                {logoData.map((logo, id)=>( 
                            <CarouselItem className="basis-1/5" key={id}>
                                <Image src={logo.src} width={1000} height={100} alt={logo.name} className='w-40'/>
                            </CarouselItem>
                    ))}
                        </CarouselContent>
                    </Carousel>
            </div>
        </section>
    </>
  )
}
