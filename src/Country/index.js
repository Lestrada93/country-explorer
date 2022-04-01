import React from "react";
import PropTypes from "prop-types";
import "./Country.scss";

/**
 * Country
 * @description It shows the country information
 * @param {*} param0 
 * @returns 
 */
function Country({ data, seeDetails }) {
    return <button
        className="country"
        onClick={() => seeDetails(data.id)}>
        {data.name}
        {data?.counter}
    </button>;
}

Country.propTypes = {
    data: PropTypes.object.isRequired,
    seeDetails: PropTypes.func.isRequired,
};

export default Country;