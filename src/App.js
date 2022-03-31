import React from 'react';
import ListOfCountries from './ListOfCountries';
import Selection from './Selection';
import History from './History';

function App() {
    return <div>
        <h1>Country Explorer</h1>
        <ListOfCountries />
        <Selection />
        <History />
    </div>;
}

export default App;