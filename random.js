import { AnimatePresence } from 'framer-motion';
import fs from 'fs';
const data = {
  _id: '651aeb89bca4983f0b08bd55',
  owner: '651a659b65ed0c53c48a4935',
  name: 'new mama store',
  status: 'completed',
  items: [
    {
      quantity: 1,
      _id: '6514a6f7d93475cc881b000d',
      name: 'cheese',
      category: 'Diary Products',
      ownerId: null,
      __v: 0,
    },
    {
      quantity: 1,
      _id: '6514a6f7d93475cc881b000c',
      name: 'milk',
      category: 'Diary Products',
      ownerId: null,
      __v: 0,
    },
    {
      quantity: 1,
      _id: '6514a6f7d93475cc881afffc',
      name: 'avocado',
      category: 'Fruit and Vegetables',
      ownerId: null,
      __v: 0,
    },
  ],
  createdAt: '2023-10-02T16:10:49.572Z',
  updatedAt: '2023-10-02T16:10:49.572Z',
  __v: 0,
};

const wantedResult = {
  ...data,
  items: data.items.reduce((acc, curr) => {
    let ans = acc.find((i) => i.categoryName === curr.category);
    if (ans === undefined) {
      acc.push({ categoryName: curr.category, products: [{ ...curr }] });
    } else {
      let targetIndex = acc.findIndex((d) => d.categoryName === curr.category);
      acc[targetIndex] = {
        ...acc[targetIndex],
        products: [...acc[targetIndex].products, { ...curr }],
      };
    }
    return acc;
  }, []),
};
console.log(JSON.stringify(wantedResult));

fs.writeFileSync('data.json', JSON.stringify(wantedResult), 'utf-8');

let dataa = {
  name: 'beamlak',
  items: [
    {
      category: 'math',
      name: 'some_name1',
    },
    {
      category: 'math',
      name: 'some_name4',
    },
    {
      category: 'code',
      name: 'some_name2',
    },
    {
      category: 'love',
      name: 'some_name3',
    },
  ],
};
let d = [];

// dataa.items.forEach((temp) => {
//   let ans = d.find((i) => i.categoryName === temp.category);
//   if (ans === undefined) {
//     d.push({ categoryName: temp.category, products: [{ ...temp }] });
//   } else {
//     let targetIndex = d.findIndex((d) => d.categoryName === temp.category);
//     d[targetIndex] = {
//       ...d[targetIndex],
//       products: [...d[targetIndex].products, { ...temp }],
//     };
//   }
// });

// data.items.forEach((temp) => {
//   let ans = acc.find((i) => i.categoryName === temp.category);
//   if (ans === undefined) {
//     acc.push({ categoryName: temp.category, products: [{ ...temp }] });
//   } else {
//     let targetIndex = acc.findIndex((d) => d.categoryName === temp.category);
//     acc[targetIndex] = {
//       ...acc[targetIndex],
//       products: [...acc[targetIndex].products, { ...temp }],
//     };
//   }
// });
