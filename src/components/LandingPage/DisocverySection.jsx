import { sliderData } from "../../data/data";

import Slider from "./Slider";
import { useEffect, useRef, useState } from "react";

const DiscoverySection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to handle video autoplay when in view
  const handleIntersection = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting && videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Set up Intersection Observer for autoplay
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Play when 50% of the video is in view
    });
    if (videoRef.current) observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  // Toggle play/pause on button click
  const handlePlayButtonClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying((prev) => !prev);
    }
  };

  return (
    <section id="features" className="pt-20 text-white container mx-auto">
      {/* Heading and Description */}
      <div className="space-y-4 text-center sm:text-left">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
          Discover the Secret to a Restful Night: Why DozeWell Is Your Best
          Choice
        </h1>
        <p className="font-light text-sm sm:text-base opacity-75">
          Our app uses cutting-edge technology to track and analyze your sleep
          patterns, offering insights and recommendations based on real data.
        </p>
      </div>

      {/* Slider Section */}
      <div className="z-10">
        <Slider slides={sliderData} />
      </div>

      {/* Video Section */}
      <section className="md:py-20 py-10 relative">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
          Achieve better sleep and a healthier lifestyle with our app.
        </h1>
        <h2 className="md:my-3 my-2 font-light text-sm sm:text-base opacity-75">
          Start your journey to restful nights and vibrant days today.
        </h2>

        <main className="pt-6 flex flex-col lg:flex-row gap-10 items-center">
          {/* Video Element */}
          <div className="relative flex-1 max-w-full rounded-lg">
            <video
              ref={videoRef}
              className="w-full h-auto object-cover rounded-lg"
              controls={false} // Hide default controls
              muted
              loop
            >
              <source src="" type="video" />
              Your browser does not support the video tag.
            </video>

            {/* Purple Play Button */}
            {!isPlaying && (
              <button
                onClick={handlePlayButtonClick}
                className="absolute inset-0 flex items-center justify-center bg-purple-dozewell text-white w-16 h-16 rounded-full text-2xl"
              >
                ▶
              </button>
            )}
          </div>

          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <h1 className="discover__header font-bold text-lg sm:text-xl">
              Optimize Your Sleep with Smart Tracking
            </h1>
            <p className="p__text text-sm leading-8">
              A sleep management app tracks your sleep patterns using sensors or
              wearable devices, analyzes the data to provide personalized
              insights and reports, offers tips and relaxation aids like white
              noise or meditations, and integrates with other devices to help
              you improve your sleep quality and achieve your sleep goals.
            </p>
            <button className="bg-purple-dozewell text-white px-8 py-4 rounded-md">
              How it works
            </button>
          </div>
        </main>
      </section>
    </section>
  );
};

export default DiscoverySection;
