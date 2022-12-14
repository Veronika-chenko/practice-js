import { cars } from "../cars";
// Note: useful for converting an array to an object

// 1a
// const getTotalAmount = cars => {
//     const totalAmount = cars.reduce((acc, car, index) => {
//         return acc += car.amount
//     }, 0)
//     return totalAmount
// };

// 1b
const getTotalAmount = cars => cars.reduce((acc, car) => acc += car.amount, 0);

// console.log(getTotalAmount(cars));


// convert to obj of obj
// -------------------------------------------
// *for dynamic data for key
const carsObjByModel = {}

for (let car of cars) {
    const { model } = car;
    carsObjByModel[model] = {...car}
}

console.log('carsObjByModel: ', carsObjByModel)

// - - - - - - - - - - - - - - -

const newCarsObjWithoutId = {}

for (let car of cars) {
    const { id, model, ...otherProps } = car;
    newCarsObjWithoutId[model] = otherProps
}

console.log('newCarsObjWithoutId: ', newCarsObjWithoutId)

// -------------------------------------------

// 1a
// const carsObj1 = cars.reduce((acc, car) => {
//     acc[car.id] = car
//     return acc
// }, {})
// 1b
const carsObj1 = cars.reduce((acc, car) => ({...acc, [car.id]: {...car}}), {})

console.log(carsObj1)

// -----------------------------------
// const objWithDynamicKey = {
//     name: 'lottery',
//     [Math.random()]: 'random'
// }
// console.log(objWithDynamicKey)