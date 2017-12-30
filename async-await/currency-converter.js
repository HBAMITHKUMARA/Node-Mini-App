console.log('Starting currency-converter...');

const axios = require('axios');

const getExchangeRate = (from, to) => {
    return axios.get(`https://api.fixer.io/latest?base=${from}`).then((response) => {
        return response.data.rates[to];
    });
};

getExchangeRate('USD', 'INR').then((rate) => {
    console.log(rate);
}).catch((err) => {
    console.log(err);
});

const getCountries = (currencyCode) => {
    return axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`).then((response) => {
        return response.data.map((country) => country.name);
    });
};

getCountries('INR').then((countries) => {
    console.log(countries);
}).catch((err) => {
    console.log(err);
});

const convertCurrency = (from, to, amount) => {
    let countries;
    return getCountries(to).then((tempCountries) => {
        countries = tempCountries;
        return getExchangeRate(from, to).then((rate) => {
            const exchangeAmount = amount * rate;
            return `${amount} ${from} is worth ${exchangeAmount} ${to}. ${to} can be used in the following countries: ${countries}`;
        });
    });
};

convertCurrency('USD', 'INR', 100).then((status) => {
    console.log(status);
}).catch((err) => {
    console.log(err);
});