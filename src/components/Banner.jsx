function Banner({ gameBanner }) {
  return (
    <div className="relative hidden md:block">
      <div className="absolute bottom-0 p-5 bg-gradient-to-t from-black to-transparent w-full rounded-xl">
        <h2 className="text-[24px] text-white font-bold">{gameBanner.name}</h2>
        <button className="bg-blue-700 text-white px-2 py-1 rounded-lg">
          Get Now
        </button>
      </div>
      <img
        src={gameBanner.background_image}
        className="md:h-[300px] w-full object-cover rounded-xl "
      />
    </div>
  );
}

export default Banner;
