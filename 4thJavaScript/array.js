function getNumberFromUser(message) {
  let userValue;
  let flag = false;

  do {
    if (flag) {
      alert("You have to enter the number!");
    }
    userValue = +prompt(message);
    flag = true;
  } while (isNaN(userValue));

  return userValue;
}
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//1st
const itemsCount1 = getNumberFromUser(`Please enter the number:`);
const array1 = [];
for (let index = 0; index < itemsCount1; index++) {
  array1[index] = getRandomNumber(0, 1000);
  console.log(array1[index]);
}
let minimum = array1[0];
for (let i = 1; i < array1.length; i++) {
  if (array1[i] < minimum) {
    minimum = array1[i];
  }
}
console.log(`Minimum of array: ${minimum}`);

//2nd
const itemsCount2 = getNumberFromUser(`Please, enter the number:`);
const array2 = [];
for (let index = 0; index < itemsCount2; index++) {
  array2[index] = getRandomNumber(0, 1000);
  console.log(array2[index]);
}
let maximum = array2[0];
for (let i = 1; i < array2.length; i++) {
  if (array2[i] > maximum) {
    maximum = array2[i];
  }
}
console.log(`Maximum of array:${maximum}`);

//3rd
const itemsCount3 = getNumberFromUser(`Please, enter the number:`);
const array3 = [];
for (let index = 0; index < itemsCount3; index++) {
  array3[index] = getRandomNumber(0, 1000);
  console.log(array3[index]);
}
let min = array3[0];
let loc=0;
for (let i = 0; i < array3.length; i++) {
  if (array3[i] < min) {
    min = array3[i];
    loc = i;
  }
}
console.log(`Index of minimum number of array: ${loc}`);

//4th
const itemsCount4 = getNumberFromUser(`Please, enter the number:`);
const array4 = [];
for (let index = 0; index < itemsCount4; index++) {
  array4[index] = getRandomNumber(0, 1000);
  console.log(array4[index]);
}
let max = array4[0];
let loc2=0;
for (let i = 0; i < array4.length; i++) {
  if (array4[i] > max) {
    max = array4[i];
    loc2 = i;
  }
}
console.log(`Index of maximum number of array: ${loc2}`);

//5th
const itemsCount5 = getNumberFromUser(`Please, enter the number:`);
const array5 = [];
for (let index = 0; index < itemsCount5; index++) {
  array5[index] = getRandomNumber(0, 1000);
  console.log(array5[index]);
}
let sum = 0;
for (let i = 1; i < array5.length; i += 2) {
  sum = sum + array5[i];
}
console.log(`The sum of array's elements with odd indices: ${sum}`);

//6th
const itemsCount6 = getNumberFromUser(`Please, enter the number:`);
const array6 = [];
for (let index = 0; index < itemsCount6; index++) {
  array6[index] = getRandomNumber(0, 1000);
  console.log(array6[index]);
}
reverseArray(array6);
function reverseArray(array){
  let l = array.length;
  for( let i=0; i<Math.floor(l/2);i++){
    [array[i],array[l-1-i]]=[array[l-1-i],array[i]];
}
console.log(`Reverse array: ${array}` );
}


//7th
const itemsCount7 = getNumberFromUser(`Please, enter the number:`);
const array7 = [];
for (let index = 0; index < itemsCount7; index++) {
  array7[index] = getRandomNumber(0, 1000);
  console.log(array7[index]);
}
let odd_count = 0;
for (let i = 0; i < array7.length; i++) {
  if (array7[i] % 2 == 1) {
    odd_count += 1;
  }
}
console.log(`Count of the number of odd elements: ${odd_count}`);

//8th
const itemsCount8 = getNumberFromUser(`Please, enter the number:`);
const array8 = [];
for (let index = 0; index < itemsCount8; index++) {
  array8[index] = getRandomNumber(0, 1000);
  console.log(array8[index]);
}
let len = array8.length;
let temp = 0;
if(len%2==0){
  for(let i = 0; i<Math.floor(len/2);i++){
    temp = array8[i];
    array8[i] = array8[Math.floor(len/2)+i];
    array8[Math.floor(len/2)+i] = temp;
  }
}else{
  for(let i = 0; i<Math.floor(len/2);i++){
    temp = array8[i];
    array8[i] = array8[Math.floor(len/2)+i+1];
    array8[Math.floor(len/2)+i+1] = temp;
}
}
  console.log(array8);

//9th
const itemsCount9 = getNumberFromUser(`Please, enter the number:`);
const array9 = [];
for (let index = 0; index < itemsCount9; index++){
  array9[index] = getRandomNumber(0,1000);
  console.log(array9[index]);
}
bubbleSort(array9, itemsCount9);
function bubbleSort(arr,n){
  let i,j;
  for(i = 0; i < n-1; i++){
    for(j = 0 ;i < n-j-1; j++){
      if(arr[j] > arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  console.log(arr);
}

//10th
const itemsCount10 = getNumberFromUser(`Please, enter the number:`);
const array10 = [];
for(let index = 0; index < itemsCount10; index++){
  array10[index] = getRandomNumber(0,1000);
  console.log(array10[index]);
}
selectionSort(array10, itemsCount10);
console.log(array10);
function selectionSort(arr, n){
  let i,j, max_idx;
  for(i = 0; i<n-1; i++){
    max_idx = i;
    for(j = i+1; j<n; j++ ){
      if(arr[j] > arr[max_idx])
        max_idx = j;
      }

      let temp = arr[max_idx];
      arr[max_idx] = arr[i];
      arr[i] = temp;
        
    
  }
}