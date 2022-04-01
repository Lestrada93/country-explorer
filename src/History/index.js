import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Country from "../Country";
import { withTranslation } from "react-i18next";

/**
 * History
 * @description It display the history of countries executing a click
 * @param {*} param0 
 * @returns 
 */
function History({ t, seeDetails, countryDetails }) {
    const [countriesHistory, setCountriesHistory] = useState({});

    useEffect(() => {
        if (countryDetails?.id) {
            const countries = { ...countriesHistory };
            const country = countries[countryDetails.id];
            if (country) {
                const currentCounter = parseInt(country.counter, 10);
                countries[countryDetails.id].counter = currentCounter + 1;
            } else {
                countries[countryDetails.id] = {
                    id: countryDetails.id,
                    counter: 1,
                    name: countryDetails.name,
                    flag: countryDetails.flag,
                }
            }

            setCountriesHistory(countries);
        }
    }, [countryDetails]);

    const getList = () => {
        return Object.values(countriesHistory).sort((a, b) => a.name.localeCompare(b.name));
    }

    return (
        <div>
            <h2 className="panel__column__title">History</h2>
            <div className="panel__content">
                {
                    Object.values(countriesHistory).length ? (
                        getList().map(country => {
                            return <Country key={country.id} data={country} seeDetails={seeDetails} />
                        })
                    ) : <p>{t('MUST_COUNTRY_HISTORY')}</p>
                }
            </div>
        </div>
    );
}


History.propTypes = {
    t: PropTypes.func,
    countryDetails: PropTypes.object.isRequired,
    seeDetails: PropTypes.func.isRequired,
};

export default withTranslation()(History);