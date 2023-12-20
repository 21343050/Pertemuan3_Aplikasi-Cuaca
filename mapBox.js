const request = require("postman-request");

const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Universitas%20Negeri%20Padang.json?limit=2&access_token=pk.eyJ1IjoiaGVyMWdvZCIsImEiOiJjbG1pa2JzeW0wd2FmM2xsbDRmZjcwbGEwIn0.g_vwUMeqIfEP3edrfCNDJw&limit=1";
request({ url: geocodeURL, json: true }, (error, response) => {
  const latitude = response.body.features[0].center[0];
  const longitude = response.body.features[0].center[1];
  const tempat = response.body.features[0].place_name;
  const tipe = response.body.features[0].place_type;
  console.log(latitude, longitude);
  console.log(tempat, tipe);
});
