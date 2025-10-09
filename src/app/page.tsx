import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Brewery from "@/components/About";
import OurBeers from "@/components/Attractions";
import NowPouringAt from "@/components/NowPouringAt";
import ContactUs from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="scroll-container">
        <Hero />
        <AboutUs />
        <Brewery />
        <OurBeers />
        <NowPouringAt />
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}
