//Haga una función que reciba un arreglo y un número. Tenemos que sumarle dicho número a cada elemento del arreglo y devolver el arreglo modificado.

const modifyArrayOfNumbers = (array , number) => {
    let modifiedArrayOfNumbers = array.map(function(array) {
        return array + number
    })
    return console.log(modifiedArrayOfNumbers)
}

const arrayOfNumbers = [ 3, 5, 7, 37, 45, 99]

console.log(arrayOfNumbers)

modifyArrayOfNumbers(arrayOfNumbers, 1)