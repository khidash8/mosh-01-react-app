import { useState } from "react";

const Pizzas = () => {
  const [pizzas, setPizzas] = useState({
    id: 1,
    name: "spicy pepperony",
    toppings: ["peperoni"],
  });

  const { name, toppings } = pizzas;

  const handlePizzaClick = () => {
    setPizzas({
      ...pizzas,
      toppings: [...pizzas.toppings, "veggies", "pineapple"],
    });
  };

  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {toppings.map((pizza) => (
          <li key={pizza}>{pizza}</li>
        ))}
      </ul>
      <button onClick={handlePizzaClick}>Add Pizzas</button>
    </div>
  );
};

export default Pizzas;
