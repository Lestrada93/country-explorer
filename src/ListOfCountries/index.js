import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import Country from "../Country";

/**
 * ListOfCountries
 * @description It displays the list of the countries in the left panel
 * @param {*} param0 
 * @returns 
 */
function ListOfCountries({ t, countries, seeDetails }) {
    return (
        <>
            <h2 className="panel__column__title">List of Countries</h2>
            <div className="panel__content">
                {
                    countries.length ? (
                        countries.map(country => {
                            return <Country key={country.id} data={country} seeDetails={seeDetails} />
                        })
                    ) : <h3>{t("LOADING")}</h3>
                }
            </div>
        </>
    );
}

ListOfCountries.propTypes = {
    t: PropTypes.func,
    countries: PropTypes.array.isRequired,
    seeDetails: PropTypes.func.isRequired,
};

export default withTranslation()(ListOfCountries);