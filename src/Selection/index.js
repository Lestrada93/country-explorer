import React from "react";
import PropTypes from "prop-types";

/**
 * Selection
 * @description It displays the detailed information
 * @param {*} param0 
 * @returns 
 */
function Selection({ countryDetails }) {
    return (
        <>
            <h1>Selection</h1>
            {
                countryDetails?.id ? (
                    <>
                        <p>
                            <strong>Name:</strong>
                            {countryDetails.name}
                        </p>
                        <p>
                            <strong>Dial code:</strong>
                            {countryDetails.dialCode}
                        </p>
                        <p>
                            <strong>Continent:</strong>
                            {countryDetails.continent}
                        </p>
                        <p>
                            <strong>Currency code:</strong>
                            {countryDetails.currencyCode}
                        </p>
                    </>
                ) : <h3>You must select a country to see de the dails</h3>
            }

        </>
    );
}

Selection.propTypes = {
    countryDetails: PropTypes.object.isRequired,
};

export default Selection;