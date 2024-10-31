// Country list
const countryList = [
"Afghanistan",
"Albania",
"Algeria",
"Andorra",
"Angola",
"Anguilla",
"Antarctica",
"Antigua-and-Barbuda",
"Argentina",
"Armenia",
"Aruba",
"Australia",
"Autria",
"Azerbaïjan"
];

//Get the element
const countryInput = document.getElementById("country");
const suggestionsContainer = document.getElementById("suggestions");

function Autocomplete() {
  //get the value
  const inputText = countryInput.value.toLowerCase();
  
  //clear all
  suggestionsContainer.innerHTML = "";

  //if input then select filtered countries sarting with input
  if (inputText.length > 0) {
    const filteredCountries = countryList.filter(country => 
      country.toLowerCase().startsWith(inputText)
    );
    
  //Display the suggestion of filtered countries
    filteredCountries.forEach(country => {
      const suggestionDiv = document.createElement("div");
      suggestionDiv.textContent = country;
      suggestionDiv.classList.add("suggestion");

  // add an event listener
      suggestionDiv.addEventListener("click", () => {
        countryInput.value = country;
        suggestionsContainer.innerHTML = "";
      });

      suggestionsContainer.appendChild(suggestionDiv);
    });
  }
}

countryInput.addEventListener("input", Autocomplete);