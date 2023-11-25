import React from "react";

const Card = ({ gameList }) => {
  return (
    <div className="grid grid-cols 1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
      {gameList.map((item) => (
        <div
          key={item.id}
          className="bg-gray-300 dark:bg-gray-600 rounded-lg p-3 min-h-[420px] hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer"
        >
          <img
            src={item.background_image}
            className="w-full h-[80%] rounded-xl object-cover"
          />
          <h2 className="text-[20px] dark:text-white font-semibold ">
            {item.name}
            <span className="p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-800 font-medium ">
              {item.metacritic}
            </span>
          </h2>
          <h2 className="dark:text-gray-200">
            ⭐{item.rating} 💬{item.reviews_count} 🔥{item.suggestions_count}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Card;
