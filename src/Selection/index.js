import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";

/**
 * Selection
 * @description It displays the detailed information
 * @param {*} param0 
 * @returns 
 */
function Selection({ t, countryDetails }) {
    return (
        <>
            <h1>Selection</h1>
            {
                countryDetails?.id ? (
                    <>
                        <p>
                            <strong>{t('NAME')}:</strong>
                            {countryDetails.name}
                        </p>
                        <p>
                            <strong>{t('DIAL_CODE')}:</strong>
                            {countryDetails.dialCode}
                        </p>
                        <p>
                            <strong>{t('CONTINENT')}:</strong>
                            {countryDetails.continent}
                        </p>
                        <p>
                            <strong>{t('CURRENCY')}:</strong>
                            {countryDetails.currencyCode}
                        </p>
                    </>
                ) : <h3>{t('MUST_COUNTRY_SELECTION')}</h3>
            }

        </>
    );
}

Selection.propTypes = {
    t: PropTypes.func,
    countryDetails: PropTypes.object.isRequired,
};

export default withTranslation()(Selection);