import React, { useEffect, useState } from "react";

function History({ seeDetails, countryDetails }) {
    const [countriesHistory, setCountriesHistory] = useState({});

    useEffect(() => {
        if (countryDetails?.id) {
            const countries = { ...countriesHistory };
            const country = countries[countryDetails.id];
            if (country) {
                const currentCounter = parseInt(country.counter, 10);
                countries[countryDetails.id].counter = currentCounter + 1;
            } else {
                countries[countryDetails.id] = {
                    id: countryDetails.id,
                    counter: 1,
                    name: countryDetails.name,
                }
            }

            setCountriesHistory(countries);
        }
    }, [countryDetails])

    useEffect(() => {
        console.info("countriesHistory", countriesHistory);
        console.info("Object.values(countriesHistory)",
            Object.values(countriesHistory).sort((a, b) => a.name.localeCompare(b.name)));
    }, [countriesHistory])

    const getList = () => {
        return Object.values(countriesHistory).sort((a, b) => a.name.localeCompare(b.name));
    }

    return (
        <div>
            <h1>History</h1>
            {
                getList().map(country => {
                    return <button key={country.id} onClick={() => seeDetails(country.id)}>{country.name} {country.counter}</button>
                })
            }
        </div>
    )
        ;
}

export default History;