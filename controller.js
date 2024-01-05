const pool = require("./db");
const queries = require("./quries");
const data = require("./cities");
const homepage = (req, res) => {
  pool.query(queries.getCountries, (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
};

const city = (name) => {
  let finalarr = [];
  let i = 0;
  console.log(data.length);
  while (i < data.length) {
    if (name === data[i].country) {
      finalarr.push(data[i]);
    }
    i++;
  }
  console.log(finalarr);
  return finalarr;
};

const Adddata = (req, res) => {
  const { name, country_id } = req.body;

  let i = 0;
  console.log(data.length);
  while (i < data.length) {
    if (name === data[i].country) {
      pool.query(
        queries.addData,
        [data[i].city_ascii, country_id, name],
        (error, result) => {
          if (error) {
            throw error;
          }
        }
      );
    }
    i++;
  }

  res.send("Added");
};

const findCity = (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  pool.query(queries.findCities, [name], (error, result) => {
    if (error) {
      throw error;
    } else {
      res.status(200).json(result.rows);
    }
  });
};

const updateData = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, country_id } = req.body;
  pool.query(queries.updateData, [name, country_id], (error, result) => {
    if (error) {
      throw error;
    } else {
      res.send("Updated");
    }
  });
};
module.exports = {
  homepage,
  findCity,
  Adddata,
  updateData,
};
