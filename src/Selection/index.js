import React, { useState, useEffect } from "react";

function Selection({ countryDetails }) {
    const [details, setDetails] = useState({});
    useEffect(() => {
        if (countryDetails?.id) {
            setDetails(countryDetails);
        }
    }, [countryDetails])

    return (
        <div>
            <h1>Selection</h1>
            <p>
                <strong>Name:</strong>
                {details.name}
            </p>
            <p>
                <strong>Dial code:</strong>
                {details.dialCode}
            </p>
            <p>
                <strong>Continent:</strong>
                {details.continent}
            </p>
            <p>
                <strong>Currency code:</strong>
                {details.currencyCode}
            </p>
        </div>
    );
}

export default Selection;