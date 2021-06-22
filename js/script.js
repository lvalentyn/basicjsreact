'use strict';
let start = new Date();
for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}
let end = new Date();

alert(`Cycle has been ${end - start} ms`)
// const btn = document.querySelector('.btn');

// function myAnimation() {
//     const elem = document.querySelector('.box');
//     let pos = 0;
//     const id = setInterval(frame, 10);
//     function frame() {
//         if (pos === 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + 'px';
//             elem.style.left = pos + 'px';
//         }
//     }
// }
// btn.addEventListener('click', myAnimation);