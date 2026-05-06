import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoSection from "./components/LogoSection";
import Payment from "./components/Payment";
import Why from "./components/Why";

export default function Home() {
  return (
    <>
    <div className="relative">
      <Header/>
      <Hero/>
      <LogoSection/>
      <Payment/>
      <Why/>
      <CTA/>
      <Footer/>
    </div>
    </>
  );
}

