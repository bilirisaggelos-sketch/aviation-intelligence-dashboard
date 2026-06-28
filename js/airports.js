// =====================
// AIRPORTS
// =====================

const airports = [
{
name:"Erbil",
icao:"ORER",
lat:36.237,
lon:43.963
},

{
name:"Bahrain",
icao:"OBBI",
lat:26.270,
lon:50.633
},

{
name:"Beirut",
icao:"OLBA",
lat:33.820,
lon:35.488
},

{
name:"Tehran",
icao:"OIII",
lat:35.689,
lon:51.313
},

{
name:"Dubai",
icao:"OMDB",
lat:25.253,
lon:55.365
},

{
name:"Cairo",
icao:"HECA",
lat:30.121,
lon:31.406
},

{
name:"Istanbul",
icao:"LTBA",
lat:40.976,
lon:28.814
},

{
name:"Larnaca",
icao:"LCLK",
lat:34.875,
lon:33.624
},

{
name:"Delhi",
icao:"VIDP",
lat:28.556,
lon:77.100
},

{
name:"Mumbai",
icao:"VABB",
lat:19.089,
lon:72.865
},

{
name:"Islamabad",
icao:"OPIS",
lat:33.549,
lon:72.825
},

{
name:"Lahore",
icao:"OPLA",
lat:31.521,
lon:74.403
},

{
name:"Karachi",
icao:"OPKC",
lat:24.906,
lon:67.161
},

{
name:"Kabul",
icao:"OAKB",
lat:34.565,
lon:69.212
},

{
name:"Kandahar",
icao:"OAKN",
lat:31.506,
lon:65.847
},

{
name:"Riyadh",
icao:"OERK",
lat:24.957,
lon:46.698
},

{
name:"Jeddah",
icao:"OEJN",
lat:21.670,
lon:39.152
},

{
name:"Dammam",
icao:"OEDF",
lat:26.471,
lon:49.798
},

{
name:"Amman",
icao:"OJAI",
lat:31.722,
lon:35.993
},

{
name:"Tel Aviv",
icao:"LLBG",
lat:32.011,
lon:34.886
},

{
name:"Baghdad",
icao:"ORBI",
lat:33.262,
lon:44.234
},

{
name:"Basra",
icao:"ORMM",
lat:30.549,
lon:47.662
},  

{
name:"Muscat",
icao:"OOMS",
lat:23.593,
lon:58.284
},

{
name:"Alexandria",
icao:"HEBA",
lat:31.184,
lon:29.949
},

{
name:"Sharm El Sheikh",
icao:"HESH",
lat:27.977,
lon:34.394
},

{
name:"Luxor",
icao:"HELX",
lat:25.671,
lon:32.706
},

{
name:"Tripoli",
icao:"HLLM",
lat:32.664,
lon:13.159
},

{
name:"Benghazi",
icao:"HLLB",
lat:32.096,
lon:20.269
},

{
name:"Khartoum",
icao:"HSSS",
lat:15.590,
lon:32.553
},

{
name:"Aden",
icao:"OYAA",
lat:12.829,
lon:45.028
},
        
{
name:"Marrakech",
icao:"GMMX",
lat:31.607,
lon:-8.036
},

{
name:"Tunis",
icao:"DTTA",
lat:36.851,
lon:10.227
}      
]; 
function loadAirports(){

airports.forEach(airport => {

    const marker = L.circleMarker(
        [airport.lat, airport.lon],
        {
            radius:6,
            color:"#2563eb",
            fillColor:"#2563eb",
            fillOpacity:1
        }
    );

    marker.bindPopup(
        "✈ " +
        airport.icao +
        " - " +
        airport.name
    );

    marker.addTo(airportsLayer);

marker.bringToFront();

airportMarkers.push(marker);

});

}
