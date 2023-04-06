import Checkout from "./components/Checkout";
import "./App.css";
import PricingRules from "./components/PricingRules";
import pricingRules from "./data/pricingRules";

function App() {
  const handleItemClick = (item) => {
    console.log(`Item clicked: ${item}`);
  };

  return (
    <div className="App">
      <Checkout />
      <PricingRules onItemClick={handleItemClick} pricingRules={pricingRules} />
    </div>
  );
}

export default App;
