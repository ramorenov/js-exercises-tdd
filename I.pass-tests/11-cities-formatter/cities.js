function formatCities(capitals, transform) {
  return capitals.map(cap => transform(cap));
}

module.exports = formatCities;
