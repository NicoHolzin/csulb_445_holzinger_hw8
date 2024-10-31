const houses = [
  {
    code: "ST",
    name: "Stark"
  },
  {
    code: "LA",
    name: "Lannister"
  },
  {
      code: "BA",
      name: "Baratheon"
  },
  {
    code: "TA",
    name: "Targaryen"
  }
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
    switch (houseCode) {
      case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
      case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
      case "BA":
        return ["Robert", "Stannis", "Renly"];
      case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
      default:
        return []; // Empty array
    }
};  

function dropdownfilling() {
  //get element
  const houseSelect = document.getElementById("house");
  
  //add all houses to the options
  houses.forEach(house => {
    const option = document.createElement("option");
    option.value = house.code;
    option.textContent = house.name;
    houseSelect.appendChild(option);
  });
}

function showCharacters() {
  //get element
  const houseSelect = document.getElementById("house");
  const charactersList = document.getElementById("characters");

  //add event listener
  houseSelect.addEventListener("change", function () {
    charactersList.innerHTML = "";

    const selectedHouse = houseSelect.value;
    const characters = getCharacters(selectedHouse);

  //display the list of characters
    characters.forEach(character => {
      const li = document.createElement("li");
      li.textContent = character;
      charactersList.appendChild(li);
    });
  });
}

dropdownfilling();
showCharacters();