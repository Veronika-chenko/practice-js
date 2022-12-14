import { cars } from "../cars";

// 1a
// const sortByAscendingAmount = cars => {
//     const sortedCars = [...cars].sort((prev, next) => prev.amount - next.amount)
//     return sortedCars
// };

// 1b
const sortByAscendingAmount = cars => [...cars].sort((prev, next) => prev.amount - next.amount);

// console.table(sortByAscendingAmount(cars));

// 2
const sortByDescendingPrice = cars => [...cars].sort((prev, next) => next.amount - prev.amount);

// console.table(sortByDescendingPrice(cars));


// 3a

// const sortByModel = (cars, order) => {
//     const newArray = [...cars];
//     if (order === 'asc') {
//         newArray.sort((prev, next) => prev.model.localeCompare(next.model))
//         return newArray
//     } 
//     if (order === 'desc') {
//         newArray.sort((prev, next) => next.model.localeCompare(prev.model))
//         return newArray
//     }
// }

// 3b
const sortByModel = (cars, order) => 
    [...cars].sort((prev, next) => {
        return order === 'asc'
            ? prev.model.localeCompare(next.model) 
            : next.model.localeCompare(prev.model)
    })

console.table(sortByModel(cars, 'asc'));
console.table(sortByModel(cars, 'desc'));