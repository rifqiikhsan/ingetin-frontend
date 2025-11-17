import Contact from "./components/contacts";
import Features from "./components/features";
import Hero from "./components/hero";
import HowItWorks from "./components/how-it-works";
import Pricing from "./components/pricing";

export default function Home() {
  return (
    <div className="pt-20">
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Contact />
    </div>
  );
}
