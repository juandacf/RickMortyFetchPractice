/* Api structure:
->Name
->alive
->Race
->Location
->first seen>
*/

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", insertedValue)

function insertedValue (){
}

fetch("https://rickandmortyapi.com/api/character")
.then(response => response.json())
.then(data=> {for(var character in data.results
){
    const {id:id, name:name, status:status, species:species, image:image} = data.results[character]
    const contentContainer = document.getElementById("contentContainer");
    const cardContainer= document.createElement("div");
    cardContainer.classList.add("cardContainer");
    contentContainer.appendChild(cardContainer)
    const cardTitle = document.createElement("h1");
    cardTitle.classList.add("cardTitle");
    cardTitle.innerHTML = name;
    cardContainer.appendChild(cardTitle);
    const cardImage = document.createElement("img")
    cardImage.classList.add("cardImage");
    cardImage.src = image;
    cardContainer.appendChild(cardImage);
    const cardStatus = document.createElement("p");
    cardStatus.classList.add("cardStatus");
    cardStatus.innerHTML= `Status: ${status}`;
    cardContainer.appendChild(cardStatus);
    const cardSpecies = document.createElement("p");
    cardSpecies.classList.add("cardSpecies");
    cardSpecies.innerHTML = `Species: ${species}`;
    cardContainer.appendChild(cardSpecies);

}})
.catch(error=> console.log(error))


