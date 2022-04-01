import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import "./Selection.scss"

/**
 * Selection
 * @description It displays the detailed information
 * @param {*} param0 
 * @returns 
 */
function Selection({ t, countryDetails }) {
    return (
        <>
            <h2 className="panel__column__title">Selection</h2>
            <div className="panel__content">
                {
                    countryDetails?.id ? (
                        <>
                            <p className="info__row">
                                <span className="info__label">{t('NAME')}</span>
                                {countryDetails.name}
                            </p>
                            <p className="info__row">
                                <span className="info__label">{t('DIAL_CODE')}</span>
                                {countryDetails.dialCode}
                            </p>
                            <p className="info__row">
                                <span className="info__label">{t('CONTINENT')}</span>
                                {countryDetails.continent}
                            </p>
                            <p className="info__row">
                                <span className="info__label">{t('CURRENCY')}</span>
                                {countryDetails.currencyCode}
                            </p>
                        </>
                    ) : <p>{t('MUST_COUNTRY_SELECTION')}</p>
                }
            </div>
        </>
    );
}

Selection.propTypes = {
    t: PropTypes.func,
    countryDetails: PropTypes.object.isRequired,
};

export default withTranslation()(Selection);