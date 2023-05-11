//Haga una función que reciba un número y devuelva un arreglo que tenga el tamaño del número recibido. El contenido del arreglo deben ser números desde el 1 hasta el número recibido. (1 a n)

const createArray = (number) => {
    const newArray = Array(number).fill(0)
    return newArray.map((n,index) => index + 1)
}
console.log(createArray (8))