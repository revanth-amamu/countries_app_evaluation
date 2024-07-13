const express = require("express");
const axios = require("axios");
require("dotenv").config();

// const { CountryModel } = require("../models/country.model");

const countryRouter = express.Router();

const countries_base_url = process.env.COUNTRIES_URL;
const flags_base_url = process.env.FLAGS_URL;

countryRouter.get("/:currencyCode", async (req, res) => {
    const { currencyCode } = req.params;
    try {
        const response = await axios.get(`${countries_base_url}/currency/${currencyCode}`);
        const countries = await response.data;
        const result = countries.map((country) => ({
            name: country.name.common,
            currency: country.currencies ? Object.values(country.currencies).map((currency) => currency.name) : 'N/A',
            currencyCode: country.currencies ? Object.keys(country.currencies).join(', ') : 'N/A',
            capital: country.capital ? country.capital[0] : 'N/A',
            languages: country.languages ? Object.values(country.languages).join(', ') : 'N/A',
            flag: `${flags_base_url}/${country.cca2}/shiny/64.png`
        }));
        res.status(200).send(result);
    } catch (err) {
        res.send({ msg: "Something went wrong", error: err.message });
    }
});

module.exports = { countryRouter }