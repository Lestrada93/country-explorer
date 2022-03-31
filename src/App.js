import React, { useEffect, useState } from 'react';
import ListOfCountries from './ListOfCountries';
import Selection from './Selection';
import History from './History';
import ApiConnection from './Core/countries/ApiConnection';
const apiConnection = new ApiConnection();

function App() {
    const [countryDetails, setCountryDetails] = useState({});
    const [countries, setCountries] = useState([]);

    async function fetchCountries() {
        const response = await apiConnection.fetchingCountries();
        console.info("response >>", response);
        setCountries(response);
    }

    useEffect(() => {
        fetchCountries();
    }, []);

    const seeDetails = (id) => {
        setCountryDetails(apiConnection.getCountries()[id]);
    }

    return <div>
        <h1>Country Explorer</h1>
        <ListOfCountries
            countries={countries}
            seeDetails={seeDetails} />
        <Selection countryDetails={countryDetails} />
        <History seeDetails={seeDetails} countryDetails={countryDetails} />
    </div>;
}

export default App;