'use strict';

// let incr = 10,
// decr = 10;

// // // ++incr;
// // // --decr;

// // // console.log(incr);
// // // console.log(decr);

// // console.log(incr++);
// // console.log(decr--);

// console.log(++incr);
// console.log(--decr);


//________________________________________________________________
// const category = 'toys';
// console.log(`https://somelink.com/${category}/5`);

// const user = 'Dv';
// alert(`Hi, ${user}`);

//________________________________________________________________
// alert('Hello');

// const result = confirm('Are you here?');
// console.log(result);

// const answer = +prompt('Are you 18 years old?', '18');
// console.log(answer + 5);

//________________________________________________________________

// let a = 15;
// console.log(a);
//________________________________________________________________
// let number = 5;
// console.log(number);
// const leftBorderWidth = 1;
// number= 10;
// console.log(number);
// console.log(leftBorderWidth);
//________________________________________________________________
// const arrObj = {

// }

// Video 35
const numbers = {
    a: 2,
    b: 3,
    c: {
        x: 7
        ,
        z: 4
    }
};

const add = {
    d: 17,
    e: 20
};

function copy (mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const newNumbers = copy(numbers);

newNumbers.a = 10;
console.log(newNumbers);
console.log(numbers);
// combine two objects 
console.log(Object.assign(numbers, add));

// here new objects will be created and I put here old object "add" to make its copy:
const clone = Object.assign({}, add); //в клоне лежит поверхностная копия предыдущего объекта
//change d:
clone.d = 21;
console.log(add);
console.log(clone);

// чтоб создать копию массива:
const oldArray = [1, 2, 3, 4, 5];
const newArray = oldArray.slice();

newArray[1] = 'gsfet';
console.log(newArray);
console.log(oldArray);

// new feature
const video = ['youtube', 'rutube', 'vimeo'],
blogs = ['wordpress', 'livejournal', 'blogger'],
internet = [...video, ...blogs, 'vk', 'facebook', 'twitter'],
internet2 = [...video];
// new array will be created
// оператор разворота

console.log(internet);
console.log(internet2);

//
function log (a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];
log(...num);

//
const qqq = {
    one: 1,
    two: 2
};
const newQqq = {...qqq};

console.log(qqq);
console.log(newQqq);


//________________________________________________________________
//отработка методов массивов
// const str = prompt("","");
// const products = str.split(", ");
// console.log(products);
// console.log(products.join("; "));
//________________________________________________________________

// // Место для первой задачи
// function sayHello(nameHuman) {
//     return "Привет, " + nameHuman + "!";

// }

// // Место для второй задачи
// function returnNeighboringNumbers(number) {
//     let arr = [];
//     arr.push(number-1);
//     arr.push(number);
//     arr.push(number+1);
//     return arr;
// }

// // Место для третьей задачи
// function getMathResult2(number1, number2) {
//     if (typeof number2 === "string" || number2<=0){
//         console.log(number1);
//     }


// }

// function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }

//     let str = '';

//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;
//             // Тут без черточек в конце
//         } else {
//             str += `${num * i}---`;
//             // Это тоже самое, что и
//             // str = str + num * i + "---"
//         }
//     }

//     return str;
// }
// console.log(getMathResult(10, 5));



// function calculateVolumeAndArea(length) {
//     if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
//         console.log(`При вычислении произошла ошибка`);
//         return "При вычислении произошла ошибка";
//     } 
//     let volume =  length * length * length;
//     let sqw = 6 * (length * length);
//     console.log(`Объем куба: ${volume}, площадь всей поверхности: ${sqw}`);
//     return `Объем куба: ${volume}, площадь всей поверхности: ${sqw}`;
    
// }
// calculateVolumeAndArea(15.5);

// // Место для второй задачи
// function getCoupeNumber() {

// }

// function calculateVolumeAndArea2(length) {
//     if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
//         return "При вычислении произошла ошибка";
//     }

//     let volume = 0,
//         area = 0;

//     volume = length * length * length;
//     // length ** 3 - это тоже самое, что и выше или варианты через цикл.
//     // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
//     area = 6 * (length * length);

//     return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// }

// calculateVolumeAndArea2(5);




//
// [ video 36
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function(){
        console.log('Hello');
    }
};

// const john = Object.create(soldier);
// or [block 
const john = {
    health: 100
};
Object.setPrototypeOf(john, soldier);
// block]

john.sayHello();
// video 36]