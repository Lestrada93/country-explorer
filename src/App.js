import React, { useState } from 'react';
import ListOfCountries from './ListOfCountries';
import Selection from './Selection';
import History from './History';

function App() {
    const [countryDetails, setCountryDetails] = useState({});

    return <div>
        <h1>Country Explorer</h1>
        <ListOfCountries setCountryDetails={setCountryDetails} />
        <Selection countryDetails={countryDetails} />
        <History countryDetails={countryDetails} />
    </div>;
}

export default App;