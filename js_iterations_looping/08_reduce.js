const myNums = [2, 4, 6];

const myTotal = myNums.reduce(
  (previousValue, currentValue, currentIndex, array) => {
    console.log(
      `Accumulator Value: ${previousValue} and Current Value: ${currentValue}`
    );
    return previousValue + currentValue;
  },
  0
); //0 given is the initial value of the previousValue(accumulator)

console.log(myTotal);

console.log("*************************************************************");

const myNewTotal = myNums.reduce((acc, curr, ind, arr) => acc + curr, 0);

console.log(myNewTotal);

console.log("*************************************************************");

const shoppingCart = [
  {
    itemName: "Js course",
    price: 2999,
  },
  {
    itemName: "Python course",
    price: 3499,
  },
  {
    itemName: "Ruby course",
    price: 3999,
  },
  {
    itemName: "Java course",
    price: 2999,
  },
  {
    itemName: "C# course",
    price: 4000,
  },
];

const priceToPay = shoppingCart.reduce((acc, item, index, arr) => {
  console.log(
    `Accumulator value: ${acc} & ${item.itemName} value: ${
      item.price
    } = Current total: ${acc + item.price}`
  );
  return acc + item.price;
}, 0);

console.log(priceToPay);
