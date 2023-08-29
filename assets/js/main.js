/*Dice Game */

const playerNumber = Math.floor(Math.random()*6)+1;
const pcNumber = Math.floor(Math.random()*6)+1;

console.log(playerNumber, pcNumber);

if(playerNumber>pcNumber)
    console.log("Il giocatore vince!");
else if(playerNumber==pcNumber)
    console.log("Pareggio!");
else
    console.log("Il PC vince!");

/*E-mail*/

let authUsers = ['ex1@mail.com','ex2@mail.com','ex3@mail.com','ex4@mail.com','ex5@mail.com'];
let email = prompt("Inserisci la tua mail");
let authorized = false;
for(let i = 0; i<authUsers.length; i++)
    if(email == authUsers[i])
    {
        authorized = true;
        console.log("Logged Successfull");
    }
    else if(i==authUsers.length-1 && authorized == false)
        console.log("You are not autorized to log in");