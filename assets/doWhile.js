/*Opgave 1
Du skal lave to let-variabler. Den første variable skal hedde text og sættes til en tom tekststreng
Den anden variable skal hedde i og sættes til 0. 
Skriv variablerne her: */

let text = "";
let i = 0;

/* Her skal du skrive en while statement med betingelserne i < 10. 
Du skal sætte variablen text ind i statementen og tillægge en tekststreng med teksten "<br>The number is" og plus i.
Derefter skal i inctrementes. */

while (i < 10) {
  text += "<br>The number is " + i;
  i++;
}

/* Nedeunder while statementen, skal variablen text sættes på HTML-elementet med id'et "while" ved hjælpe af innerHTML*/

let whileLoop = document.querySelector("#while");

whileLoop.innerHTML = `${text}`;

/*Opgave 2 
Du skal lave to let-variabler. Den første variable skal hedde besked og sættes til en tom tekststreng
Den anden variable skal hedde K og sættes til 0. 
Skriv variablerne her:*/

let besked = "";
let k = 0;

/* Her skal du skrive en do statement. 
Du skal sætte variablen besked ind i statementen og tillægge K plus en tekststreng med teksten "<br>".
Derefter skal K inctrementes. Udenfor do statementen, skal du skrive en while statement med betingelserne K < 5. 
Inde i while statementen skal variablen besked sættes på HTML-elementet med id'et "doWhile" ved hjælpe af innerHTML*/

do {
  besked += k + "<br>";
  k++;
} while (k < 5);
let doW = document.querySelector("#doWhile");
doW.innerHTML = `${besked}`;
