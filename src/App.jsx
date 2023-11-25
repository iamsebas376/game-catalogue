import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./context/ThemeContext";
import Filter from "./components/Filter";
import GlobalApi from "./services/GlobalApi";
import Banner from "./components/Banner";
import TrendingGames from "./components/TrendingGames";
import GamesByGenresId from "./components/GamesByGenresId";
import Card from "./components/Card";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [AllGamesList, setAllGameList] = useState([]);
  const [gameListByGenres, setGameListByGenres] = useState([]);
  const [selectedGenresName, setSelectedGenresName] = useState("Action");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const getAllGamesList = async () => {
    try {
      const response = await GlobalApi.getAllGames;
      setAllGameList(response.data.results);
    } catch (error) {
      console.error("Error fetching games:", error);
    }
  };

  const getGameListByGenresId = async (id) => {
    try {
      const response = await GlobalApi.getGameListByGenreId(id);
      setGameListByGenres(response.data.results);
    } catch (error) {
      console.error("Error fetching games:", error);
    }
  };

  const searchGamesByTerm = async () => {
    try {
      const response = await GlobalApi.searchGames(searchTerm);
      setSearchResult(response.data.results);
    } catch (error) {
      console.error("Error searching games:", error);
    }
  };

  const handleEscapeKey = (event) => {
    if (event.key === "Escape") {
      setSearchTerm("");
      setSearchResult(null);
    }
  };

  useEffect(() => {
    setTheme(localStorage.getItem("theme"));
    getAllGamesList();
    getGameListByGenresId(4);
    if (searchTerm !== "") {
      searchGamesByTerm();
    }

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [searchTerm]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`${theme} 
        ${theme === "dark" ? "bg-[#0e1621]" : null} min-h-[100vh]`}
      >
        <Navbar setSearchTerm={setSearchTerm} />
        <div className="grid grid-cols-4 px-5">
          {searchResult ? null : (
            <div className="col-span-4 sm:col-span-4 md:col-span-1">
              <Filter
                genreId={(genreId) => getGameListByGenresId(genreId)}
                selectedGenresName={(name) => setSelectedGenresName(name)}
              />
            </div>
          )}
          <div className="col-span-4 md:col-span-3">
            {searchResult ? (
              <Card gameList={searchResult} />
            ) : AllGamesList?.length > 0 ? (
              <div>
                <Banner
                  gameBanner={
                    AllGamesList[
                      Math.floor(Math.random() * AllGamesList.length)
                    ]
                  }
                />
                <TrendingGames gameList={AllGamesList} />
                <GamesByGenresId
                  gameList={gameListByGenres}
                  selectedGenresName={selectedGenresName}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
