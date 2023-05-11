//Dado un arreglo de números enteros, encuentre el mayor producto posible entre dos números adyacentes y devuelva el valor de dicho producto. adjacentElementsProduct([9,5,10,2,24,-1]) ==> return (50)   5 * 10 = 50

const adjacentElementsProduct = (numbers) => {
  let maxProductOfAdjacent = 0
  for (let i = 0; i < numbers.length - 1; i++) {
    let product = numbers[i] * numbers[i+1];
    if (product > maxProductOfAdjacent) {
      maxProductOfAdjacent = product;
    }
  }; 
  return maxProductOfAdjacent;
}

console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1]));
