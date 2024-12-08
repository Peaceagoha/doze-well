import { featuresData } from "../../data/data";

const Features = () => {
  return (
    <section
      id="how-it-works"
      className="text-white px-6 py-10 sm:px-20 sm:py-24 bg-purple-dark-dozewell sm:bg-purple-dark-dozewell relative"
    >
      {/* Section Header */}
      <h1 className="text-base md:text-xl font-normal text-center max-w-4xl mx-auto">
        Experience these benefits and more with our innovative sleep improvement
        app—where better sleep leads to a better you
      </h1>

      {/* Features Main Content */}
      <main className="flex flex-col sm:flex-row gap-16 sm:gap-8 pt-20 px-6 sm:px-12 max-w-6xl mx-auto md:gap-6">
        {featuresData.map((feature, i) => (
          <div
            key={i}
            className="flex-1 flex flex-col items-center text-center sm:items-start sm:text-left gap-4 max-w-xs sm:max-w-md md:max-w-lg md:gap-3"
          >
            {/* Feature Image */}
            <img
              className="w-48 h-48 self-center animate-breathing"
              src={feature.image}
              alt="feature-img"
            />

            {/* Feature Title */}
            <h1 className="text-lg opacity-80 font-bold md:w-19 md:text-[14px] text-purple-dozewell">
              {feature.title}
            </h1>
            {/* Feature Description */}
            <p className="text-sm font-light leading-7 opacity-90">
              {feature.body}
            </p>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Features;
