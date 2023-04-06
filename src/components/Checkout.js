import React from 'react'

const Checkout = () => {
    const [basket, setBasket] = useState([]);
    const [total, setTotal] = useState(0);

    const addItem = (item) => {
        setBasket([...basket, item]);
      };
    
      const removeItem = (itemIndex) => {
        const newBasket = [...basket];
        newBasket.splice(itemIndex, 1);
        setBasket(newBasket);
      };

    const handleInputChange = (event) => {
        const newItem = event.target.value.toUpperCase();
        addItem(newItem);
        event.target.value = '';
      };

    return (
        <div>
        <h2>Checkout</h2>
        <input type="text" placeholder="Enter item" onChange={handleInputChange} />
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

export default Checkout
