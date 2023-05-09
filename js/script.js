"use strict";

const box = document.getElementById('box');

console.log(box);
box.style.backgroundColor = 'blue';

const div = document.createElement('div');
div.classList.add('black');
document.body.append(div);
div.innerHTML = 'Hello World!';