function paintShop(cars, colour) {
  return cars.map(function(car) {
    newCar = Object.assign({}, car);
    newCar.colour = newCar.make === "Ford" ? "Pink" : newCar.colour;
    return newCar;
  });
}

module.exports = paintShop;
