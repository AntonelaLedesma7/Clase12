//Dado un arreglo de números enteros, encuentre y devuelva el valor de la menor suma posible entre ellos.  minSum([7,4,2,3]) ==> return (5)

const minSum = (numbers) => {
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
};

const numbers = [4, 8, 5, 2, 1];
console.log(minSum(numbers));