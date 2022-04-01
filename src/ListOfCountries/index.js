import React from "react";
import PropTypes from "prop-types";
import Country from "../Country";

/**
 * ListOfCountries
 * @description It displays the list of the countries in the left panel
 * @param {*} param0 
 * @returns 
 */
function ListOfCountries({ countries, seeDetails }) {
    return (
        <>
            <h2 className="panel__column__title">List of Countries</h2>
            <div className="panel__content">
                {
                    countries.length ? (
                        countries.map(country => {
                            return <Country key={country.id} data={country} seeDetails={seeDetails} />
                        })
                    ) : <h3>Loading</h3>
                }
            </div>
        </>
    );
}

ListOfCountries.propTypes = {
    countries: PropTypes.array.isRequired,
    seeDetails: PropTypes.func.isRequired,
};

export default ListOfCountries;