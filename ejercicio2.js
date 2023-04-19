//Haga una función que solo reciba arreglos con más de 5 elementos y luego elimine los últimos 3. En caso de recibir un arreglo de menos de 5 elementos, mostrar en pantalla un mensaje de error.

const deleteLastThreeElements = (array) => { 
    if (array.length < 5 ){
        console.log("ERROR! : El array debe tener 5 o más elementos")
        return
    }

    array.pop()
    array.pop()
    array.pop()
    console.log(array)
}

const array1 = [ 1, 3, 5, 7, 9, 23, 28]

deleteLastThreeElements(array1)

const array2 = ["pepito", "manito", "cosito", "osito"]

deleteLastThreeElements(array2)