import { Button } from '@/components/ui/button'
import React from 'react'

export default function CTA() {
  return (
    <>
        <section className='px-8 py-30 md:px-16 lg:px-32 '>
            <div className='h-[50vh]  bg-[#634306] rounded-2xl text-[#FDF9EE] px-20 flex items-center justify-between'>
                <div className='text-center bg-amber-50/20 rounded-e-full p-10 rounded-t-2xl pr-20'>
                    <h1 className="scroll-m-20 font-extrabold tracking-tight text-left text-balance text-4xl">
                    Ready to Elevate Your <br /> Academic Journey?
                    </h1>
                    <p className='text-lg mt-4 font-medium text-left '>
                        Join us today and experience the future of <br />learning with our advanced AI chat. <br />
                        Sign up now and unlock your full potential!
                    </p>
                </div>
                <div className='flex gap-8'>
                    <Button className={"text-xl p-6 font-semibold uppercase text-[#262E38]"}>Get Started Now</Button>
                    <Button className={"text-xl p-6 font-semibold uppercase bg-[#DBD8D3] text-[#262E38] hover:bg-[#b3b0ab]"}>Learn More</Button>
                    
                </div>
            </div>
        </section>
    </>
  )
}
