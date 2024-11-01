const travelData = {
  name: "Nicolas",
  countries: [
    { name: "USA", year: 2024 },
    { name: "Belgium", year: 2024 },
    { name: "Austria", year: 2023 }
  ]
};

// Send the data to the server
fetch("https://thejsway-server.herokuapp.com/api/countries", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(travelData)
})
  .then(response => {
    return response.text();
  })
  .then(text => {
      console.log(text); 
  })
  .catch(error => {
    console.error(error.message);
  });