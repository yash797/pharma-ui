document.addEventListener('DOMContentLoaded', function() {
    // Function to fetch country data
    function fetchCountries() {
        const ajaxRequest = new XMLHttpRequest();
        ajaxRequest.open('GET', 'https://restcountries.com/v2/all', true);
        //true is for async requests
        ajaxRequest.onreadystatechange = function() {
            if (ajaxRequest.status === 200) {
                const countries = JSON.parse(ajaxRequest.responseText);
                console.log(countries);
                populateDropdown(countries);
            } else {
                console.error('Failed to fetch countries');
            }
        };
        ajaxRequest.send();
    }

    // Function to populate the dropdown with country names
    function populateDropdown(countries) {
        const dropdown = document.getElementById('countryDropdown');
        for (let i = 0; i < countries.length; i++) {
            const option = document.createElement('option');
            option.value = countries[i].name;
            option.textContent = countries[i].name;
            dropdown.appendChild(option);
        }
    }

    // Fetch countries on page load
    fetchCountries();
});