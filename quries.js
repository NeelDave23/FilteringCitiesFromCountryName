const getCountries = "SELECT * FROM countries";
const getLength = "SELECT COUNT * FROM countries";
const addData =
  "INSERT INTO cities (town,country_id,country) VALUES ($1,$2,$3)";
const updateData = "UPDATE towns SET country_id = $2 WHERE country = $1";
const findCities = " SELECT * FROM cities WHERE country = $1";
module.exports = {
  getCountries,
  getLength,
  addData,
  findCities,
  updateData,
};
