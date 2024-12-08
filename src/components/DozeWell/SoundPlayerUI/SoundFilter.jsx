const SoundFilter = () => {
  return (
    <section className="px-10 py-5 container mx-auto px-3 sm:px-10 text-white">
      <div className="mx-auto flex gap-3 md:justify-between items-center w-full overflow-x-auto">
        <button className="bg-purple-dozewell-accent text-white py-4 px-6 rounded-xl w-full ">
          All
        </button>
        <button className="hover:bg-purple-dozewell-accent hover:border-0 transition duration-200 border border-white text-white py-4 px-8 rounded-xl w-full  ">
          Noise
        </button>
        <button className="hover:bg-purple-dozewell-accent hover:border-0 transition duration-200 border border-white text-white py-4 px-8 rounded-xl w-full  ">
          Waves
        </button>
        <button className="hover:bg-purple-dozewell-accent hover:border-0 transition duration-200 border border-white text-white py-4 px-8 rounded-xl w-full  ">
          Meditations
        </button>
        <button className="hover:bg-purple-dozewell-accent hover:border-0 transition duration-200 border border-white text-white py-4 px-8 rounded-xl w-full  ">
          ASMR
        </button>
        <button className="hover:bg-purple-dozewell-accent hover:border-0 transition duration-200 border border-white text-white py-4 px-8 rounded-xl w-full  ">
          Stories
        </button>
        <button className="hover:bg-purple-dozewell-accent hover:border-0 transition duration-200 border border-white text-white py-4 px-8 rounded-xl w-full  ">
          Nature
        </button>
        <button className="hover:bg-purple-dozewell-accent hover:border-0 transition duration-200 border border-white text-white py-4 px-8 rounded-xl w-full  ">
          Soundscape
        </button>
      </div>
    </section>
  );
};

export default SoundFilter;
