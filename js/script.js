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
while (arrayUserNumber.length < 84 && arrayUserNumber.includes(userNumber) == false){
  var userNumber = parseInt(prompt('inserisci un numero tra 1 e 100'));
  if (arrayComputerNumber.includes(computerNumber) == true) {
    alert('Hai terminato il gioco');
  }
  else if (arrayUserNumber[userNumber] == userNumber) {
    alert('Questo numero esiste, inserisci un nuovo numero');
  }
  else {
    arrayUserNumber.push(userNumber);
  }

}


function getRandom(min, max) {
  var random = Math.floor(Math.random() * (max - min + 1) ) + min;
  return random;
}
