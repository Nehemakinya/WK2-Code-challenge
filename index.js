//Fetch the JSON data
fetch('db.json')
  .then(response => response.json())
  .then(data => {
      displayCharacters(data.animals);
  })
  
//function to displayCharacters
function displayCharacters(characters) {
  let animals = document.getElementById("jungle");

  characters.forEach(character => {
      let newDiv = document.createElement("div");
      newDiv.classList = "jungle";
      newDiv.innerHTML = character.name;
      animals.appendChild(newDiv);
      newDiv.addEventListener("click", function () {
          displayCharacterDetails(character);
      });
  });
}

//function to dislayCharacterDetails
function displayCharacterDetails(character) {
  let animalDetails = document.getElementById("animal_details");
  animalDetails.innerHTML = "";

  const image = document.createElement("img");
  image.src = character.image;
  image.alt = character.name;
  animalDetails.appendChild(image);

  const votes = document.createElement("p");
  votes.textContent = "Votes: " + character.votes;
  animalDetails.appendChild(votes);
}
