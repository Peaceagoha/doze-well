import { sliderData } from "../../data/data";
import video from "../../assets/video.png";
import Slider from "./Slider";

const DiscoverySection = () => {
  return (
    <section className="bg-[#0A1334]">
      <section className="py-20 text-white container mx-auto px-5 sm:px-10">
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
        <section className="md:py-20 py-10">
          <h1 className="text-base md:text-lg lg:text-xl text-center md:text-left md:w-4/5 mx-auto ">
            Achieve better sleep and a healthier lifestyle with our app. Start
            your journey to restful nights and vibrant days today.
          </h1>

          <main className="pt-6 flex flex-col lg:flex-row gap-10 items-center">
            {/* Video Image */}
            <img
              src={video}
              className="flex-1 max-w-full object-cover rounded-lg"
              alt="Sleep video"
            />

            {/* Text Content */}
            <div className="flex-1 space-y-6">
              <h1 className="discover__header font-bold text-lg sm:text-xl">
                Optimize Your Sleep with Smart Tracking
              </h1>
              <p className="p__text text-sm leading-8">
                A sleep management app tracks your sleep patterns using sensors
                or wearable devices, analyzes the data to provide personalized
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
    </section>
  );
};

export default DiscoverySection;
