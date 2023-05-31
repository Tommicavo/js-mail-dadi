console.log("js ok");

// recupero gli elementi dal dom
const loginElement = document.getElementById("login");
const loginButton = document.getElementById("loginButton");
const messageElement = document.getElementById("message");

// lista di mail
const mails = ["pinco@mail.it", "pallo@mail.it", "pallino@mail.it", "pino@mail.it", "peppe@mail.it"];
let isFound = false;
let messageValue = "";

// al click del button
loginButton.addEventListener("click", function(){
    const loginValue = loginElement.value;
    // controllo se c'è un match
    for (let i = 0; i < mails.length; i++){
        if (mails[i] === loginValue){
            isFound = true;
            messageValue = `Benvenuto ${loginValue}`;
        }
    }
    if (!isFound) messageValue = `${loginValue} non esiste`;
    // stampo il messaggio
    messageElement.innerText = messageValue;
});
