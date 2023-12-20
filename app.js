const request = require("postman-request");
const url = "http://api.weatherstack.com/current?access_key=60c286066bc4003b329dbcc4f9b83e1c&query=-0.89688187780891,100.35074583300496";
request({ url: url }, (error, response) => {
  //   //   console.log(response);
  const data = JSON.parse(response.body);
  //   console.log(data);
  //   //   console.log(data.current);
  console.log(data.current.temperature);
});
