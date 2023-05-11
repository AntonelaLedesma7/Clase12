//Hay un arreglo con varios números donde todos son iguales excepto uno. Haga una función que encuentre qué número es el distinto. findUniq([1,1,1,1,2,1,1,1]) ==> return (2)

const findUniq = (arrayOfNumbers) => {
  for(let i = 0; i < arrayOfNumbers.length; i++){
    if (arrayOfNumbers[i] !== arrayOfNumbers[i+1])
    return arrayOfNumbers[i+1]
  }
};

const numbers = [7, 7, 7, 7, 7, 9, 7, 7, 7];
console.log(findUniq(numbers));