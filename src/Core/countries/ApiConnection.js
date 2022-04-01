import endpoints from './endpoints';

/**
 * ApiConnection
 * @description Main class to make Request to the server
 */
class ApiConnection {
    constructor() {
        this.api = endpoints;
        this.countries = {};
    }

    getCountriesNames(countries) {
        return Object.values(countries).map((country) => {
            return {
                name: country.name,
                id: country.id
            }
        })
    }

    setCountries(countries) {
        this.countries = countries;
    }

    getCountries() {
        return this.countries;
    }

    // Creating a hash map
    setCountriesFormat(countries) {
        const result = {};
        for (const country of countries) {
            const id = country.code;
            result[id] = {
                id,
                name: country.name || "Not found",
                dialCode: country.dialCode || "Not found",
                currencyCode: country.currencyCode || "Not found",
                continent: country.continent || "Not found",
            }
        }
        return result;
    }

    fetchingCountries() {
        /*return fetch(this.api.getCountries, this.api.options)
            .then((response) => response.json())
            .then((data) => {
                this.setCountries(this.setCountriesFormat(data));
                return this.getCountriesNames(this.countries);
            })
            .catch((e) => {
                console.error("Error fetching the data", e);
                return [];
            });*/
        const data = [{ "name": "Afghanistan", "flag": "🇦🇫", "code": "AF", "dialCode": "+93", "continent": "Asia", "currencyCode": "AFN" }, { "name": "Åland Islands", "flag": "🇦🇽", "code": "AX", "dialCode": "+358", "continent": "Europe", "currencyCode": "EUR" }, { "name": "Albania", "flag": "🇦🇱", "code": "AL", "dialCode": "+355", "continent": "Europe", "currencyCode": "ALL" }, { "name": "Algeria", "flag": "🇩🇿", "code": "DZ", "dialCode": "+213", "continent": "Africa", "currencyCode": "DZD" }, { "name": "American Samoa", "flag": "🇦🇸", "code": "AS", "dialCode": "+1684", "continent": "Oceania", "currencyCode": "USD" }, { "name": "Andorra", "flag": "🇦🇩", "code": "AD", "dialCode": "+376", "continent": "Europe", "currencyCode": "EUR" }, { "name": "Angola", "flag": "🇦🇴", "code": "AO", "dialCode": "+244", "continent": "Africa", "currencyCode": "AOA" }, { "name": "Anguilla", "flag": "🇦🇮", "code": "AI", "dialCode": "+1264", "continent": "North America", "currencyCode": "XCD" }, { "name": "Antarctica", "flag": "🇦🇶", "code": "AQ", "dialCode": "+672", "continent": "Antarctica", "currencyCode": "XCD" }, { "name": "Antigua and Barbuda", "flag": "🇦🇬", "code": "AG", "dialCode": "+1268", "continent": "North America", "currencyCode": "XCD" }, { "name": "Argentina", "flag": "🇦🇷", "code": "AR", "dialCode": "+54", "continent": "South America", "currencyCode": "ARS" }, { "name": "Armenia", "flag": "🇦🇲", "code": "AM", "dialCode": "+374", "continent": "Asia", "currencyCode": "AMD" }, { "name": "Aruba", "flag": "🇦🇼", "code": "AW", "dialCode": "+297", "continent": "North America", "currencyCode": "AWG" }, { "name": "Australia", "flag": "🇦🇺", "code": "AU", "dialCode": "+61", "continent": "Oceania", "currencyCode": "AUD" }, { "name": "Austria", "flag": "🇦🇹", "code": "AT", "dialCode": "+43", "continent": "Europe", "currencyCode": "EUR" }, { "name": "Azerbaijan", "flag": "🇦🇿", "code": "AZ", "dialCode": "+994", "continent": "Asia", "currencyCode": "AZN" }, { "name": "Bahamas", "flag": "🇧🇸", "code": "BS", "dialCode": "+1242", "continent": "North America", "currencyCode": "BSD" }, { "name": "Bahrain", "flag": "🇧🇭", "code": "BH", "dialCode": "+973", "continent": "Asia", "currencyCode": "BHD" }, { "name": "Bangladesh", "flag": "🇧🇩", "code": "BD", "dialCode": "+880", "continent": "Asia", "currencyCode": "BDT" }, { "name": "Barbados", "flag": "🇧🇧", "code": "BB", "dialCode": "+1246", "continent": "North America", "currencyCode": "BBD" }, { "name": "Belarus", "flag": "🇧🇾", "code": "BY", "dialCode": "+375", "continent": "Europe", "currencyCode": "BYR" }, { "name": "Belgium", "flag": "🇧🇪", "code": "BE", "dialCode": "+32", "continent": "Europe", "currencyCode": "EUR" }, { "name": "Belize", "flag": "🇧🇿", "code": "BZ", "dialCode": "+501", "continent": "North America", "currencyCode": "BZD" }, { "name": "Benin", "flag": "🇧🇯", "code": "BJ", "dialCode": "+229", "continent": "Africa", "currencyCode": "XOF" }, { "name": "Bermuda", "flag": "🇧🇲", "code": "BM", "dialCode": "+1441", "continent": "North America", "currencyCode": "BMD" }, { "name": "Bhutan", "flag": "🇧🇹", "code": "BT", "dialCode": "+975", "continent": "Asia", "currencyCode": "BTN" }, { "name": "Bolivia, Plurinational State of bolivia", "flag": "🇧🇴", "code": "BO", "dialCode": "+591", "continent": "South America", "currencyCode": "BOB" }, { "name": "Bosnia and Herzegovina", "flag": "🇧🇦", "code": "BA", "dialCode": "+387", "continent": "Europe", "currencyCode": "BAM" }, { "name": "Botswana", "flag": "🇧🇼", "code": "BW", "dialCode": "+267", "continent": "Africa", "currencyCode": "BWP" }, { "name": "Bouvet Island", "flag": "🇧🇻", "code": "BV", "dialCode": "+47", "continent": "Antarctica", "currencyCode": "NOK" }, { "name": "Brazil", "flag": "🇧🇷", "code": "BR", "dialCode": "+55", "continent": "South America", "currencyCode": "BRL" }, { "name": "British Indian Ocean Territory", "flag": "🇮🇴", "code": "IO", "dialCode": "+246", "continent": "Africa", "currencyCode": "USD" }, { "name": "Brunei Darussalam", "flag": "🇧🇳", "code": "BN", "dialCode": "+673", "continent": "Asia", "currencyCode": "BND" }, { "name": "Bulgaria", "flag": "🇧🇬", "code": "BG", "dialCode": "+359", "continent": "Europe", "currencyCode": "BGN" }, { "name": "Burkina Faso", "flag": "🇧🇫", "code": "BF", "dialCode": "+226", "continent": "Africa", "currencyCode": "XOF" }, { "name": "Burundi", "flag": "🇧🇮", "code": "BI", "dialCode": "+257", "continent": "Africa", "currencyCode": "BIF" }, { "name": "Cambodia", "flag": "🇰🇭", "code": "KH", "dialCode": "+855", "continent": "Asia", "currencyCode": "KHR" }, { "name": "Cameroon", "flag": "🇨🇲", "code": "CM", "dialCode": "+237", "continent": "Africa", "currencyCode": "XAF" }, { "name": "Canada", "flag": "🇨🇦", "code": "CA", "dialCode": "+1", "continent": "North America", "currencyCode": "CAD" }, { "name": "Cape Verde", "flag": "🇨🇻", "code": "CV", "dialCode": "+238", "continent": "Africa", "currencyCode": "CVE" }, { "name": "Cayman Islands", "flag": "🇰🇾", "code": "KY", "dialCode": "+345", "continent": "North America", "currencyCode": "KYD" }, { "name": "Central African Republic", "flag": "🇨🇫", "code": "CF", "dialCode": "+236", "continent": "Africa", "currencyCode": "XAF" }, { "name": "Chad", "flag": "🇹🇩", "code": "TD", "dialCode": "+235", "continent": "Africa", "currencyCode": "XAF" }, { "name": "Chile", "flag": "🇨🇱", "code": "CL", "dialCode": "+56", "continent": "South America", "currencyCode": "CLP" }, { "name": "China", "flag": "🇨🇳", "code": "CN", "dialCode": "+86", "continent": "Asia", "currencyCode": "CNY" }, { "name": "Christmas Island", "flag": "🇨🇽", "code": "CX", "dialCode": "+61", "continent": "Oceania", "currencyCode": "AUD" }, { "name": "Cocos (Keeling) Islands", "flag": "🇨🇨", "code": "CC", "dialCode": "+61", "continent": "Oceania", "currencyCode": "AUD" }, { "name": "Colombia", "flag": "🇨🇴", "code": "CO", "dialCode": "+57", "continent": "South America", "currencyCode": "COP" }, { "name": "Comoros", "flag": "🇰🇲", "code": "KM", "dialCode": "+269", "continent": "Africa", "currencyCode": "KMF" }, { "name": "Congo", "flag": "🇨🇬", "code": "CG", "dialCode": "+242", "continent": "Africa", "currencyCode": "XAF" }, { "name": "Congo, The Democratic Republic of the Congo", "flag": "🇨🇩", "code": "CD", "dialCode": "+243", "continent": "Africa", "currencyCode": "CDF" }, { "name": "Cook Islands", "flag": "🇨🇰", "code": "CK", "dialCode": "+682", "continent": "Oceania", "currencyCode": "NZD" }, { "name": "Costa Rica", "flag": "🇨🇷", "code": "CR", "dialCode": "+506", "continent": "North America", "currencyCode": "CRC" }, { "name": "Cote d'Ivoire", "flag": "🇨🇮", "code": "CI", "dialCode": "+225", "continent": "Africa", "currencyCode": "XOF" }, { "name": "Croatia", "flag": "🇭🇷", "code": "HR", "dialCode": "+385", "continent": "Europe", "currencyCode": "HRK" }, { "name": "Cuba", "flag": "🇨🇺", "code": "CU", "dialCode": "+53", "continent": "North America", "currencyCode": "CUP" }, { "name": "Cyprus", "flag": "🇨🇾", "code": "CY", "dialCode": "+357", "continent": "Asia", "currencyCode": "EUR" }, { "name": "Czech Republic", "flag": "🇨🇿", "code": "CZ", "dialCode": "+420", "continent": "Europe", "currencyCode": "CZK" }, { "name": "Denmark", "flag": "🇩🇰", "code": "DK", "dialCode": "+45", "continent": "Europe", "currencyCode": "DKK" }, { "name": "Djibouti", "flag": "🇩🇯", "code": "DJ", "dialCode": "+253", "continent": "Africa", "currencyCode": "DJF" }, { "name": "Dominica", "flag": "🇩🇲", "code": "DM", "dialCode": "+1767", "continent": "North America", "currencyCode": "XCD" }, { "name": "Dominican Republic", "flag": "🇩🇴", "code": "DO", "dialCode": "+1849", "continent": "North America", "currencyCode": "DOP" }, { "name": "Ecuador", "flag": "🇪🇨", "code": "EC", "dialCode": "+593", "continent": "South America", "currencyCode": "ECS" }, { "name": "Egypt", "flag": "🇪🇬", "code": "EG", "dialCode": "+20", "continent": "Africa", "currencyCode": "EGP" }, { "name": "El Salvador", "flag": "🇸🇻", "code": "SV", "dialCode": "+503", "continent": "North America", "currencyCode": "SVC" }, { "name": "Equatorial Guinea", "flag": "🇬🇶", "code": "GQ", "dialCode": "+240", "continent": "Africa", "currencyCode": "XAF" }, { "name": "Eritrea", "flag": "🇪🇷", "code": "ER", "dialCode": "+291", "currencyCode": "ERN" }, { "name": "Estonia", "flag": "🇪🇪", "code": "EE", "dialCode": "+372", "continent": "Africa", "currencyCode": "EUR" }, { "name": "Ethiopia", "flag": "🇪🇹", "code": "ET", "dialCode": "+251", "continent": "Africa", "currencyCode": "ETB" }, { "name": "Falkland Islands (Malvinas)", "flag": "🇫🇰", "code": "FK", "dialCode": "+500", "continent": "South America", "currencyCode": "FKP" }, { "name": "Faroe Islands", "flag": "🇫🇴", "code": "FO", "dialCode": "+298", "continent": "Europe", "currencyCode": "DKK" }, { "name": "Fiji", "flag": "🇫🇯", "code": "FJ", "dialCode": "+679", "continent": "Oceania", "currencyCode": "FJD" }, { "name": "Finland", "flag": "🇫🇮", "code": "FI", "dialCode": "+358", "continent": "Europe", "currencyCode": "EUR" }, { "name": "France", "flag": "🇫🇷", "code": "FR", "dialCode": "+33", "continent": "Europe", "currencyCode": "EUR" }, { "name": "French Guiana", "flag": "🇬🇫", "code": "GF", "dialCode": "+594", "continent": "South America", "currencyCode": "EUR" }, { "name": "French Polynesia", "flag": "🇵🇫", "code": "PF", "dialCode": "+689", "continent": "Oceania", "currencyCode": "XPF" }, { "name": "French Southern Territories", "flag": "🇹🇫", "code": "TF", "dialCode": "+262", "continent": "Antarctica", "currencyCode": "EUR" }, { "name": "Gabon", "flag": "🇬🇦", "code": "GA", "dialCode": "+241", "continent": "Africa", "currencyCode": "XAF" }, { "name": "Gambia", "flag": "🇬🇲", "code": "GM", "dialCode": "+220", "continent": "Africa", "currencyCode": "GMD" }, { "name": "Georgia", "flag": "🇬🇪", "code": "GE", "dialCode": "+995", "continent": "Asia", "currencyCode": "GEL" }, { "name": "Germany", "flag": "🇩🇪", "code": "DE", "dialCode": "+49", "continent": "Europe", "currencyCode": "EUR" }, { "name": "Ghana", "flag": "🇬🇭", "code": "GH", "dialCode": "+233", "continent": "Africa", "currencyCode": "GHS" }, { "name": "Gibraltar", "flag": "🇬🇮", "code": "GI", "dialCode": "+350", "continent": "Europe", "currencyCode": "GIP" }, { "name": "Greece", "flag": "🇬🇷", "code": "GR", "dialCode": "+30", "continent": "Europe", "currencyCode": "EUR" }, { "name": "Greenland", "flag": "🇬🇱", "code": "GL", "dialCode": "+299", "continent": "North America", "currencyCode": "DKK" }, { "name": "Grenada", "flag": "🇬🇩", "code": "GD", "dialCode": "+1473", "continent": "North America", "currencyCode": "XCD" }, { "name": "Guadeloupe", "flag": "🇬🇵", "code": "GP", "dialCode": "+590", "continent": "North America", "currencyCode": "EUR" }, { "name": "Guam", "flag": "🇬🇺", "code": "GU", "dialCode": "+1671", "continent": "Oceania", "currencyCode": "USD" }, { "name": "Guatemala", "flag": "🇬🇹", "code": "GT", "dialCode": "+502", "continent": "North America", "currencyCode": "QTQ" }, { "name": "Guernsey", "flag": "🇬🇬", "code": "GG", "dialCode": "+44", "continent": "Europe", "currencyCode": "GGP" }, { "name": "Guinea", "flag": "🇬🇳", "code": "GN", "dialCode": "+224", "continent": "Africa", "currencyCode": "GNF" }, { "name": "Guinea-Bissau", "flag": "🇬🇼", "code": "GW", "dialCode": "+245", "continent": "Africa", "currencyCode": "CFA" }, { "name": "Guyana", "flag": "🇬🇾", "code": "GY", "dialCode": "+592", "continent": "South America", "currencyCode": "GYD" }, { "name": "Haiti", "flag": "🇭🇹", "code": "HT", "dialCode": "+509", "continent": "North America", "currencyCode": "HTG" }, { "name": "Heard Island and Mcdonald Islands", "flag": "🇭🇲", "code": "HM", "dialCode": "+672", "continent": "Antarctica", "currencyCode": "AUD" }, { "name": "Holy See (Vatican City State)", "flag": "🇻🇦", "code": "VA", "dialCode": "+379", "continent": "Europe", "currencyCode": "EUR" }, { "name": "Honduras", "flag": "🇭🇳", "code": "HN", "dialCode": "+504", "continent": "North America", "currencyCode": "HNL" }, { "name": "Hong Kong", "flag": "🇭🇰", "code": "HK", "dialCode": "+852", "continent": "Asia", "currencyCode": "HKD" }, { "name": "Hungary", "flag": "🇭🇺", "code": "HU", "dialCode": "+36", "continent": "Europe", "currencyCode": "HUF" }, { "name": "Iceland", "flag": "🇮🇸", "code": "IS", "dialCode": "+354", "continent": "Europe", "currencyCode": "ISK" }, { "name": "India", "flag": "🇮🇳", "code": "IN", "dialCode": "+91", "continent": "Asia", "currencyCode": "INR" }, { "name": "Indonesia", "flag": "🇮🇩", "code": "ID", "dialCode": "+62", "continent": "Asia", "currencyCode": "IDR" }, { "name": "Iran, Islamic Republic of Persian Gulf", "flag": "🇮🇷", "code": "IR", "dialCode": "+98", "continent": "Asia", "currencyCode": "IRR" }, { "name": "Iraq", "flag": "🇮🇶", "code": "IQ", "dialCode": "+964", "continent": "Asia", "currencyCode": "IQD" }, { "name": "Ireland", "flag": "🇮🇪", "code": "IE", "dialCode": "+353", "continent": "Europe", "currencyCode": "EUR" }, { "name": "Isle of Man", "flag": "🇮🇲", "code": "IM", "dialCode": "+44", "continent": "Europe", "currencyCode": "IMP" }, { "name": "Israel", "flag": "🇮🇱", "code": "IL", "dialCode": "+972", "continent": "Asia", "currencyCode": "ILS" }, { "name": "Italy", "flag": "🇮🇹", "code": "IT", "dialCode": "+39", "continent": "Europe", "currencyCode": "EUR" }, { "name": "Jamaica", "flag": "🇯🇲", "code": "JM", "dialCode": "+1876", "continent": "North America", "currencyCode": "JMD" }, { "name": "Japan", "flag": "🇯🇵", "code": "JP", "dialCode": "+81", "continent": "Asia", "currencyCode": "JPY" }, { "name": "Jersey", "flag": "🇯🇪", "code": "JE", "dialCode": "+44", "continent": "Europe", "currencyCode": "JEP" }, { "name": "Jordan", "flag": "🇯🇴", "code": "JO", "dialCode": "+962", "continent": "Asia", "currencyCode": "JOD" }, { "name": "Kazakhstan", "flag": "🇰🇿", "code": "KZ", "dialCode": "+7", "continent": "Asia", "currencyCode": "KZT" }, { "name": "Kenya", "flag": "🇰🇪", "code": "KE", "dialCode": "+254", "continent": "Africa", "currencyCode": "KES" }, { "name": "Kiribati", "flag": "🇰🇮", "code": "KI", "dialCode": "+686", "continent": "Oceania", "currencyCode": "AUD" }, { "name": "Korea, Democratic People's Republic of Korea", "flag": "🇰🇵", "code": "KP", "dialCode": "+850", "continent": "Asia", "currencyCode": "KPW" }, { "name": "Korea, Republic of South Korea", "flag": "🇰🇷", "code": "KR", "dialCode": "+82", "continent": "Asia", "currencyCode": "KRW" }, { "name": "Kosovo", "flag": "🇽🇰", "code": "XK", "dialCode": "+383", "continent": "Europe", "currencyCode": "EUR" }, { "name": "Kuwait", "flag": "🇰🇼", "code": "KW", "dialCode": "+965", "continent": "Asia", "currencyCode": "KWD" }, { "name": "Kyrgyzstan", "flag": "🇰🇬", "code": "KG", "dialCode": "+996", "continent": "Asia", "currencyCode": "KGS" }, { "name": "Laos", "flag": "🇱🇦", "code": "LA", "dialCode": "+856", "continent": "Asia", "currencyCode": "LAK" }, { "name": "Latvia", "flag": "🇱🇻", "code": "LV", "dialCode": "+371", "continent": "Europe", "currencyCode": "LVL" }, { "name": "Lebanon", "flag": "🇱🇧", "code": "LB", "dialCode": "+961", "continent": "Asia", "currencyCode": "LBP" }, { "name": "Lesotho", "flag": "🇱🇸", "code": "LS", "dialCode": "+266", "continent": "Africa", "currencyCode": "LSL" }, { "name": "Liberia", "flag": "🇱🇷", "code": "LR", "dialCode": "+231", "continent": "Africa", "currencyCode": "LRD" }, { "name": "Libyan Arab Jamahiriya", "flag": "🇱🇾", "code": "LY", "dialCode": "+218", "continent": "Africa", "currencyCode": "LYD" }, { "name": "Liechtenstein", "flag": "🇱🇮", "code": "LI", "dialCode": "+423", "continent": "Europe", "currencyCode": "CHF" }, { "name": "Lithuania", "flag": "🇱🇹", "code": "LT", "dialCode": "+370", "continent": "Europe", "currencyCode": "LTL" }, { "name": "Luxembourg", "flag": "🇱🇺", "code": "LU", "dialCode": "+352", "continent": "Europe", "currencyCode": "EUR" }, { "name": "Macao", "flag": "🇲🇴", "code": "MO", "dialCode": "+853", "continent": "Asia", "currencyCode": "MOP" }, { "name": "Macedonia", "flag": "🇲🇰", "code": "MK", "dialCode": "+389", "continent": "Europe", "currencyCode": "MKD" }, { "name": "Madagascar", "flag": "🇲🇬", "code": "MG", "dialCode": "+261", "continent": "Africa", "currencyCode": "MGF" }, { "name": "Malawi", "flag": "🇲🇼", "code": "MW", "dialCode": "+265", "continent": "Africa", "currencyCode": "MWK" }, { "name": "Malaysia", "flag": "🇲🇾", "code": "MY", "dialCode": "+60", "continent": "Asia", "currencyCode": "MYR" }, { "name": "Maldives", "flag": "🇲🇻", "code": "MV", "dialCode": "+960", "continent": "Asia", "currencyCode": "MVR" }, { "name": "Mali", "flag": "🇲🇱", "code": "ML", "dialCode": "+223", "continent": "Africa", "currencyCode": "XOF" }, { "name": "Malta", "flag": "🇲🇹", "code": "MT", "dialCode": "+356", "continent": "Europe", "currencyCode": "EUR" }, { "name": "Marshall Islands", "flag": "🇲🇭", "code": "MH", "dialCode": "+692", "continent": "Oceania", "currencyCode": "USD" }, { "name": "Martinique", "flag": "🇲🇶", "code": "MQ", "dialCode": "+596", "continent": "North America", "currencyCode": "EUR" }, { "name": "Mauritania", "flag": "🇲🇷", "code": "MR", "dialCode": "+222", "continent": "Africa", "currencyCode": "MRO" }, { "name": "Mauritius", "flag": "🇲🇺", "code": "MU", "dialCode": "+230", "continent": "Africa", "currencyCode": "MUR" }, { "name": "Mayotte", "flag": "🇾🇹", "code": "YT", "dialCode": "+262", "continent": "Africa", "currencyCode": "EUR" }, { "name": "Mexico", "flag": "🇲🇽", "code": "MX", "dialCode": "+52", "continent": "North America", "currencyCode": "MXN" }, { "name": "Micronesia, Federated States of Micronesia", "flag": "🇫🇲", "code": "FM", "dialCode": "+691", "continent": "Oceania", "currencyCode": "USD" }, { "name": "Moldova", "flag": "🇲🇩", "code": "MD", "dialCode": "+373", "continent": "Europe", "currencyCode": "MDL" }, { "name": "Monaco", "flag": "🇲🇨", "code": "MC", "dialCode": "+377", "continent": "Europe", "currencyCode": "EUR" }, { "name": "Mongolia", "flag": "🇲🇳", "code": "MN", "dialCode": "+976", "continent": "Asia", "currencyCode": "MNT" }, { "name": "Montenegro", "flag": "🇲🇪", "code": "ME", "dialCode": "+382", "continent": "Europe", "currencyCode": "EUR" }, { "name": "Montserrat", "flag": "🇲🇸", "code": "MS", "dialCode": "+1664", "continent": "North America", "currencyCode": "XCD" }, { "name": "Morocco", "flag": "🇲🇦", "code": "MA", "dialCode": "+212", "continent": "Africa", "currencyCode": "MAD" }, { "name": "Mozambique", "flag": "🇲🇿", "code": "MZ", "dialCode": "+258", "continent": "Africa", "currencyCode": "MZN" }, { "name": "Myanmar", "flag": "🇲🇲", "code": "MM", "dialCode": "+95", "continent": "Asia", "currencyCode": "MMR" }, { "name": "Namibia", "flag": "🇳🇦", "code": "NA", "dialCode": "+264", "continent": "Africa", "currencyCode": "NAD" }, { "name": "Nauru", "flag": "🇳🇷", "code": "NR", "dialCode": "+674", "continent": "Oceania", "currencyCode": "AUD" }, { "name": "Nepal", "flag": "🇳🇵", "code": "NP", "dialCode": "+977", "continent": "Asia", "currencyCode": "NPR" }, { "name": "Netherlands", "flag": "🇳🇱", "code": "NL", "dialCode": "+31", "continent": "Europe", "currencyCode": "EUR" }, { "name": "Netherlands Antilles", "flag": "", "code": "AN", "dialCode": "+599", "continent": "North America", "currencyCode": "ANG" }, { "name": "New Caledonia", "flag": "🇳🇨", "code": "NC", "dialCode": "+687", "continent": "Oceania", "currencyCode": "XPF" }, { "name": "New Zealand", "flag": "🇳🇿", "code": "NZ", "dialCode": "+64", "continent": "Oceania", "currencyCode": "NZD" }, { "name": "Nicaragua", "flag": "🇳🇮", "code": "NI", "dialCode": "+505", "continent": "North America", "currencyCode": "NIO" }, { "name": "Niger", "flag": "🇳🇪", "code": "NE", "dialCode": "+227", "continent": "Africa", "currencyCode": "XOF" }, { "name": "Nigeria", "flag": "🇳🇬", "code": "NG", "dialCode": "+234", "continent": "Africa", "currencyCode": "NGN" }, { "name": "Niue", "flag": "🇳🇺", "code": "NU", "dialCode": "+683", "continent": "Oceania", "currencyCode": "NZD" }, { "name": "Norfolk Island", "flag": "🇳🇫", "code": "NF", "dialCode": "+672", "continent": "Oceania", "currencyCode": "AUD" }, { "name": "Northern Mariana Islands", "flag": "🇲🇵", "code": "MP", "dialCode": "+1670", "continent": "Oceania", "currencyCode": "USD" }, { "name": "Norway", "flag": "🇳🇴", "code": "NO", "dialCode": "+47", "continent": "Europe", "currencyCode": "NOK" }, { "name": "Oman", "flag": "🇴🇲", "code": "OM", "dialCode": "+968", "continent": "Asia", "currencyCode": "OMR" }, { "name": "Pakistan", "flag": "🇵🇰", "code": "PK", "dialCode": "+92", "continent": "Asia", "currencyCode": "PKR" }, { "name": "Palau", "flag": "🇵🇼", "code": "PW", "dialCode": "+680", "continent": "Oceania", "currencyCode": "USD" }, { "name": "Palestinian Territory, Occupied", "flag": "🇵🇸", "code": "PS", "dialCode": "+970", "continent": "Asia", "currencyCode": "LP" }, { "name": "Panama", "flag": "🇵🇦", "code": "PA", "dialCode": "+507", "continent": "North America", "currencyCode": "PAB" }, { "name": "Papua New Guinea", "flag": "🇵🇬", "code": "PG", "dialCode": "+675", "continent": "Oceania", "currencyCode": "PGK" }, { "name": "Paraguay", "flag": "🇵🇾", "code": "PY", "dialCode": "+595", "continent": "South America", "currencyCode": "PYG" }, { "name": "Peru", "flag": "🇵🇪", "code": "PE", "dialCode": "+51", "continent": "South America", "currencyCode": "PEN" }, { "name": "Philippines", "flag": "🇵🇭", "code": "PH", "dialCode": "+63", "continent": "Asia", "currencyCode": "PHP" }, { "name": "Pitcairn", "flag": "🇵🇳", "code": "PN", "dialCode": "+64", "continent": "Oceania", "currencyCode": "NZD" }, { "name": "Poland", "flag": "🇵🇱", "code": "PL", "dialCode": "+48", "continent": "Europe", "currencyCode": "PLN" }, { "name": "Portugal", "flag": "🇵🇹", "code": "PT", "dialCode": "+351", "continent": "Europe", "currencyCode": "EUR" }, { "name": "Puerto Rico", "flag": "🇵🇷", "code": "PR", "dialCode": "+1939", "continent": "North America", "currencyCode": "USD" }, { "name": "Qatar", "flag": "🇶🇦", "code": "QA", "dialCode": "+974", "continent": "Asia", "currencyCode": "QAR" }, { "name": "Romania", "flag": "🇷🇴", "code": "RO", "dialCode": "+40", "continent": "Europe", "currencyCode": "RON" }, { "name": "Russia", "flag": "🇷🇺", "code": "RU", "dialCode": "+7", "continent": "Europe", "currencyCode": "RUB" }, { "name": "Rwanda", "flag": "🇷🇼", "code": "RW", "dialCode": "+250", "continent": "Africa", "currencyCode": "RWF" }, { "name": "Reunion", "flag": "🇷🇪", "code": "RE", "dialCode": "+262", "continent": "Africa", "currencyCode": "EUR" }, { "name": "Saint Barthelemy", "flag": "🇧🇱", "code": "BL", "dialCode": "+590", "continent": "North America", "currencyCode": "EUR" }, { "name": "Saint Helena, Ascension and Tristan Da Cunha", "flag": "🇸🇭", "code": "SH", "dialCode": "+290", "continent": "Africa", "currencyCode": "SHP" }, { "name": "Saint Kitts and Nevis", "flag": "🇰🇳", "code": "KN", "dialCode": "+1869", "continent": "North America", "currencyCode": "XCD" }, { "name": "Saint Lucia", "flag": "🇱🇨", "code": "LC", "dialCode": "+1758", "continent": "North America", "currencyCode": "XCD" }, { "name": "Saint Martin", "flag": "🇲🇫", "code": "MF", "dialCode": "+590", "currencyCode": "XCD" }, { "name": "Saint Pierre and Miquelon", "flag": "🇵🇲", "code": "PM", "dialCode": "+508", "continent": "North America", "currencyCode": "EUR" }, { "name": "Saint Vincent and the Grenadines", "flag": "🇻🇨", "code": "VC", "dialCode": "+1784", "continent": "North America", "currencyCode": "XCD" }, { "name": "Samoa", "flag": "🇼🇸", "code": "WS", "dialCode": "+685", "continent": "Oceania", "currencyCode": "WST" }, { "name": "San Marino", "flag": "🇸🇲", "code": "SM", "dialCode": "+378", "continent": "Europe", "currencyCode": "EUR" }, { "name": "Sao Tome and Principe", "flag": "🇸🇹", "code": "ST", "dialCode": "+239", "continent": "Africa", "currencyCode": "STD" }, { "name": "Saudi Arabia", "flag": "🇸🇦", "code": "SA", "dialCode": "+966", "continent": "Asia", "currencyCode": "SAR" }, { "name": "Senegal", "flag": "🇸🇳", "code": "SN", "dialCode": "+221", "continent": "Africa", "currencyCode": "XOF" }, { "name": "Serbia", "flag": "🇷🇸", "code": "RS", "dialCode": "+381", "continent": "Europe", "currencyCode": "RSD" }, { "name": "Seychelles", "flag": "🇸🇨", "code": "SC", "dialCode": "+248", "continent": "Africa", "currencyCode": "SCR" }, { "name": "Sierra Leone", "flag": "🇸🇱", "code": "SL", "dialCode": "+232", "continent": "Africa", "currencyCode": "SLL" }, { "name": "Singapore", "flag": "🇸🇬", "code": "SG", "dialCode": "+65", "continent": "Asia", "currencyCode": "SGD" }, { "name": "Slovakia", "flag": "🇸🇰", "code": "SK", "dialCode": "+421", "continent": "Europe", "currencyCode": "EUR" }, { "name": "Slovenia", "flag": "🇸🇮", "code": "SI", "dialCode": "+386", "continent": "Europe", "currencyCode": "EUR" }, { "name": "Solomon Islands", "flag": "🇸🇧", "code": "SB", "dialCode": "+677", "continent": "Oceania", "currencyCode": "SBD" }, { "name": "Somalia", "flag": "🇸🇴", "code": "SO", "dialCode": "+252", "continent": "Africa", "currencyCode": "SOS" }, { "name": "South Africa", "flag": "🇿🇦", "code": "ZA", "dialCode": "+27", "continent": "Africa", "currencyCode": "ZAR" }, { "name": "South Sudan", "flag": "🇸🇸", "code": "SS", "dialCode": "+211", "continent": "Africa", "currencyCode": "SSP" }, { "name": "South Georgia and the South Sandwich Islands", "flag": "🇬🇸", "code": "GS", "dialCode": "+500", "continent": "Antarctica", "currencyCode": "GBP" }, { "name": "Spain", "flag": "🇪🇸", "code": "ES", "dialCode": "+34", "continent": "Europe", "currencyCode": "EUR" }, { "name": "Sri Lanka", "flag": "🇱🇰", "code": "LK", "dialCode": "+94", "continent": "Asia", "currencyCode": "LKR" }, { "name": "Sudan", "flag": "🇸🇩", "code": "SD", "dialCode": "+249", "continent": "Africa", "currencyCode": "SDG" }, { "name": "Suriname", "flag": "🇸🇷", "code": "SR", "dialCode": "+597", "continent": "South America", "currencyCode": "SRD" }, { "name": "Svalbard and Jan Mayen", "flag": "🇸🇯", "code": "SJ", "dialCode": "+47", "continent": "Europe", "currencyCode": "NOK" }, { "name": "Swaziland", "flag": "🇸🇿", "code": "SZ", "dialCode": "+268", "continent": "Africa", "currencyCode": "SZL" }, { "name": "Sweden", "flag": "🇸🇪", "code": "SE", "dialCode": "+46", "continent": "Europe", "currencyCode": "SEK" }, { "name": "Switzerland", "flag": "🇨🇭", "code": "CH", "dialCode": "+41", "continent": "Europe", "currencyCode": "CHF" }, { "name": "Syrian Arab Republic", "flag": "🇸🇾", "code": "SY", "dialCode": "+963", "continent": "Asia", "currencyCode": "SYP" }, { "name": "Taiwan", "flag": "🇹🇼", "code": "TW", "dialCode": "+886", "continent": "Asia", "currencyCode": "TWD" }, { "name": "Tajikistan", "flag": "🇹🇯", "code": "TJ", "dialCode": "+992", "continent": "Asia", "currencyCode": "TJS" }, { "name": "Tanzania, United Republic of Tanzania", "flag": "🇹🇿", "code": "TZ", "dialCode": "+255", "continent": "Africa", "currencyCode": "TZS" }, { "name": "Thailand", "flag": "🇹🇭", "code": "TH", "dialCode": "+66", "continent": "Asia", "currencyCode": "THB" }, { "name": "Timor-Leste", "flag": "🇹🇱", "code": "TL", "dialCode": "+670", "continent": "Asia", "currencyCode": "USD" }, { "name": "Togo", "flag": "🇹🇬", "code": "TG", "dialCode": "+228", "continent": "Africa", "currencyCode": "XOF" }, { "name": "Tokelau", "flag": "🇹🇰", "code": "TK", "dialCode": "+690", "continent": "Oceania", "currencyCode": "NZD" }, { "name": "Tonga", "flag": "🇹🇴", "code": "TO", "dialCode": "+676", "continent": "Oceania", "currencyCode": "TOP" }, { "name": "Trinidad and Tobago", "flag": "🇹🇹", "code": "TT", "dialCode": "+1868", "continent": "North America", "currencyCode": "TTD" }, { "name": "Tunisia", "flag": "🇹🇳", "code": "TN", "dialCode": "+216", "continent": "Africa", "currencyCode": "TND" }, { "name": "Turkey", "flag": "🇹🇷", "code": "TR", "dialCode": "+90", "continent": "Asia", "currencyCode": "TRY" }, { "name": "Turkmenistan", "flag": "🇹🇲", "code": "TM", "dialCode": "+993", "continent": "Asia", "currencyCode": "TMT" }, { "name": "Turks and Caicos Islands", "flag": "🇹🇨", "code": "TC", "dialCode": "+1649", "continent": "North America", "currencyCode": "USD" }, { "name": "Tuvalu", "flag": "🇹🇻", "code": "TV", "dialCode": "+688", "continent": "Oceania", "currencyCode": "AUD" }, { "name": "Uganda", "flag": "🇺🇬", "code": "UG", "dialCode": "+256", "continent": "Africa", "currencyCode": "UGX" }, { "name": "Ukraine", "flag": "🇺🇦", "code": "UA", "dialCode": "+380", "continent": "Europe", "currencyCode": "UAH" }, { "name": "United Arab Emirates", "flag": "🇦🇪", "code": "AE", "dialCode": "+971", "continent": "Asia", "currencyCode": "AED" }, { "name": "United Kingdom", "flag": "🇬🇧", "code": "GB", "dialCode": "+44", "continent": "Europe", "currencyCode": "GBP" }, { "name": "United States", "flag": "🇺🇸", "code": "US", "dialCode": "+1", "continent": "North America", "currencyCode": "USD" }, { "name": "Uruguay", "flag": "🇺🇾", "code": "UY", "dialCode": "+598", "continent": "South America", "currencyCode": "UYU" }, { "name": "Uzbekistan", "flag": "🇺🇿", "code": "UZ", "dialCode": "+998", "continent": "Asia", "currencyCode": "UZS" }, { "name": "Vanuatu", "flag": "🇻🇺", "code": "VU", "dialCode": "+678", "continent": "Oceania", "currencyCode": "VUV" }, { "name": "Venezuela, Bolivarian Republic of Venezuela", "flag": "🇻🇪", "code": "VE", "dialCode": "+58", "continent": "South America", "currencyCode": "VEF" }, { "name": "Vietnam", "flag": "🇻🇳", "code": "VN", "dialCode": "+84", "continent": "Asia", "currencyCode": "VND" }, { "name": "Virgin Islands, British", "flag": "🇻🇬", "code": "VG", "dialCode": "+1284", "continent": "North America", "currencyCode": "USD" }, { "name": "Virgin Islands, U.S.", "flag": "🇻🇮", "code": "VI", "dialCode": "+1340", "continent": "North America", "currencyCode": "USD" }, { "name": "Wallis and Futuna", "flag": "🇼🇫", "code": "WF", "dialCode": "+681", "continent": "Oceania", "currencyCode": "XPF" }, { "name": "Yemen", "flag": "🇾🇪", "code": "YE", "dialCode": "+967", "continent": "Asia", "currencyCode": "YER" }, { "name": "Zambia", "flag": "🇿🇲", "code": "ZM", "dialCode": "+260", "continent": "Africa", "currencyCode": "ZMW" }, { "name": "Zimbabwe", "flag": "🇿🇼", "code": "ZW", "dialCode": "+263", "continent": "Africa", "currencyCode": "ZWD" }]
        this.setCountries(this.setCountriesFormat(data));
        return this.getCountriesNames(this.countries);

    }
}

export default ApiConnection;
