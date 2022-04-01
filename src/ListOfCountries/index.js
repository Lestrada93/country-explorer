import React from "react";
import Country from "../Country";

function ListOfCountries({ countries, seeDetails }) {

    return (
        <div>
            <h1>List of Countries</h1>
            {
                countries.map(country => {
                    return <Country key={country.id} data={country} seeDetails={seeDetails} />
                })
            }
        </div>
    );
}

export default ListOfCountries;