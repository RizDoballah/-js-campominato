// Campo Minato
// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire per 84 volte un numero da 1 a 100, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato”, ovvero presente nella lista di numeri random, o raggiunge il numero massimo possibile di tentativi consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito

var arrayComputerNumber = [];
while (arrayComputerNumber.length < 16){
  var computerNumber = getRandom(1, 100);
  if (arrayComputerNumber.includes(computerNumber) == false) {
    arrayComputerNumber.push(computerNumber);
  }
}
console.log(arrayComputerNumber);

var arrayUserNumber = [];
var maxTries = 5;
var points = 0;
var message = 'Hai vinto';
var min;
var max;
var difficulty = 0;



var findNumber = false;
while (arrayUserNumber.length < maxTries && findNumber == false){
  var userNumber = false;
  while (checkRange(1, 100, userNumber) == false) {
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
