import { useId } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import UsableCardComponent from "./UsableCardComponent"

export default function Why() {
  return (
    <section className="px-8 pt-30 md:px-16 lg:px-32">
      <div className="text-center">
        <h4 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Why Choose Us
        </h4>
        <h2 className="mt-4 mb-10 scroll-m-20 text-4xl font-semibold tracking-tight">
          Empowering Your Coding Journey with AI
        </h2>
        <WhyUsSection />
        <WhyCards />
      </div>
    </section>
  )
}

function WhyUsSection() {
  const gradientId = useId() // ✅ unique per instance — no DOM conflicts

  return (
    <div className="mx-auto py-10">
      <div className="grid gap-6 md:grid-cols-2">

        {/* LEFT CARD — using shadcn Card */}
        <Card className="rounded-3xl bg-[#F8F1DD] border-none shadow-none h-[40vh]">
          <CardContent className="p-8 text-left">
            <p className="text-7xl font-bold text-[#B8860B]">50k+</p>
            <p className="mt-6 max-w-md text-xl leading-relaxed text-foreground">
              Active students already accelerating their studies with Scholarly AI.
            </p>
          </CardContent>
        </Card>

        {/* RIGHT CARD — using shadcn Card */}
        <Card className="relative overflow-hidden rounded-3xl bg-[#FCFAF3] border-none shadow-none h-[40vh]">
          <CardContent className="p-8 text-left">
            <h3 className="scroll-m-20 text-5xl font-semibold tracking-tight">
              AI processing speed
            </h3>
            <p className="mt-6 text-xl text-muted-foreground">
              Results in milliseconds
            </p>

            {/* GRAPH */}
            <div className="mt-10">
              <svg
                viewBox="0 0 500 220"
                className="h-[10vh] w-full"
                preserveAspectRatio="none"
                aria-hidden="true" // decorative SVG — hide from screen readers
              >
                <defs>
                  <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%"   stopColor="#E4C26A" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#E4C26A" stopOpacity="0" />
                  </linearGradient>
                </defs>

                <path
                  d="M0 170 C70 130,120 80,190 95 C260 110,320 120,390 65 C430 35,465 20,500 5 L500 220 L0 220 Z"
                  fill={`url(#${gradientId})`}
                />
                <path
                  d="M0 170 C70 130,120 80,190 95 C260 110,320 120,390 65 C430 35,465 20,500 5"
                  fill="none"
                  stroke="#C89B2B"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}

let cardData = [
  {
    title: "Ask Anything",
    description: "Get instant answers to your coding questions, from syntax to best practices."
  },
  {
    title: "Get Instant Answers",
    description: "Receive immediate assistance with your coding queries."
  },
  {
    title: "Create and Learn",
    description: "Unlock your creativity and enhance your learning with our AI-powered coding assistant."
  }
];

function WhyCards() {
  return (
    <>
        <section className="">
            <div className="bg-[#634306] py-4 rounded-3xl ">
                 <h1 className="scroll-m-20 text-left mb-8  px-5 text-[#FDF9EE] text-5xl font-normal tracking-tight text-balance">
                    Maximize your returns with a <br />
Reserve account that generates.
                    </h1>
            <div className="flex justify-between text-left">

                    {cardData.map((card, index) => (
                        <Card key={index} className="mx-auto w-full max-w-sm bg-[#FDF9EE]/20 text-[#FDF9EE] mb-4">
                                <CardHeader>
                                    <CardTitle className="text-6xl font-bold bg-linear-to-b from-[#FDF9EE] to-[#ffffff]/20 bg-clip-text text-transparent">{index+1}</CardTitle>
                                    <CardTitle className="text-2xl! font-bold">{card.title}</CardTitle>
                                    <p className="mt-4">
                                        {card.description}
                                    </p>
                                </CardHeader>
                        </Card>
                    ))}
            </div>
            <div className="px-5 ">

            </div>
            </div>
        </section>
                    <UsableCardComponent/>
    </>
  )
}
