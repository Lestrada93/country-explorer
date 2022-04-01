import React, { useEffect, useState } from 'react';
import './Core/i18n';
import ListOfCountries from './ListOfCountries';
import Selection from './Selection';
import History from './History';
import ApiConnection from './Core/countries/ApiConnection';
const apiConnection = new ApiConnection();

import "./App.scss"

function App() {
    const [countryDetails, setCountryDetails] = useState({});
    const [countries, setCountries] = useState([]);

    async function fetchCountries() {
        const response = await apiConnection.fetchingCountries();
        setCountries(response);
    }

    useEffect(() => {
        fetchCountries();
    }, []);

    const seeDetails = (id) => {
        setCountryDetails(apiConnection.getCountries()[id]);
    }

    return <div className='panel__wrapper'>
        <h1 className="panel__main-title">Country Explorer</h1>
        <div className="panel">
            <div className="panel__column">
                <ListOfCountries
                    countries={countries}
                    seeDetails={seeDetails} />
            </div>
            <div className="panel__column">
                <Selection countryDetails={countryDetails} />
            </div>
            <div className="panel__column">
                <History seeDetails={seeDetails} countryDetails={countryDetails} />
            </div>
        </div>
    </div>;
}

export default App;