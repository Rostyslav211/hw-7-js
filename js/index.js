//  Завдання 1
const numbersArray = [1, 2, 3];
numbersArray [2] =  10;
console.log(numbersArray);

// Завдання 2

const nameArray =["Oleg", "Igor", "Ivan"];
nameArray.push = ["Sasha"];
console.log(nameArray);

// Завдання 3

const fruitsArray = ["apple", "pear", "grape", "banana", "blueberry"];
console.log(fruitsArray.length);

// Завдання 4

const numArray = [1, 2, 3, 4, 5];

for (let i = 0; i < numArray.length; i++) {
    console.log(numArray[i]);
}

// Завдання 5

const stringsArray = ["Helloo", "five", "No", "Good","apple"]

for (let i = 0; i < stringsArray.length; i++) {
   

   if (stringsArray[i].length > 5) {
    console.log(stringsArray[i]);
   }

}

// Завдання 6

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  
let maxNum = 0;


for (let i = 0; i < numArr.length; i++) {
    const element = numArr[i]
    
    if(element > maxNum){
        maxNum = element 
        
    }
}
console.log(maxNum);

// Завдання7


const numsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]
let evenNumbers = [];

for (let i = 0; i < numsArray.length; i++) {
    const element = numsArray[i];
    if (element % 2 === 0) {
        evenNumbers.push(element);
    }
    
}
console.log(evenNumbers);



