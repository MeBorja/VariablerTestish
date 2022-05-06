//GURNNLEGENDE ARRAY
//1) 
// a)Array er et på en måte liste av ord og tall.
// b)In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods
// src: https://developer.mozilla.org/en-US/docs/Glossary/Primitive

//2)
//a)
const names = [];
//b)
names.push("Ilja", "Pawel", "Birk", "Max", "Espen", "Johan", "Adrian", "Matija", "Geir", "Jesus");
//c)
console.log(names[2])
console.log(names[5])
console.log(names[8])
//3)
//a) An item in a JavaScript array is accessed by referring to the index number of the item in square brackets src:https://www.digitalocean.com/community/tutorials/understanding-arrays-in-javascript
//b) 0
//c) array kan være så langt som vi vil
//d) det betyr hvor mange ting har du i array
//e) siste array har et tal som eks: 5 men når du skriver array.lenght sier det hvor mange du har ting i array som blir da 6 siden den teller med 0.
console.log(names.length)
//4)
//a) 
console.log(typeof names)
// den skriver ut object
//dette er svar på B og C
function isARAY(bruh){
    console.log("Array = ", Array.isArray(bruh))

}
isARAY(names)

//AVANSERT ARRAY

//1)
const liste = ['a','b','c']
const liste2 = liste;
liste[0] = 1;
console.log(liste[2]);
//den skriver ut c på grunn av liste[0] =1;, liste[0] =1; betyr at a blir byttet ut med 1 og det forandrer ikke på placement av array
//2) 
const globalArray= ['a','b','c'];
changeArray(globalArray);
console.log(globalArray[0]);
function changeArray(arrayArg) {
    if(Array.isArray(arrayArg) && arrayArg.length>0){
        arrayArg[0] ='NY VERDI';
    }
}
//Den skrev ut NY VERDI siden for at if skulle fungere trenger den av array er et array og at array har mer enn 1 inhold. function er hoistet og derfor console log skriver ut NY VERDI
//3)
//a)
// It means that JavaScript copies the values of the variables into the function arguments. Any changes that you make to the arguments inside the function do not reflect the passing variables outside of the function.
//src: https://www.javascripttutorial.net/javascript-pass-by-value/#:~:text=JavaScript%20pass-by-value%20or%20pass-by-reference&text=It%20means%20that%20JavaScript%20copies,variables%20outside%20of%20the%20function.
//A deep copy means that all of the values of the new variable are copied and disconnected from the original variable
//src: https://www.freecodecamp.org/news/copying-stuff-in-javascript-how-to-differentiate-between-deep-and-shallow-copies-b6d8c1ef09cd/#:~:text=A%20deep%20copy%20means%20that,into%20how%20JavaScript%20stores%20values.
//EXEMPEL:

function square(x) {
    x = x * x;
    return x;
}

let y = 10;
let result = square(y);

console.log(result); // 100 
console.log(y); // 10 -- no change

//b)
const listeAvTall = ['1','2','3']
function plusAvTall(masseTall){
    svar = masseTall[0] + masseTall[1] + masseTall[2]
    console.log("dypp kopi av array = ", svar)
}
plusAvTall(listeAvTall);
