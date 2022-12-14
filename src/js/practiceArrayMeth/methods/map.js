import { cars } from '../cars';

// -------------#1 get array of models------------------
const getModels = cars => cars.map(car => car.model)
console.log(getModels(cars));


// -------------#2 makeCarsWithDiscount--------------------

// 2a
// const makeCarsWithDiscount = (cars, discount) => {
//     return cars.map(car => {
//         const carCope = {...car}
//         const newPrice = Math.floor(car.price - (car.price * discount))
//         carCope.price = newPrice;
//         return carCope;
//     })
// }

// 2b
// const makeCarsWithDiscount = (cars, discount) => {
//     return cars.map(({ price, ...car }) => {
//         // console.log(car) // it will be obj without price 
//         return {
//             ...car,
//         price: Math.floor(car.price - (car.price * discount)) }
//     })
// }

// 2c
const makeCarsWithDiscount = (cars, discount) =>
    cars.map(({ price, ...car }) => ({
        ...car,
        price: Math.floor(car.price - (car.price * discount))
}))



console.log('array with discount:', makeCarsWithDiscount(cars, 0.2));
// console.log(makeCarsWithDiscount(cars, 0.4));


// for cheking:
// const carsWithDiscount = makeCarsWithDiscount(cars, 0.2)
// console.log(carsWithDiscount[0] === cars[0])