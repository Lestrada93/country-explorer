import React from "react";

function Selection({ countryDetails }) {
    return (
        <div>
            <h1>Selection</h1>
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
        </div>
    );
}

export default Selection;