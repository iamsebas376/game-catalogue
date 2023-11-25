import Card from "./Card";

function GamesByGenresId({ gameList, selectedGenresName }) {
  return (
    <div>
      <h2 className="font-bold text-[30px] dark:text-white mt-5">
        {selectedGenresName} Games
      </h2>
      <Card gameList={gameList} />
    </div>
  );
}

export default GamesByGenresId;
