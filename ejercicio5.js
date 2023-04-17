//Hay un arreglo con varios números donde todos son iguales excepto uno. Haga una función que encuentre qué número es el distinto. findUniq([1,1,1,1,2,1,1,1]) ==> return (2)

const findUniq = array => {
    const number = array.find(number => number != 1)
    return console.log(number)
}

findUniq([1,1,1,1,2,1,1,1])
