const SleepTab = () => {
  return (
    <div className="container hidden md:flex space-x-10 mb-6 items-center justify-center">
      <button className="bg-purple-dozewell-accent px-4 py-2 rounded-full shadow-lg text-white">
        Sleep Patterns
      </button>
      <button className="px-4 py-2 border rounded-full text-white text-white">
        Sleep Goals
      </button>
      <button className="px-4 py-2 border rounded-full text-white text-white">
        Lifestyle Factor
      </button>
      <button className="px-4 py-2 border rounded-full text-white text-white">
        Report & Score
      </button>
    </div>
  );
};

export default SleepTab;
