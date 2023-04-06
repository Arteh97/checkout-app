import pricingRules from "../data/pricingRules";

const PricingRules = ({ onItemClick }) => {
    return (
      <div>
        <h2>Pricing Rules</h2>
        <ul>
          {Object.entries(pricingRules).map(([item, { unitPrice, specialPrice }]) => (
            <li key={item}>
              <span>{item}:</span>
              <span>{unitPrice}p</span>
              {specialPrice?.quantity ? (
                <span>
                  {specialPrice.quantity} for {specialPrice.price}
                </span>
              ) : null}
              <button onClick={() => onItemClick(item)}>Add to Basket</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  export default PricingRules;