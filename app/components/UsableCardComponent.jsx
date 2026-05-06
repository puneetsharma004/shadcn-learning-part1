import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'
import { IoMdCheckmark } from "react-icons/io";
import { LuCircleArrowOutUpRight } from 'react-icons/lu';
import { MdArrowOutward } from 'react-icons/md';
export default function UsableCardComponent() {
  return (
    <>
 <div className='grid grid-cols-12 justify-between gap-5 my-4'>
            <Card className="w-full col-span-6 text-[#262E38] text-left bg-[#FDF9EE] group">
            <CardHeader>
                <CardTitle className="text-2xl font-bold ">Basic</CardTitle>
                <h2 className='text-4xl text-primary mb-4'>₹0/month</h2>
                <CardDescription>
                <ul className='text-black'>
                    <li className='flex items-center gap-2'><IoMdCheckmark />Daily query limit</li>
                    <li className='flex items-center gap-2'><IoMdCheckmark />Standard response time</li>
                    <li className='flex items-center gap-2'><IoMdCheckmark />Access to GPT 5.5</li>
                </ul>
                </CardDescription>
            </CardHeader>
            
            <CardFooter className="flex gap-2 justify-between">
                <Link href={"#"}>
                    <Button className="p-4">
                        Sign Up Free
                    </Button>
                </Link>

                <MdArrowOutward size={50} className='cursor-pointer group-hover:scale-110 transition-all'/>
            </CardFooter>
    </Card>

    <Card className="w-full col-span-6 text-[#262E38] text-left bg-primary group">
            <CardHeader>
                <CardTitle className="text-2xl font-bold ">Basic</CardTitle>
                <h2 className='text-4xl text-[#262E38] mb-4'>₹0/month</h2>
                <CardDescription>
                <ul className='text-black'>
                    <li className='flex items-center gap-2'><IoMdCheckmark />Daily query limit</li>
                    <li className='flex items-center gap-2'><IoMdCheckmark />Standard response time</li>
                    <li className='flex items-center gap-2'><IoMdCheckmark />Access to GPT 5.5</li>
                </ul>
                </CardDescription>
            </CardHeader>
            
            <CardFooter className="flex gap-2 justify-between">
                <Link href={"#"}>
                    <Button className="p-4 bg-[#262E38] text-[#FDF9EE] hover:bg-[#262E38]/90">
                        Upgrade Now
                    </Button>
                </Link>

                <MdArrowOutward size={50} className='cursor-pointer group-hover:scale-110 transition-all'/>
            </CardFooter>
    </Card> 
 </div>
    </>
  )
}
