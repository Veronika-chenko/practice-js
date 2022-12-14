// array of uniq values:
const arr = [2, 2, 8, 5, 77, 43, 5, 3, 55, 3]

const uniq = arr.filter((num, index, array) => {
    // console.log('array.indexOf(num)', array.indexOf(num))
    // console.log('current index', index)
    return array.indexOf(num) === index
})

// console.log(uniq)

