import { cars } from "../cars";

// 1
const filterByPrice = (cars, threshold) => cars.filter(car => car.price < threshold)

console.table('price < 30000', filterByPrice(cars, 30000));
console.table('price < 25000', filterByPrice(cars, 25000));

// 2
const getCarsWithDiscount = cars => cars.filter(car => car.onSale)
console.log('cars on Sale:', getCarsWithDiscount(cars))

// 3
const getCarsWithType = (cars, type) => cars.filter(car => car.type === type);

console.table('type: suv', getCarsWithType(cars, 'suv'));
console.table('type: sedan', getCarsWithType(cars, 'sedan'));
