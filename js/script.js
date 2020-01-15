// Campo Minato
// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire per 84 volte un numero da 1 a 100, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato”, ovvero presente nella lista di numeri random, o raggiunge il numero massimo possibile di tentativi consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito

//genero 16 numeri random e controllo se sono tutti diversi
var arrayComputerNumber = [];
while (arrayComputerNumber.length < 16){
  var computerNumber = getRandom(1, 100);
  if (arrayComputerNumber.includes(computerNumber) == false) {
    arrayComputerNumber.push(computerNumber);
  }
}
console.log(arrayComputerNumber);

// variabile che mi servono
var arrayUserNumber = [];
var maxTries;
var points = 0;
var message = 'Hai vinto';
var min;
var max;

// chiedere all'utente con quale grado di difficoltà vuole giocare e controllo le sue risposte
var levelChoices = 0;
do {
var level = parseInt(prompt('da 0 a 2, che grado di difficoltà scegli?'));
levelChoices++;
} while (checkRange(0, 2, level) == false && levelChoices < 3);
if (level == 0) {
  maxTries= 84;
  min = 1;
  max = 100;
} else if (level == 1){
  maxTries= 64;
  min = 1;
  max = 80;
} else if (level == 2) {
  maxTries= 34;
  min = 1;
  max = 50;
}


//chiedere all'uttente un numero compreso tra il range che ha scelto e controllo le sue risposte
var findNumber = false;
while (arrayUserNumber.length < maxTries && findNumber == false){
  var userNumber = false;
  while (checkRange(min, max, userNumber) == false && isNaN(userNumber) == false) {
    var userNumber = parseInt(prompt('inserisci un numero tra 1 e 100'));
    console.log(userNumber);
  }
  if (arrayUserNumber.includes(userNumber) == false) {
    arrayUserNumber.push(userNumber);
  }
  else {
    alert('Questo numero esiste, inserisci un nuovo numero');
  }
    if (arrayComputerNumber.includes(userNumber) == true){
    message = 'Hai perso'
    findNumber = true;
  }
    else {
    points++;
  }

}
console.log(message + ' ' + points);

//--------------------
//Funzioni
//Funzione che genera un numero random
function getRandom(min, max) {
  var random = Math.floor(Math.random() * (max - min + 1) ) + min;
  return random;
}
//Funzione che controlla se un numero si trova in un certo raggiunge
function checkRange (min, max, number) {
  var result = false;
  if (number >= min && number <= max) {
    result = true;
  }
  return result;
}
