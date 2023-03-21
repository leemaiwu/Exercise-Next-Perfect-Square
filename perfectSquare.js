
function perfectSquare(num) {
    let squareRoot = Math.sqrt(num)
    if(Math.round(squareRoot) !== squareRoot) {
        return -1
    }
    squareRoot += 1
    squareRoot *= squareRoot
    return squareRoot
}

console.log(perfectSquare(3000))