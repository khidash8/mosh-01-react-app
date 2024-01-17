import { useState } from "react";

const SetGame = () => {
  const [game, setGame] = useState({
    id: 1,
    person: {
      name: "john",
      age: 20,
    },
  });

  const handleClick = () => {
    setGame({
      ...game,
      person: {
        ...game.person,
        name: "jane",
        age: 21,
      },
    });
  };

  return (
    <div>
      <h1>
        {game.person.name} : {game.person.age}
      </h1>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default SetGame;
