import { useState } from "react";

const ShopCart = () => {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "prod 1", quantity: 1 },
      { id: 2, title: "prod 2", quantity: 1 },
    ],
  });

  const handleQuantiyClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1
          ? { ...item, quantity: item.quantity + 1 }
          : { ...item, quantity: item.quantity + 5 }
      ),
    });
  };

  return (
    <div>
      <h1>cart</h1>
      <button className="btn btn-primary" onClick={handleQuantiyClick}>
        Add Quantity
      </button>
    </div>
  );
};

export default ShopCart;
