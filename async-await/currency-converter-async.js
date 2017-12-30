console.log('Starting currency-converter-async...');

const axios = require('axios');

const getExchangeRateAsync = async (from, to) => {
    try {
        const response = await axios.get(`https://api.fixer.io/latest?base=${from}`);
        const rate = response.data.rates[to];
        if(rate) {
            return rate;
        }else {
            throw new Error();
        }
    }catch (e) {
        throw new Error(`unable to get the exchange rate for ${from} and ${to}`);
    }
};

// getExchangeRateAsync('USD', 'INR').then((rate) => {
//     console.log(rate);
// }).catch((err) => {
//     console.log(err);
// });

const getCountriesAsync = async (currencyCode) => {
    try {
        const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
        return response.data.map((country) => country.name);
    }catch (e) {
        throw new Error(`unable to get the countries for ${currencyCode}`);
    }
};

// getCountriesAsync('INR').then((countries) => {
//     console.log(countries);
// }).catch((err) => {
//     console.log(err);
// });

// async-await
const convertCurrencyAsync = async (from, to, amount) => {
    const countries = await getCountriesAsync(to);
    const rate = await getExchangeRateAsync(from, to);
    const exchangeAmount = amount * rate;
    return `${amount} ${from} is worth ${exchangeAmount} ${to}. ${to} can be used in the following countries: ${countries}`;
};

convertCurrencyAsync('USD', 'INR', 100).then((status) => {
    console.log(status);
}).catch((err) => {
    console.log(err.message);
});

convertCurrencyAsync('kkk', 'lll', 100).then((status) => {
    console.log(status);
}).catch((err) => {
    console.log(err.message);
});