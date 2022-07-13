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
 maxFive = (num1,num2,num3,num4,num5) => {
return Math.max(num1,num2,num3,num4,num5);
}

maxFive(987,765,456,321,123);


//7.
 checkIsString = (string1) => {
return (typeof string1 == "string")
}
checkIsString('200');

//8.
 checkIsString2 = (string1, string2) => {
return (typeof string1 == "string" && typeof string2 == "string")
}
checkIsString2('200',2);

//9.
sliceFirstWord = (string1) => {
return string1.slice(0,string1.indexOf(' '));
}

sliceFirstWord("Hello, it's me. I've been wondering after all these years if you wanna meet to go over...");
