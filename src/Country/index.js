import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import "./Country.scss";

/**
 * Country
 * @description It shows the country information
 * @param {*} param0 
 * @returns 
 */
function Country({ t, data, seeDetails }) {
    return <button
        className="country"
        onClick={() => seeDetails(data.id)}>
        {data?.flag}
        <span className="country__name">{data.name}</span>
        {
            data?.counter &&
            <span>{t("VIEWED")}: {data?.counter}</span>
        }
    </button>;
}

Country.propTypes = {
    t: PropTypes.func,
    data: PropTypes.object.isRequired,
    seeDetails: PropTypes.func.isRequired,
};

export default withTranslation()(Country);