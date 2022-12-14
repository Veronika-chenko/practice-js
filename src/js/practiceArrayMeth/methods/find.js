import { cars } from '../cars';

const getCarByModel = (cars, model) => cars.find(car => car.model === model);

console.log('find F-150 model', getCarByModel(cars, 'F-150'));
console.log('find CX-9 model',getCarByModel(cars, 'CX-9'));