import React from "react";
import "./Country.scss";

function Country({ data, seeDetails }) {
    return <button
        className="country"
        onClick={() => seeDetails(data.id)}>
        {data.name}
        {data?.counter}
    </button>;
}

export default Country;