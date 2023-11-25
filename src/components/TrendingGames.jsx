function TrendingGames({ gameList }) {
  return (
    <div className="mt-5 hidden lg:block">
      <h2 className="font-bold text-[30px] dark:text-white"> Trending Games</h2>
      <div className=" md:grid md:grid-cols-3 gap-4 mt-5  lg:grid-cols-4">
        {gameList.map(
          (item, index) =>
            index < 4 && (
              <div
                key={item.id}
                className="bg-gray-300 dark:bg-gray-600 rounded-lg group
                hover:scale-105 transition-all ease-out duration-300 cursor-pointer"
              >
                <img
                  src={item.background_image}
                  className=" rounded-t-lg object-cover"
                />
                <h2 className="dark:text-white text-[20px] font-semibold p-2">
                  {item.name}
                </h2>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default TrendingGames;
