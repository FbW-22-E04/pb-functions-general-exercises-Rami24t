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
