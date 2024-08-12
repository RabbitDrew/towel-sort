
// You should implement your task here.
module.exports = function towelSort (matrix) {
    let result = []
    if (matrix === undefined || matrix.length === 0) {
        return result
    }else {
        matrix.forEach((arrOfInt, i) => {
            if (i%2 === 0) {
                arrOfInt.sort((a,b) => a-b)
            }else {
                arrOfInt.sort((a,b)=> b-a)
            }
        })
        result = matrix.flat()
    }
 

   return result
}


