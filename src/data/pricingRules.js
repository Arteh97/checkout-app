// data/pricingRules.js

const pricingRules = {
  A: {
    unitPrice: 50,
    specialPrice: {
      quantity: 3,
      price: 130,
    },
  },
  B: {
    unitPrice: 30,
    specialPrice: {
      quantity: 2,
      price: 45,
    },
  },
  C: {
    unitPrice: 20,
    specialPrice: null,
  },
  D: {
    unitPrice: 15,
    specialPrice: null,
  },
};

export default pricingRules;
