import React from "react";

function Item({ name, category }) { 

  const handleClick = () => {
    setInCart(true);
  };
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add"onClick={handleClick}>Add to Cart</button>
    </li>
  );
}

export default Item;