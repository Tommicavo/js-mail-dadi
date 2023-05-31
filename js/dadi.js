console.log("js ok");

// recupero gli elementi dal dom
const buttonPlay = document.getElementById("play");
const redTeamElement = document.getElementById("red");
const blueTeamElement = document.getElementById("blue");
const winnerElement = document.getElementById("winner");

const players = ["Team Red", "Team Blue"];
let message = "";

// al click del button
buttonPlay.addEventListener("click", function(){
    const results = [];
    // genero i numeri
    for (let i = 0; i < players.length; i++){
        const result = Math.floor(Math.random() * 6) + 1;
        results.push(result);
    }
    redTeamElement.innerText = results[0];
    blueTeamElement.innerText = results[1];
    // confronto i numeri
    if (results[0] > results[1]) message = players[0];
    else if (results[1] > results[0]) message = players[1];
    else message = "Even";
    // stampo il risultato
    winnerElement.innerText = message;
});
