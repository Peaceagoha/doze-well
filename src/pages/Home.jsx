import { useEffect, useState } from "react";
import Preloader from "../components/Loader";
import Hero from "../components/LandingPage/Hero";
import DisocverySection from "../components/LandingPage/DisocverySection";
import Comments from "../components/LandingPage/Comments";
import Features from "../components/LandingPage/Features";
import Subscription from "../components/LandingPage/Subscription";
import FAQ from "../components/LandingPage/FAQ";
import Newsletter from "../components/LandingPage/Newsletter";
import Footer from "../components/LandingPage/Footer";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="font-primary">
          <div className=" bg-bg-primary bg-opacity-80">
            <Hero />
            <div className="bg-[#0A1334]">
              <DisocverySection />
              <Comments />
              <Features />
              <Subscription />
              <FAQ />
              <Newsletter />
            </div>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
