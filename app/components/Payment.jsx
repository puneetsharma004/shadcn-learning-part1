import React from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { LuBrain } from "react-icons/lu";
import { IoTimerOutline } from "react-icons/io5";
import { TbBulb } from 'react-icons/tb';


const paymentCardData = [
    {
        title: "Code Mastery",
        description: "Analyse and generate code in Python, java and more.",
        icon: <LuBrain size={80} className='text-primary'/>
    },
    {
        title: "Instant Summaries",
        description: "Get concise summaries of complex topics in seconds.",
        icon: <IoTimerOutline size={80} className='text-primary'/>
    },
    {
        title: "Creative Flow",
        description: "Unlock your creativity with our AI-powered coding assistant.",
        icon: <TbBulb size={80} className='text-primary'/>
    },
];

export default function Payment() {
  return (
    <>
        <section className='px-30 pt-30'>
            <div className='text-center'>
                <h4 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Featured Payement
                </h4>
                <h2 className="scroll-m-20 border-b pb-2 text-4xl font-semibold tracking-tight first:mt-0 my-5">
                Tools that grow with your knowledge
                </h2>
                <div className='text-left flex py-10'>
                    {paymentCardData.map((card, index) => (
                        <Card size="sm" className="mx-auto w-full max-w-sm bg-[#FDF9EE] mb-4" key={index}>
                            <CardHeader>
                                {card.icon}
                                <CardTitle className="text-2xl! font-bold">{card.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className='text-lg'>
                                    {card.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}
