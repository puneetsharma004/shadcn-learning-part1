import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui/input-group'
import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <>
        <section className='h-[90vh] bg-[#FDF9EE] px-30 '>
            <div className='flex items-center justify-between'>
                <div className='text-left '>
                    <div className='text-6xl'>
                        <h1 className="scroll-m-20 font-extrabold tracking-tight text-balance">
                        The Al Sidekick for
                        </h1>
                        <h1 className="scroll-m-20 font-extrabold tracking-tight text-balance">
                        Your Academic
                        </h1>
                        <h1 className="scroll-m-20 font-extrabold tracking-tight text-balance">
                        Success
                        </h1>
                    </div>
                    <p className='text-lg mt-4 font-medium'>
                        Boost your leaming with advanced Al chat. <br />
                        Summarize, code, and create in seconds.
                    </p>
                    <div className='w-[60%] mt-4'>
                        <InputGroup className="h-10">
                            <InputGroupInput placeholder="Enter Your College Email" />
                            <InputGroupAddon align="inline-end">
                            <InputGroupButton variant="secondary" className="bg-primary text-primary-foreground rounded-sm p-4">Get Started</InputGroupButton>
                            </InputGroupAddon>
                        </InputGroup>
                    </div>
                </div>

                <div>
                    <Image src="/hero.png" className='w-[600px]' width={10000} height={1000} alt='hero-image'/>
                </div>
            </div>
        </section>
    </>
  )
}
