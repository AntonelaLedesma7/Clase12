//Haga una función que elimine el primer elemento del arreglo.
const array = [20, 21, 23, 34]

console.log(array)

const deleteFirstElement = (array) => {
    array.shift()
    return array
}
deleteFirstElement(array)
console.log(array)