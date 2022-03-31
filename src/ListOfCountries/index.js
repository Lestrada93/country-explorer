import React from "react";

function ListOfCountries({ countries, seeDetails }) {

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