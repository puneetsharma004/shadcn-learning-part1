import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoSection from "./components/LogoSection";
import Payment from "./components/Payment";

export default function Home() {
  return (
    <>
    <div className="relative">
      <Header/>
      <Hero/>
      <LogoSection/>
      <Payment/>
    </div>
    </>
  );
}

