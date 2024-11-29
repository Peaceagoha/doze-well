const Newsletter = () => {
  return (
    <section className="py-10">
      <div className="bg-purple-dozewell container mx-auto px-6 py-10 sm:px-12 md:px-20 lg:py-24 text-white space-y-6 shadow-lg">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center md:text-left">
          Subscribe to Our Newsletter
        </h1>
        <p className="text-base sm:text-lg text-gray-200 text-center md:text-left">
          Get the latest updates, insights, and tips straight to your inbox.
        </p>
        <div className="flex lg:flex-row items-center">
          <input
            className="flex-grow px-6 py-4 text-black text-base sm:text-lg border-0 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            type="email"
            placeholder="Enter your email"
            style={{ borderRadius: "10px 0 0 10px" }}
          />
          <button
            className="bg-bg-primary text-white font-semibold text-base sm:text-lg px-6 py-4 md:w-auto hover:bg-purple-700 transition duration-300"
            style={{ borderRadius: "0 10px 10px 0" }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
