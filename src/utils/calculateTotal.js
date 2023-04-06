export const calculateTotal = (basket, pricingRules) => {
  const itemCounts = basket.reduce((counts, item) => {
    counts[item] = (counts[item] || 0) + 1;
    return counts;
  }, {});

  const totalPrice = Object.entries(itemCounts).reduce(
    (total, [item, count]) => {
      const { unitPrice, specialPrice: sp } = pricingRules[item];
      const specialPriceQuantity = sp?.quantity || 0;
      const specialPricePrice = sp?.price || unitPrice;
      const normalPriceItemCount = count % specialPriceQuantity;
      const specialPriceItemCount =
        (count - normalPriceItemCount) / specialPriceQuantity;
      const normalPrice = normalPriceItemCount * unitPrice;
      const specialPrice = specialPriceItemCount * specialPricePrice;
      return total + normalPrice + specialPrice;
    },
    0
  );

  return totalPrice;
};
