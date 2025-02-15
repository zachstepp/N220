const uLRef = document.querySelector("ul");
const instruments = ["Piano", "Guitar", "Violin", "Drums", "Saxophone", "Flute"];
for(let i = 0; i < instruments.length; i++){
    uLRef.innerHTML += "<li>" + instruments[i] + "</li>";
}