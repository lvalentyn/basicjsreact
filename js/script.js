'use strict';

// --------------------------------------------------
// ---------------- lesson 45 -----------------------
// --------------------------------------------------
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log(`Hello ${this.name}`)
//     }
// }
// User.prototype.exit = function () {
//     console.log(`User ${this.name} was exit`);
// }
// const ivan = new User('Ivan', 28);
// const alex = new User('Alex', 20);
// ivan.exit();
// alex.exit();
// ivan.hello();
// alex.hello();
// console.log(ivan);
// console.log(alex);
// --------------------------------------------------
// ---------------- lesson 46 -----------------------
// --------------------------------------------------
// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);
// const obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }
// let ivan = new User('Ivan', 23);
// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
//     console.log(this.age);
// }
// const user = {
//     name: 'John',
//     age: '50'
// };

// sayName.call(user, ' Addams');
// sayName.apply(user, [' Smith']);

// function count(num) {
//     return this * num
// }
// const double = count.bind(3);/* передается в this */
// console.log(double(5));/* передается в Num */
// 1) Обычная функция: this = window, но если use strict - undefined
// 2) Контекст у методов обьекта - это и будет сам обьект
// 3) this в конструкторах и классах - это новый экземпляр обьекта
// 4) Ручная привязка this: call, applay, bind
// const btn = document.querySelector('button');
// btn.addEventListener('click', (e) => {
//     e.target.style.backgroundColor = 'red';
// });
// const obj = {
//     num: 5,
//     sayNumber: function () {
//         const say = () => {
//             console.log(this.num);
//         };
//         say();
//     }
// };
// obj.sayNumber();

// const double = a => a * 2;
// console.log(double(3));
// --------------------------------------------------
// ---------------- lesson 47 -----------------------
// --------------------------------------------------
// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
//     calcArea() {
//         return this.height * this.width;
//     }
// }
// class ColoredRactangleWithtext extends Rectangle {
//     constructor(height, width, text, bgColor) {
//         super(height, width);
//         this.text = text;
//         this.bgColor = bgColor;
//     }
//     showMyProps() {
//         console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
//     }
// }
// const div = new ColoredRactangleWithtext(20, 20, 'Hiiii', 'red');
// const square = new ColoredRactangleWithtext(10, 20);
// const long = new Rectangle(40, 20);
// console.log(square.showMyProps());
// div.showMyProps();
// console.log(div.calcArea());