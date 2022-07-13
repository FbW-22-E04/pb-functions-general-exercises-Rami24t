//1.
 function showTripleLog(input) {
for(i=0;i<3;i++)
console.log(input)
}

showTripleLog('Game');

//2.
 function showFiveLog(input) {
for(i=0;i<5;i++)
console.log(input)
}

showFiveLog('5');

//3.
function repeat(aNumber, aString){
repeatedString = '';
for(i=0;i<aNumber;i++)
repeatedString += aString;
return repeatedString;
}

repeat(3, 'Woah');

//4.

function findLargestInArray(array){
return Math.max(...array);
}

findLargestInArray([1,6,83,91,0,-4,1337,5]);

//5. a&b

function printIfDivisibleByTen(num){
if(num%10==0)
console.log("Even 10!");
}

for(i=0;i<125;i++)
printIfDivisibleByTen(i);


//6.
const maxFive = (num1,num2,num3,num4,num5) => {
return Math.max(num1,num2,num3,num4,num5);
}

maxFive(987,765,456,321,123);


//7.
const checkIsString = (string1) => {
return (typeof string1 == "string")
}
checkIsString('200');

//8.
const checkIsString2 = (string1, string2) => {
return (typeof string1 == "string" && typeof string2 == "string")
}
checkIsString2('200',2);

//9.
const sliceFirstWord = (string1) => {
return string1.slice(0,string1.indexOf(' '));
}

sliceFirstWord("Hello World, it's me. I've been wondering after all these years if you wanna meet to go over...");

// HARD Write an arrow function that takes in one string. The function should return a new string that where each word in the input string is repeated by the amount of words in the input string.
//10. 
wordRepeater = (string1) => {
    array1 = string1.split(' ');
    repeatNum = array1.length;
    string2 = [];
    for(i=0;i<repeatNum;i++)
      {
        for(j=0;j<repeatNum;j++)
         string2.push(array1[i])
          };
    string2 = string2.join(' ');
    return string2;
    }
    
    console.log(wordRepeater('HOW ARE YOU !!!!'));

// Write a short (single line) arrow function that takes in one string and returns the first character of that string. Examples:
// firstLetter("cat") --> "c"
// firstLetter("quylthulg") --> "q"

const firstCharOf = string1 => string1[0];

// Write an arrow function that takes in one string and returns a new string. The new string needs to be made from the first letter of each of the words in the input. Examples:
// firstLetters("MongoDB Express Node React") --> "MERN"
// firstLetters("What You See Is What You Get") --> "WYSIWYG"

const firstLetters = (string1) => {
    let string2 = string1.split(' ');
    string2.forEach(element => {
    string2[string2.indexOf(element)] = element[0];});
    return string2.join('');
}
// console.log(firstLetters("What You See Is What You Get"));

// Write an arrow function that takes in one variable. If that variables is a string, it will return the length of the string. If that variable is an array, it returns the length of the array. If it is something else, it will return null. You might need to search Google to find out how can you identify if the parameter is an array - but there are other ways to solve this too!
const lengthOf = variable1 => variable1.length==0 ? 0 : variable1.length||null;
// console.log(lengthOf('534'));

// Write an arrow function that takes in one variable. If the variable is not a string, return null. If it is a string, return an array where each of the characters of that string is in individual array entry. Examples:
// explode("Cat") --> ["C", "a", "t"]
// explode(41) --> null
// explode("") --> []
// explode("R & D") --> ["R", " ", "&", " ", "D"]
const explode = (string1) => typeof string1 == "string" ? string1.split("") : null;
// console.log(explode('R & D'));

// Reverse engineering challenge 1. Write a function that does this (BONUS: write it as a short (one line) arrow function):

// foo("") -> false
// foo("a") -> false
// foo("o") -> true
// foo("Cat") -> false
// foo("Tomato") -> true
// foo("Potato") -> true
// foo("Blanket") -> false
// foo("1") -> false

const foo = string1 => string1.slice(-1)=='o';
// console.log(foo(""),foo("a"),foo("o"),foo("Cat"),foo("Tomato"),foo("Potato"),foo("Blanket"),foo("1"));


// Reverse engineering challenge 2. Write a function that does this (BONUS: write it as a short (one line) arrow function):

// bar("") --> "Cat"
// bar("x") --> "Cat"
// bar("Cat") --> "Catt"
// bar("Foobar") --> "Catobar"
// bar("Potato") --> "Cattato"
// bar("Tomato") --> "Catmato"
// bar("International Space Station") --> "Catternational Space Station"
// splice

const bar = string1 =>  'Cat' + string1.slice(2);
// console.log(bar(""),bar("x"),bar("Cat"),bar("Foobar"),bar("Potato"),bar("Tomato"),bar("International Space Station"));

