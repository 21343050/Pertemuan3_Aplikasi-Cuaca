const request = require("postman-request");
const urlCuaca = "http://api.weatherstack.com/current?access_key=60c286066bc4003b329dbcc4f9b83e1c&query=-0.89688187780891,100.35074583300496";
request({ url: urlCuaca, json: true }, (error, response) => {
  console.log(
    "Saat ini suhu diluar mencapai " + response.body.current.temperature + " derajat celcius. Kemungkinan terjadinya hujan adalah " + response.body.current.precip + "%" + ", Deskripsi Cuaca: " + response.body.current.weather_descriptions
  );
});

const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Universitas%20Negeri%20Padang.json?limit=2&access_token=pk.eyJ1IjoiaGVyMWdvZCIsImEiOiJjbG1pa2JzeW0wd2FmM2xsbDRmZjcwbGEwIn0.g_vwUMeqIfEP3edrfCNDJw&limit=1";
request({ url: geocodeURL, json: true }, (error, response) => {
  const latitude = response.body.features[0].center[0];
  const longitude = response.body.features[0].center[1];
  const tempat = response.body.features[0].place_name;
  const tipe = response.body.features[0].place_type;
  const tpt = response.body.query[2];
  console.log("Koordinat lokasi anda adalah " + latitude + ", " + longitude);
  console.log("Data yang anda cari adalah: " + tpt);
  console.log("Data yang ditemukan adalah: " + tempat);
  console.log("tipe lokasi adalah: " + tipe);
  //   console.log(tempat, tipe);
});
