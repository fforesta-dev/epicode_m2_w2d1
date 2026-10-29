//ESERCIZI SUGLI IF:

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const a = 17;
const b = 42;

// Se sono uguali non c'è un più grande, quindi lo dico a parte
if (a > b) {
  console.log('Il più grande è ' + a);
} else if (b > a) {
  console.log('Il più grande è ' + b);
} else {
  console.log('Sono uguali');
}

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

const num = 12;

// L'ordine dei controlli conta. Con 3 sarebbe vero anche num < 10, ma JavaScript entra solo nel primo ramo che va bene
if (num < 5) {
  console.log('Tiny');
} else if (num < 10) {
  console.log('Small');
} else if (num < 15) {
  console.log('Medium');
} else if (num < 20) {
  console.log('Large');
} else {
  console.log('Huge');
}

//ESERCIZI SUI CICLI:

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

for (let i = 0; i <= 10; i++) {
  if (i === 3 || i === 8) {
    continue; // salta al giro successivo senza stampare
  }
  console.log(i);
}

/* ESERCIZIO 4
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare che il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

// % dà il resto della divisione: se dividendo per 2 non avanza niente, il numero è pari (anche lo 0)
for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(i + ' è pari');
  } else {
    console.log(i + ' è dispari');
  }
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const n1 = 3;
const n2 = 5;

// La sottrazione la controllo nei due versi: 11 - 3 fa 8, ma 3 - 11 fa -8
if (n1 === 8 || n2 === 8 || n1 + n2 === 8 || n1 - n2 === 8 || n2 - n1 === 8) {
  console.log('Sì, salta fuori un 8');
} else {
  console.log('No, nessun 8');
}

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

const totalShoppingCart = 60;
let spedizione;

// "Supera 50" vuol dire più di 50: con 50 esatti la spedizione si paga
if (totalShoppingCart > 50) {
  spedizione = 0;
} else {
  spedizione = 10;
}

const totaleDaPagare = totalShoppingCart + spedizione;
console.log('Totale da pagare: ' + totaleDaPagare); // 60

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e calcolando il totale.
*/

// Il 20% di sconto vuol dire pagare l'80% del prezzo
const totaleScontato = totalShoppingCart * 0.8;
let spedizioneBlackFriday;

// La soglia dei 50 la controllo sul totale già scontato, perché è quello che si paga davvero
if (totaleScontato > 50) {
  spedizioneBlackFriday = 0;
} else {
  spedizioneBlackFriday = 10;
}

const totaleBlackFriday = totaleScontato + spedizioneBlackFriday;
console.log('Totale da pagare con il Black Friday: ' + totaleBlackFriday); // 58

// Con 60 nel carrello lo sconto porta il totale a 48, sotto la soglia, e la spedizione torna a pagamento.
// Alla fine si risparmia 2 (conveniva aggiungere un altro prodotto)

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale è vero, il valore di gender deve essere "male"
*/

const isMale = true;
const gender = isMale ? 'male' : 'female'; // condizione ? valore se vera : valore se falsa
console.log(gender); // male

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

// Il controllo doppio va per primo: 15 è multiplo di 3, e se controllassi prima il 3 stamperebbe solo Fizz
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}
