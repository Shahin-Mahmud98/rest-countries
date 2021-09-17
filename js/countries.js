const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}
loadCountries();
const displayCountries = countries => {
    console.log(countries);
    const container = document.getElementById('countries');

    const countryHTML = countries.map(country => getCountryHTML(country));
    container.innerHTML = countryHTML.join(' ');
    console.log(countryHTML[0]);

}

const getCountryHTML = country => {
    return `
    <div class ="country">
    <h2>${country.name}</h2>
    <h4>Capital: ${country.capital}</h4>
    <img src = "${country.flag}">
    </div>
    `
}
