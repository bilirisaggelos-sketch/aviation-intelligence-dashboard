// =====================
// Aviation Intelligence Dashboard V7
// =====================

const APP = {

    airports: [],

    countries: [],

    czib: [],

    security: [],

    activeCountries: {},

    settings: {
        showAirports: true,
        showFIR: true
    }

};

function clock() {
    document.getElementById("utcClock").innerHTML =
        new Date().toUTCString();
}
setInterval(clock, 1000);
clock();

document.getElementById("airportToggle")
.addEventListener("change", function () {

    if (this.checked) {

        map.addLayer(airportsLayer);

    } else {

        map.removeLayer(airportsLayer);

    }

});
document.getElementById("searchBox")
.addEventListener("keyup", function () {

    const value =
        this.value.trim().toLowerCase();

   if (!APP.czib.length) return;

    const found =
    APP.czib.find(
            x => x.country.toLowerCase() === value
        );

    if (found) {
        showCountry(found.country);
    }

});
    

// =====================
// INITIALIZE
// =====================

loadAirports();

loadCountries()
.then(() => {
    return loadCZIBData();
});
