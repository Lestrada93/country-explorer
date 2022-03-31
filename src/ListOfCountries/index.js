import React, { useEffect, useState } from "react";
import ApiConnection from "../Core/countries/ApiConnection";

const apiConnection = new ApiConnection();

function ListOfCountries({ setCountryDetails }) {
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

    return (
        <div>
            <h1>List of Countries</h1>
            {
                countries.map(country => {
                    return (
                        <button key={country.id} onClick={() => seeDetails(country.id)}>{country.name}</button>
                    )
                })
            }
        </div>
    );
}

export default ListOfCountries;