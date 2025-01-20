/* Api structure:
->Name
->alive
->Race
->Location
->first seen>
*/



fetch("https://rickandmortyapi.com/api/character")
.then(response => response.json())
.then(data=> {for(var character in data.results
){
    const {id:id, name:name, status:status, species:species, image:image} = data.results[character]
    const contentContainer = document.getElementById("contentContainer");
    const cardContainer= document.createElement("div");
    cardContainer.classList.add("cardContainer");
    cardContainer.setAttribute("id",`element${id}`)
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

    const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", insertedValue)

function insertedValue (){
    var searchInputValue = searchInput.value.toLowerCase()
    if(name.toLowerCase().includes(searchInputValue)){
        cardContainer.style.display= 'flex';
    } else if(!name.toLowerCase().includes(searchInputValue)){
        cardContainer.style.display= 'none';
    } 
}
}

})
.catch(error=> console.log(error))


