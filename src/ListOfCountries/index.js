import React from "react";
import PropTypes from "prop-types";
import Country from "../Country";

function ListOfCountries({ countries, seeDetails }) {

    return (
        <>
            <h1>List of Countries</h1>
            {
                countries.length ? (
                    countries.map(country => {
                        return <Country key={country.id} data={country} seeDetails={seeDetails} />
                    })
                ) : <h3>Loading</h3>
            }
        </>
    );
}

ListOfCountries.propTypes = {
    countries: PropTypes.array.isRequired,
    seeDetails: PropTypes.func.isRequired,
};

export default ListOfCountries;