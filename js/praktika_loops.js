'use strict';

// Место для первой задачи
function firstTask() {
	// Пишем решение вот тут
	for (let i = 5; i <= 10; i++){
		console.log(i);
	}
}
firstTask();

// Место для второй задачи
function secondTask() {
	// Пишем решение вот тут
	for (let i = 20; i > 9; i--){
		console.log(i);
		if (i === 13){
			break;
		}
        
	}
}
secondTask();

// Место для третьей задачи
function thirdTask() {
	// Пишем решение вот тут
	for (let i = 1; i <= 10; i++){
		if (i % 2 === 0){
			console.log(i);
		}
	}
}

thirdTask();

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask5() {    //бесконечный цикл!!!
	let i = 1;
	// Пишем решение вот тут
	while (i <= 16) {
		if (i % 2 === 1) {
			console.log(i);
		} 
        i++;
	} 
    
}
fourthTask5();


// function fourthTask2() {    бесконечный цикл!!!
// 	// Пишем решение вот тут

//     do{
//         if (i % 2 === 0) {
// 			continue;
// 		} else {
// 			console.log(i);
// 		}
//         i++;
//     }
//     while(i <= 16);
// }
// fourthTask2();

function fourthTask3() {
    let i = 2;

    while (i <= 16) {
        if (i % 2 === 0) {
            i++;
            continue;
        } else {
            console.log(i);
        }
        i++;
    }
}

fourthTask3();


let text = "";
let i = 0;

do {
  text += "<br>The number is " + i;
  console.log(text);
  i++;
}
while (i < 10);

console.log(text);

// Место для пятой задачи

function fifthTask() {
	const arrayOfNumbers = [];

	// Пишем решение вот тут
	for (let i = 5; i < 10; i++){
        arrayOfNumbers[i-5] = i;
	}
	console.log(arrayOfNumbers);
	// Не трогаем
	return arrayOfNumbers;
}

fifthTask();

fifthTask();
secondTask();
thirdTask();


// for (let i = 0; i < 3; i++) {
// 	console.log(i);
// }


// for (let i = 5; i <= 10; i++){
//     console.log(i);
// }


// let result = '';
// const lengthIter = 7;

// for (let i = 1; i < lengthIter; i++) {
// 	for (let j = 0; j < i; j++) {
// 		result += '*';
// 	}
// 	result += '\n';
// }
// console.log(result);




// let num = 48;

// // (num === 50) ? console.log('Ok!') : console.log('Invalid');

// switch (num){
// case 49:
// 	console.log('Too low');
// 	break;
// case 50:
// 	console.log('OK');
// 	break;
// case 51:
// 	console.log('Too much');
// 	break;
// default:
// 	console.log('Not in this time');
// 	break;
// }



const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	}
};

console.log(Object.keys(options).length);
console.log(Object.keys(options));
options.forEach(function(keys, i, options){
	console.log(keys);
});


const arr = [1,2,3,6,8,10];

arr.forEach(function(item, i, arr){
	console.log(`${i}: ${item} inside ${arr}`);
});

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

for (let value of arr) {
	console.log(value);
}