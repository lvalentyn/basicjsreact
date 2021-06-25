'use strict';

const box = document.querySelector('.box');
// const width = box.clientWidth;
// const height = box.clientHeight;
// const width = box.offsetWidth;
// const height = box.offsetHeight;
const width = box.scrollWidth;
const height = box.scrollHeight;
console.log(width, height);

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    box.style.height = `${height}px`;
    console.log(box.scrollTop);
});
console.log(box.getBoundingClientRect().top);
const style = window.getComputedStyle(box);
console.log(document.documentElement.clientWidth);