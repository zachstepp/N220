const uLRef = document.querySelector("ul");
const pRef = document.getElementById("avg");
const scores = [95, 72, 88, 45, 60, 79, 82, 91, 50, 38]


let avgScore = 0;
for(let i = 0; i < scores.length; i++){
    uLRef.innerHTML += "<li>" + scores[i] + "</li>";
    avgScore += scores[i];
}
pRef.innerText = avgScore/scores.length;
