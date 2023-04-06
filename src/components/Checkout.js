import { useState } from "react";
import React from "react";
import { calculateTotal } from "../utils/calculateTotal";

const Checkout = ({ pricingRules }) => {
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(null);

  const addItem = (item) => {
    const itemExists = pricingRules.hasOwnProperty(item);
    if (itemExists) {
      setBasket([...basket, item]);
      setTotal(calculateTotal([...basket, item], pricingRules));
      setError(null);
    } else {
      setError(`Invalid item: ${item}`);
    }
  };

  const removeItem = (itemIndex) => {
    const newBasket = [...basket];
    newBasket.splice(itemIndex, 1);
    setBasket(newBasket);
    setTotal(calculateTotal(newBasket, pricingRules));
  };

  return (
    <div>
      <h2>Checkout</h2>
      <div>
        <h3>Basket</h3>
        <ul>
          {basket.map((item, index) => (
            <li key={index}>
              {item} <button onClick={() => removeItem(index)}>Remove</button>
            </li>
          ))}
        </ul>
        <p>Total: {total}</p>
      </div>
    </div>
  );
};

export default Checkout;
