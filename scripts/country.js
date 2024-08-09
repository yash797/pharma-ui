document.addEventListener('DOMContentLoaded', function() {
    // Function to fetch country data
    function fetchCountries() {
        const ajaxRequest = new XMLHttpRequest();
        ajaxRequest.open('GET', 'https://restcountries.com/v2/all', true);
        //true is for async requests
        ajaxRequest.onreadystatechange = function() {
            if (ajaxRequest.status === 200) {
                const countries = JSON.parse(ajaxRequest.responseText);
                // console.log(countries);
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
            // option.setAttribute('class', 'w-20')
            // option.style = 'width: 46px;';
            dropdown.appendChild(option);
        }
        // countries.forEach(country => {
        //     const option = document.createElement('option');
        //     option.value = country.name;
        //     option.textContent = country.name;
        //     dropdown.appendChild(option);
        // });
    }

    // Fetch countries on page load
    fetchCountries()
    .then(countries => populateDropdown(countries))
    .catch(error => console.error('Failed to fetch countries:', error));
});

// document.addEventListener('DOMContentLoaded', function() {
//     const dropdown = document.getElementById('countryDropdown');

//     // Function to fetch country data using XMLHttpRequest wrapped in a promise
//     function fetchCountries() {
//         return new Promise((resolve, reject) => {
//             const xhr = new XMLHttpRequest();
//             xhr.open('GET', 'https://restcountries.com/v2/all', true);
//             xhr.onload = function() {
//                 if (xhr.status === 200) {
//                     resolve(JSON.parse(xhr.responseText));
//                 } else {
//                     reject(new Error('Failed to fetch countries'));
//                 }
//             };
//             xhr.onerror = function() {
//                 reject(new Error('Network error'));
//             };
//             xhr.send();
//         });
//     }

//     // Function to populate the dropdown with country names
//     function populateDropdown(countries) {
//         for (let i = 0; i < countries.length; i++) {
//             const option = document.createElement('option');
//             option.value = countries[i].name;
//             option.textContent = countries[i].name;
//             dropdown.appendChild(option);
//         }
//     }

//     // Fetch countries and populate dropdown on page load
//     fetchCountries()
//         .then(countries => populateDropdown(countries))
//         .catch(error => console.error('Failed to fetch countries:', error));
// });