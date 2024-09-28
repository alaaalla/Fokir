"use strict"
let members = document.querySelector(".num1");
let projects = document.querySelector(".num2");
let files = document.querySelector(".num3");
let linesOfCode = document.querySelector(".num4");
let counter1 = 0;
let num1 = setInterval(function () {
    counter1++;
    members.innerText = counter1;
}, 60)
setTimeout(function () {
    clearInterval(num1);
}, 2000)
let counter2 = 100;
let num2 = setInterval(function () {
    counter2++;
    projects.innerText = counter2;
}, 60)
setTimeout(function () {
    clearInterval(num2);
}, 2000)
let counter3 = 330;
let num3 = setInterval(function () {
    counter3++;
    files.innerText = counter3;
}, 60)
setTimeout(function () {
    clearInterval(num3);
}, 2000);
let counter4 = 210;
let num4 = setInterval(function () {
    counter4++;
    linesOfCode.innerText = counter4;
}, 60)
setTimeout(function () {
    clearInterval(num4);
}, 2000)