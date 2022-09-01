const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries => {
    // for( country of countries) {
    //     console.log(country);
    // }
    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country =>{
        // console.log(country);
    const countryDiv = document.createElement('div');
    countryDiv.classList.add('country');
    countryDiv.innerHTML = `
    <h1>Name : ${country.name.common}</h1>
    <p>Capital : ${country.capital ? country.capital[0] : 'no capital'}</p>
    <button onclick="loadDetails('${country.cca2}')">Details</button>
    `;
    countriesContainer.appendChild(countryDiv);
    })
}

const loadDetails = (code) =>{
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log(url);
    // console.log('get country details', code);
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = country =>{
    console.log(country);
    const countryDetails = document.getElementById('country-details');
    countryDetails.innerHTML = `
    <h2>details: ${country.name.common}</h2>
    <img src="${country.flags.png}">
    `
}

loadCountries();