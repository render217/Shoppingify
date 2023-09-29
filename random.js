const data = [
  {
    categoryName: 'name1',
    products: [
      { name: '1', quantity: 2 },
      { name: 'yo yo', quantity: 10 },
    ],
  },
  { categoryName: 'name2', products: [{ name: '2', quantity: 1 }] },
];

const newD = { category: 'name3', name: 'yo yo' };

const total = data.reduce((acc, curr) => {
  curr.products.forEach((item) => {
    acc = acc + item.quantity;
  });
  return acc;
}, 0);

console.log(total);
