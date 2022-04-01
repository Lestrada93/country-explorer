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

    getCountriesForList(countries) {
        return Object.values(countries).map((country) => {
            return {
                name: country.name,
                id: country.id,
                flag: country.flag
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
        const NOT_FOUND = "Not found";
        for (const country of countries) {
            const id = country.code;
            result[id] = {
                id,
                name: country.name || NOT_FOUND,
                dialCode: country.dialCode || NOT_FOUND,
                currencyCode: country.currencyCode || NOT_FOUND,
                continent: country.continent || NOT_FOUND,
                flag: country.flag || NOT_FOUND,
            }
        }
        return result;
    }

    fetchingCountries() {
        return fetch(this.api.getCountries, this.api.options)
            .then((response) => response.json())
            .then((data) => {
                this.setCountries(this.setCountriesFormat(data));
                return this.getCountriesForList(this.countries);
            })
            .catch((e) => {
                console.error("Error fetching the data", e);
                return [];
            });
    }
}

export default ApiConnection;
