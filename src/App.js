import Checkout from "./components/Checkout";
import "./App.css";
import PricingRules from "./components/PricingRules";

function App() {
  const handleItemClick = (item) => {
    console.log(`Item clicked: ${item}`);
  };

  return (
    <div className="App">
      <Checkout />
      <PricingRules onItemClick={handleItemClick} />
    </div>
  );
}

export default App;
