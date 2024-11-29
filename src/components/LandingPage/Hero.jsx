import Header from "./Header";
import ImageSlider from "./ImageSlider";

const Hero = () => {
  return (
    <section className="relative h-screen bg-hero">
      {/* Floating Header */}
      <div className="absolute top-6 left-0 right-0 mx-auto px-10">
        <Header />
      </div>

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center h-full px-6 sm:px-20 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row items-center justify-center w-full">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl sm:text-4xl font-bold text-white">
              Unlock the Power of Restful Sleep
            </h1>
            <p className="text-white text-sm sm:text-base opacity-75">
              Track, Improve, and Master Your Sleep Patterns
            </p>
          </div>
          <div className="hero__image flex-1 mt-16">
            <ImageSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
