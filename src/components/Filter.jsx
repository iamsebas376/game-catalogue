import React, { useEffect, useState } from "react";
import GlobalApi from "../services/GlobalApi";

function Filter({ genreId, selectedGenresName }) {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    getGenres();
  }, []);

  const getGenres = async () => {
    try {
      const response = await GlobalApi.getGenreList;
      setGenreList(response.data.results);
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  };

  return (
    <div className="mr-4 grid justify-center w-80% ">
      <h2 className="text-[30px] font-bold dark:text-white">Genre</h2>
      {genreList.map((item, index) => (
        <div
          key={item.id}
          onClick={() => {
            setActiveIndex(index);
            genreId(item.id);
            selectedGenresName(item.name);
          }}
          className={`flex gap-2 w-80% sm:min-w-[400px] md:min-w-[190px] items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 group rounded-lg dark:hover:bg-gray-600
          ${activeIndex == index ? "bg-gray-300 dark:bg-gray-600" : null}`}
        >
          <img
            src={item.image_background}
            className={`w-[60px] h-[40px] object-cover rounded-lg group-hover:scale-110 transition-all ease-out duration-300 mr-2 
            ${activeIndex == index ? "scale-110" : null}`}
          />
          <h3
            className={`dark:text-white text-[18px] group-hover:font-semibold group-hover:scale-110 transition-all ease-out duration-300
          ${activeIndex == index ? "font-semibold" : null}`}
          >
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default Filter;
