function sales(obj) {
  var totals = { Ford: 0, Honda: 0, "Land Rover": 0, Toyota: 0 };

  for (i = 0; i < obj.length; i++) {
    if (obj[i].make === "Ford") {
      totals.Ford += obj[i].price;
    } else if (obj[i].make === "Honda") {
      totals.Honda += obj[i].price;
    } else if (obj[i].make === "Land Rover") {
      totals["Land Rover"] += obj[i].price;
    } else if (obj[i].make === "Toyota") {
      totals.Toyota += obj[i].price;
    }
  }
  return totals;
}

module.exports = sales;
