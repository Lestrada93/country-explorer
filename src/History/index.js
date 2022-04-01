import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Country from "../Country";

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
    }, [countryDetails]);

    const getList = () => {
        return Object.values(countriesHistory).sort((a, b) => a.name.localeCompare(b.name));
    }

    return (
        <div>
            <h1>History</h1>
            {
                Object.values(countriesHistory).length ? (
                    getList().map(country => {
                        return <Country key={country.id} data={country} seeDetails={seeDetails} />
                    })
                ) : <h3>You must select at least one country to view history</h3>
            }
        </div>
    );
}


History.propTypes = {
    countryDetails: PropTypes.object.isRequired,
    seeDetails: PropTypes.func.isRequired,
};

export default History;