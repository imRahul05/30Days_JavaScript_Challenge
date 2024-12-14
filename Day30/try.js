function inventory(products) {
  const low = products.filter(product => product.stock < 100);
  
  const rData = low.map(product => ({ name: product.name,category: product.category,
    reorderCost: product.pricePerUnit * (100 - product.stock),
  }));

  const rCost = rData.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = 0;
    }
    acc[product.category] += product.reorderCost;
    return acc;
  }, {});

  const srCategry = Object.entries(rCost)
    .sort((a, b) => b[1] - a[1]) 
    .reduce((acc, [category, cost]) => {
      acc[category] = cost;
      return acc;
    }, {});

  return srCategry;
}
const products = [{ name: "Laptop", category: "Electronics", stock: 50, pricePerUnit: 1000 },
  { name: "Phone", category: "Electronics", stock: 150, pricePerUnit: 500 },
  { name: "T-shirt", category: "Clothing", stock: 40, pricePerUnit: 20 },
  { name: "Jeans", category: "Clothing", stock: 90, pricePerUnit: 40 },
  { name: "Watch", category: "Accessories", stock: 70, pricePerUnit: 150 },
];

const result = inventory(products);
console.log(result);
