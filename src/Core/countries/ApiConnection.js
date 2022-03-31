import endpoints from './endpoints';

/**
 * ApiConnection
 * @description Main class to make Request to the server
 */
class ApiConnection {
    constructor() {
        this.api = endpoints;
        this.countries = {};
    }

    getCountriesNames(countries) {
        console.info("countries", countries);
        return Object.values(countries).map((country) => {
            return {
                name: country.name,
                id: country.id
            }
        })
    }

    setCountries(countries) {
        this.countries = countries;
    }

    getCountries() {
        return this.countries;
    }

    // Creating a hash map
    setCountriesFormat(countries) {
        const result = {};
        for (const country of countries) {
            const id = country.code;
            result[id] = {
                id,
                name: country.name || "Not found",
                dialCode: country.dialCode || "Not found",
                currencyCode: country.currencyCode || "Not found",
                continent: country.continent || "Not found",
            }
        }
        return result;
    }

    fetchingCountries() {
        return fetch(this.api.getCountries, this.api.options)
            .then((response) => response.json())
            .then((data) => {
                this.setCountries(this.setCountriesFormat(data));
                console.info("this.countries", this.countries);
                return this.getCountriesNames(this.countries);
            })
            .catch((e) => {
                console.info("Error", e);
                return [];
            });
    }
}

export default ApiConnection;
