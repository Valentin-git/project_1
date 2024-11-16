// 8 -----------------------------------------------------
// 9 -----------------------------------------------------
// 10 -----------------------------------------------------
// HW 1 ---------------------------------------------------
// 11 -----------------------------------------------------
// 12 -----------------------------------------------------
// 13 -----------------------------------------------------
// Test ---------------------------------------------------
// 14 -----------------------------------------------------
// HW 2 ---------------------------------------------------

// let x = 2;
// let isOdd;

// if (x % 2 == 0) {
//    isOdd = false;
//    console.log(isOdd);
// } else  {
//    isOdd = true;
//    console.log(isOdd);
// }

// 15 -----------------------------------------------------
// 16 -----------------------------------------------------
// HW 3 ---------------------------------------------------

// Задание 1
// const spainCapital = 'Valencia';
// let isCorrectAnswer;

// if (spainCapital === 'Madrid') {
//     isCorrectAnswer = true;
// } else if (spainCapital === 'madrid') {
//     isCorrectAnswer = true;
// } else if (spainCapital === 'MADRID') {
//     isCorrectAnswer = true;
// } else {
//     isCorrectAnswer = false;
// }


// switch(spainCapital) {
//    case 'Madrid':
//       isCorrectAnswer = true;
//       console.log('Madrid');
//       break;
//    case 'madrid':
//       isCorrectAnswer = true;
//       console.log('madrid');
//       break;
//    case 'MADRID':
//       isCorrectAnswer = true;
//       console.log('MADRID');
//       break;
//    default:
//       isCorrectAnswer = false;
//       console.log('No');
// }

// Задание 2
// const a = 1;
// const b = 2;
// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

// result = a + b < 4 ? 'Мало' : 'Много';


// HW 4 ---------------------------------------------------

// const numbers = [1, 2, 3];

// let luckyNumber = numbers[2];

// numbers.pop();
// numbers.push(23, 65);

// console.log(numbers);


// 16 -----------------------------------------------------
// HW 5 ---------------------------------------------------

// Дан массив чисел. В цикле while обойдите массив и значения всех элементов с нечетным индексом умножьте на 2. Значения элементов с четным индексом должны остаться без изменения.

// const numbers = [2, 7, 19, 22, 38, 9, 11, 10, 10];
// let index = 0; 

// while(index < numbers.length) {
//    if (index % 2 == 1) {
//       numbers[index] *= 2;
//       console.log(numbers[index]);
//    }
//    index++;
// }

// console.log('END');

// 18 -----------------------------------------------------
// HW 6 ---------------------------------------------------

// const numbers = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < numbers.length; i++ ) {
//    if (i % 2 == 0) {
//       numbers[i] += 3
//       console.log(numbers[i]);
//    }
// }

// 19 -----------------------------------------------------
// 20 -----------------------------------------------------

// for (let i = 1; i < 10; i++) {
//    if (i % 2 === 0) continue;

//    console.log(i);
// }

// console.log('END');

// HW 7 ---------------------------------------------------

// const numbers = [1, 2, 2, 13, 11, 7, 18, 20, 22, 14, 15];
//
// const evenNumbers = [];
//
// for (let i = 0; i < numbers.length; i++) {
//    if (numbers[i] % 2 === 0) {
//       evenNumbers.push(numbers[i]);
//    }
//    if (evenNumbers.length === 3) {
//       console.log(evenNumbers);
//       break;
//    }
//
// }
//
// console.log(evenNumbers);

// 21 -----------------------------------------------------
// HW 8 ---------------------------------------------------

// 1
// function multiply(a, b, c) {
//     return a * b * c;
// }
//
// console.log(multiply(1, 2, 1));
//
// // 2
// function euroToRub(e) {
//     return e * 90;
// }
//
// console.log(euroToRub(1));
//
// // 3
// function milesToKm(m) {
//     return m * 1.609;
// }
//
// console.log(milesToKm(1));

// 22 -----------------------------------------------------
// Math.ceil() округление
// Math.round() случайное число
// Math.ceil(Math.round() * 10)

// 23 Угадай число ---------------------------------------------------
// HW 9 ---------------------------------------------------
// // const secretHum = Math.ceil(Math.round() * 10);
// const secretHum = 5;
// let tries = 0;
//
// function guessNum(num) {
//     if (tries === 5) {
//         alert('Игра окончена');
//         return;
//     }
//     if (num === secretHum) {
//         alert('Угадал число');
//         tries = 5;
//     } else {
//         alert('Не угадал число');
//         tries++;
//     }
//
//
//  }
// 25 -----------------------------------------------------
// 26 -----------------------------------------------------
// 27 -----------------------------------------------------
// HW 10 ---------------------------------------------------

// const dog = {
//     name: 'Vasya',
//     age: 26,
//     color: 'red',
//     weight: 89,
// }
//
// dog.breed = 'malamute';
//
// console.log(dog);

// 28 -----------------------------------------------------
// 29 -----------------------------------------------------
// 30 -----------------------------------------------------
// HW 11 ---------------------------------------------------

// const htmlDiv = {
//     className: 'column',
//     rel: 'main',
//     id: 'block',
// };
//
// for (let prop in htmlDiv) {
//     console.log(htmlDiv[prop]);
// }

// 31 -----------------------------------------------------
// 32 -----------------------------------------------------

// const developer = {
//     name: 'Vasiliy',
//     surname: 'Petrov',
//     age: 30,
//     skills: ['JavaScript', 'React', 'TypeScript', 'CSS'],
//     isMaried: false,
//     addAge() {
//         this.age++;
//         console.log(this);
//     },
// };
// developer.addAge();

// HW 12 ---------------------------------------------------

// const person = {
//     name: 'Anna',
//     surname: 'Dance',
//     age: 18,
//     greeting() {
//         console.log('Hello')
//     },
//     changeSurname(a) {
//         console.log(this.surname = a);
//     }
// }
// console.log(person);
// person.greeting();
// person.changeSurname('Jone');

// 33 -----------------------------------------------------

// const str = 'Hello, World!';
// console.log(str.toLowerCase()); // hello world
// console.log(str.toUpperCase()); // HELLO WORLD
//
// console.log(str.includes('Hello')); // true
// console.log(str.includes('js')); // false
//
// console.log(str.toLowerCase().includes('hello'));
//
// console.log(str.slice(0, 5)); // Hello
// console.log(str.slice(6)); // World
//
// console.log(str.split(' ')); // 'Hello,', 'World!'
// console.log(str.split(' ').join(' | ')); // Hello, | World!

// 34 -----------------------------------------------------

// const num = 1180000.15555;
// console.log(num.toFixed(2)); // 1180000.16
//
// console.log(num.toLocaleString('uk-UK'));

// HW 13 ---------------------------------------------------

// 1) Даны две строки correctAnswer и userAnswer. Необходимо привести обе строки к нижнему регистру и проверить содержит ли userAnswer в себе строку correctAnswer. Булевый ответ сохранить в переменную isCorrect.
//
// 2) Дана переменная salary с числовым значением. Необходимо создать переменную salaryFixed, в которой исходное числовое значение округлено до двух знаков после запятой.

// 1
// const correctAnswer = 'JavaScript';
// const userAnswer = ' javaScript! ';
// let isCorrect; // TODO: сохранить true или false в зависимости от выполнения условия по заданию 1.
//
// isCorrect = userAnswer.toLowerCase().includes(correctAnswer);
//
// console.log(correctAnswer.toLowerCase());
// console.log(isCorrect);
//
// // 2.
// let salary = 15000.2085;
// let salaryFixed = salary.toFixed(2);
//
// console.log(salaryFixed);


// --------------
// 1.
// const correctAnswer = 'JavaScript';
// const userAnswer = ' javaScript! ';
// let isCorrect // сохранить true или false в зависимости от выполнения условия по заданию 1.
//
// correctAnswer.toLowerCase();
// userAnswer.toLowerCase().includes(correctAnswer);
//
// isCorrect = Boolean(userAnswer);
//
// // 2.
// const salary = 15000.2085;
// const salaryFixed = salary.toFixed(2);


// 35 -----------------------------------------------------
// const numbers = [1, 2, 3, 4];
//
// // pop, push
// // shift, unshift
//
// console.log(numbers.includes(4)); // true
// numbers.indexOf(2) // 1
// numbers.indexOf(9) // -1
//
// console.log(numbers.slice(0, 2)) // [1, 2]
//
// const num2 = numbers.concat([5, 7, 8]); // [1, 2, 3, 4, 5, 6, 7];
// console.log(num2);
//
// console.log(numbers.join(', '));

// HW 14 ---------------------------------------------------

// 1) Дан массив fruits. Используя встроенный метод массива, определите есть ли в массиве значение 'orange' и ответ сохраните в константу hasOrange.

// 2) Дан массив cars. Используя встроенный метод массива, выберите из него первые три значения и сохраните их в константу favoriteCars.
//
// 3) Создайте константу otherCars, сохранив в нее оставшиеся три значения из исходного массива cars.

// // 1
// const fruits = ['apple', 'banana', 'melon', 'orange'];
// let hasOrange // сохранить булевое значение соответствующее наличию 'orange' в массиве fruits
//
// hasOrange = fruits.includes('orange');
// console.log(hasOrange);
//
// // 2
// const cars = ['BMW', 'Nissan', 'VW', 'Skoda', 'Audi', 'Kia'];
// let favoriteCars // сохраните в эту переменную первые три значения из массива cars
//
// favoriteCars = cars.slice(0, 3);
// console.log(favoriteCars);
//
// // 3
// let otherCars // сохраните в эту константу три последних значения из массива cars
//
// otherCars = cars.slice(3, 6);
// console.log(otherCars);

// 36 -----------------------------------------------------
// // errors
// function sum(a, b) {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         throw new Error('В функцию не переданы числа для сложения');
//     }
//     return a + b;
// }
//
// try {
//     sum();
//     console.log('not seen');
// } catch (err) {
//     console.error(err.message);
// }
//
// console.log('end')
// 37 -----------------------------------------------------
// RegExp

// const regex1 = /\w+/;
// const regex2 = new RegExp('\\w+');
//
// const str = 'JavaScript is cool language. Everybody should learn JavaScript.';
// console.log(/javascript/i.test(str));
//
// console.log(str.replace(/javaScript/gi, 'php'));
//
// console.log(str.match(/js/ig));

// 38 Проект "Загадки" -----------------------------------------------------
// HW 15 ------------------------------------------------------------------------

// Опишите метод checkAnswer объекта riddle, поместив в него в логику проверки правильного ответа на загадку.
// Должны соблюдаться следующие условия:
// 1. В случае правильного ответа выдать пользователю сообщение "Правильный ответ" (в alert и console.log)
// 2. В случае неправильного ответа выдать пользователю сообщение "Неправильный ответ"
// 3. В случае окончания попыток выдать пользователю сообщение "Игра окончена"
// Дополнительно (по желанию - не проверяется автотестами):
// - предоставьте пользователю подсказки в случае неправильного ответа
// - подсказки предлагаются после первых двух неправильных ответов
// - после третьего неправильного ответа подсказка не нужна (как вариант, можно сообщить правильный ответ)

// const riddle = {
//     question: 'Висит груша нельзя скушать',
//     correctAnswer: 'лампочка',
//     hints: ['это съедобное', 'это фрукт'],
//     tries: 3,
//     checkAnswer(str) {
// //     checkAnswer(guessedAnswer) {
// //         // написать логику проверки правильного ответа
// //         if (this.tries === 0) {
// //             alert(`Игра окончена\nПравильный ответ: ${this.correctAnswer}`);
// //             console.log(`Игра окончена\nПравильный ответ: ${this.correctAnswer}`);
// //             return;
// //         }
// //         if (guessedAnswer === this.correctAnswer) {
// //             alert('Правильный ответ');
// //             console.log('Правильный ответ');
// //         } else {
// //             alert(`Неправильный ответ\nOсталось попыток: ${this.tries}`);
// //             console.log(`Неправильный\nOсталось попыток: ответ ${this.tries}`);
// //             this.tries--;
// //
// //             if (this.tries === 2) {
// //                 alert(this.hints[0]);
// //             } else if (this.tries === 1) {
// //                 alert(this.hints[1]);
// //             }
// //         }
//         // 2
//         if (this.tries < 1) {
//             console.log('Игра окончена');
//             return alert('Игра окончена');
//         }
//
//         if (str.toLowerCase().includes(this.correctAnswer)) {
//             alert('Правильный ответ');
//             console.log('Правильный ответ');
//             this.tries = 0;
//         } else {
//             alert('Неправильный ответ');
//             console.log('Неправильный ответ');
//             this.tries--;
//
//             const hint = this.hints[this.tries === 2 ? 0 : 1];
//
//             if (this.tries) {
//                 alert('Подсказка: ' + hint);
//             }
//         }
//     },
// }
//
// window.onload = function () {
//     document.getElementById('riddle').innerText = riddle.question;
// }
//
// function check() {
//     const input = document.getElementsByTagName('input')[0];
//
//     const guessedAnswer = input.value;
//
//     if (guessedAnswer) {
//         // вызвать функцию checkAnser у объекта загадки, передав туда ответ
//         riddle.checkAnswer(guessedAnswer);
//     }
// }


// 37 -----------------------------------------------------
// 38 -----------------------------------------------------
// 39 -----------------------------------------------------
// 40 -----------------------------------------------------
// 41 -----------------------------------------------------
// 42 -----------------------------------------------------
// 43 -----------------------------------------------------
// 44 -----------------------------------------------------

// // 1. Function Declaration
// function sum(a, b) {
//     return a + b;
// }
//
// // 2. Function Expression
// const sum2 = function (a, b) {
//     return a + b;
// }
//
// // 3. IIFE (Immediately-invoked function expression)
// (function (a, b) {
//     return a + b;
// }) (5, 34)
//
// // 4. Arrow function
// const sum3 = (a, b) => {
//     return a + b;
// }
// const sum4 = (a, b) => a + b;
// const add1 = x => x + 1;

// HW 16 ------------------------------------------------------------------------

// const average = function (a, b, c, d) {
//     return (a + b + c + d)  / 4;
// }
//
// console.log(average(2, 3, 2, 3));

// HW 17 ------------------------------------------------------------------------

// 1
// const square = x => x * x;
// console.log(square(4));
//
// // 2
// const multiply = (a, b) => {
//     return a * b;
// }
//
// // 3
// const checkAge = (age) => {
//     if (age >= 18) {
//         return console.log('welcome')
//     } else {
//         return console.log('access denied')
//     }
// }
//
// checkAge(19);

// 45 -----------------------------------------------------
// 46 -----------------------------------------------------

// function copyArrayAndDoSmth(arr, instructions) {
//     const output = [];
//
//     for (let i = 0; i < arr.length; i++) {
//         output.push(instructions(arr[i]));
//     }
//
//     return output;
// }
//
// function numSquared(num) {
//     return num * num;
// }
// function divideBy2(num) {
//     return num / 2;
// }
//
// const result = copyArrayAndDoSmth([1, 2, 3], numSquared);
// const result2 = copyArrayAndDoSmth([10, 20, 30], divideBy2);
//
// console.log(result);
// console.log(result2);

// HW 18 ------------------------------------------------------------------------

// Практика по созданию функций высшего порядка
// Создайте функции-колбэки isOdd и isEven.  Обе принимают число, и возвращают true, соответственно, isOdd если переданное число нечетное, а isEven - когда число четное. В противном случае функции возвращают false.
//
// Примеры:
//
// - isOdd(5) // true
// - isOdd(4) // false
// - isEven(4) // true
// - isEven(5) // false
//
// Вызовите функцию filterArray два раза. Первый раз, передав ему массив numbers и колбэк isOdd. Второй раз - массив numbers и колбэк isEven.
// version 1
// function isOdd(num) {
//     if (num % 2 == 1) {
//         return true;
//     } else {
//         return false;
//     }
// }
//
// isOdd(5) // true
// isOdd(4) // false
//
// function isEven(num) {
//     if (num % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
//
// isEven(4) // true
// isEven(5) // false
//
// function filterArray(arr, instructions) {
//     const numbers = [];
//
//     for (let i = 0; i < arr.length; i++) {
//         if (instructions(arr[i])) {
//             numbers.push((arr[i]));
//         }
//     }
//
//     return numbers;
// }
//
// const result =  filterArray(numbers, isOdd);
// const result2 =  filterArray([1, 3, 4], isEven);
//
//
// console.log(result);
// console.log(result2);

// -----------------
// version 2
// function filterArray(array, callback) {
//     const newArray = [];
//     for (let i = 0; i < array.length; i += 1) {
//         if (callback(array[i])) newArray.push(array[i]);
//     }
//     return newArray;
// }
// const numbers = [1, 2, 3, 4, 5];
//
// function isOdd(num) {
//     return num % 2 === 1;
// }
// function isEven(num) {
//     return num % 2 === 0;
// }
//
// // Для проверки используйте логи (раскомментируйте их после написания функций)
// console.log(filterArray(numbers, isEven)); // Должен вывести: [2, 4]
// console.log(filterArray(numbers, isOdd)); // Должен вывести: [1, 3, 5]

// 47 -----------------------------------------------------

// function factorial(n) {
//     if (n === 0) return 1;
//
//     return n * factorial(n - 1);
// }
//
// console.log(factorial(3)); // 3 * 2 * 1

///////

// let counter = 0;
//
// function repeater(char) {
//     counter++;
//
//     if (counter === 5) {
//         counter = 0;
//         return char;
//     }
//
//     return char + repeater(char);
// }
//
// console.log(repeater('x'));
// console.log(repeater('a2'));

// HW 19 ------------------------------------------------------------------------
// Напишите функцию getLength, которая в качестве параметра будет принимать массив и рекурсивно высчитывать его длину (количество элементов).
//
// По условию задачи нельзя использовать встроенное свойство length массива.
//
// Используйте метод pop для удаления элементов массива, чтобы подсчитать итоговое количество.

// function getLength(arr) {
//     // Базовый случай: если массив пуст, вернем 0
//     if (arr.pop() === undefined) return 0;
//
//     // Увеличиваем счетчик на 1 при каждом вызове и продолжаем рекурсию
//     return 1 + getLength(arr);
// }
//
// const arr = [1, 3, 4, 8, 9];
// console.log(getLength([...arr])); // Выведет 5, массив копируется, чтобы избежать изменения оригинала


// 1. Базовый случай: Если pop() возвращает undefined, это значит, что массив пустой, и мы возвращаем 0.
// 2. Рекурсивный вызов: Каждый раз, когда pop() удаляет элемент, добавляется 1 к общему счетчику.
// 3. Счетчик: Суммируем 1 при каждом рекурсивном вызове, пока массив не станет пустым.
// Так мы обходимся без использования свойства length, проверяя пустоту массива с помощью pop().

// 48 -----------------------------------------------------

// function hello(name) {
//     const helloName = () => console.log('hello', name);
//
//     return helloName();
// }
//
// const helloWorld = hello('world');
// helloWorld();
//
//
// const helloJohn = hello('John');
// helloJohn();

///////////////////

// function outer() {
//     let counter = 0;
//
//     function incrementCounter() {
//         console.log(++counter);
//     }
//
//     return incrementCounter;
// }
//
// const myCounter1 = outer();
// myCounter1();
// myCounter1();
// myCounter1();

// HW 20 ------------------------------------------------------------------------

// function addByX(num) {
//     function addByY(num1) {
//         return num + num1;
//     }
//
//     return addByY;
// }
//
// const addByTwo = addByX(2);
// addByTwo(3); // 5
// addByTwo(5); // 7
//
// const addByFour = addByX(4);
// addByFour(3); // 7
// addByFour(5); // 9
//
// ////////////
//
// // function addByX(a) {
// //     const myNum = (b) => console.log(b + a);
// //
// //     return myNum;
// // }
// //
// // const addByTwo = addByX(2);
// // addByTwo(3);
// // addByTwo(5);
// //
// // const addByFour = addByX(4);
// // addByFour(3);
// // addByFour(5);

// 49 ----------------------------------------------------------------------

// const cat = {
//     name: 'Murka',
//     say() {
//         const greeting = () => console.log(this.name);
//
//         setTimeout(greeting, 1000);
//     }
// }
//
// cat.say();

// 50 ----------------------------------------------------------------------

// const developer = {
//     name: 'Mikhail',
//     salary: 2500,
//
//     getBonus(sum) {
//         console.log(this.name, 'has a salary this month', this.salary + sum);
//     }
// }
// // developer.getBonus(250);
//
// const manager = {
//     name: 'Anna',
//     salary: 1800,
// }
//
// // developer.getBonus.call(manager, 150);
// // developer.getBonus.apply(manager, [150]);
// // developer.getBonus.bind(manager, 150)();
//
// manager.getBonus = developer.getBonus.bind(manager);
// // manager.getBonus(150);


// HW 21 ------------------------------------------------------------------------

// Практика на использование контекста
// Дан объект supporter1. Опишите его метод chant, при вызове которого с задержкой в 1 секунду в консоль выводится сообщение "Forza Milan".
//
// Затем привяжите к объекту supporter2 метод chant таким образом, чтобы при вызове спустя 1 секунду в консоль выводилось сообщение "Forza Inter".


// const supporter1 = {
//     club: 'Milan',
//     chant() {
//         // Добавьте код
//         const greeting = () => console.log('Forza' + this.club);
//
//         setTimeout(greeting, 1000);
//     }
// }
//
// supporter1.chant();
//
// const supporter2 = {
//     club: 'Inter'
// };


// supporter2.chant = supporter1.chant.bind(supporter2);
// supporter2.chant();

// 51 ----------------------------------------------------------------------

// Проект. Практика
// Создайте функцию censor, которая не принимает аргументов. Функция должна возвращать новую функцию, принимающую опционально 1 или 2 параметра (оба - строки).
//
// Когда возвращаемая функция принимает 2 параметра, то она ничего не возвращает, а сохраняет полученные значения как пару (пара - это массив с двумя значениями).
//
// Когда возвращаемая функция принимает 1 параметр, то она возвращает полученную строку, заменив в ней все слова, согласно ранее сохранённым парам.

// // function censor() {
// //     const arr = []; // массив для хранения пар замены
// //
// //     const changeScene = (a, b = null) => {
// //         // Если есть оба параметра `a` и `b`, добавляем их в массив `arr` как пару
// //         if (a && b) {
// //             arr.push([a, b]);
// //         } else {
// //             // Если только один параметр (строка), выполняем замены
// //             let str = a;
// //             for (let [from, to] of arr) { // итерируем по парам в массиве `arr`
// //                 str = str.replace(new RegExp(from, 'g'), to); // заменяем каждое вхождение
// //             }
// //             return str;
// //         }
// //     };
// //
// //     return changeScene;
// // }
//
// ///////
// function censor() {
//     const censoreArr = [];
//
//     return function (str1, str2 = '') {
//         if (str2) {
//             censoreArr.push([str1, str2]);
//         } else {
//             for (let pair of censoreArr) {
//                 str1 = str1.replace(new RegExp(pair[0], 'gi'), pair[1]);
//             }
//
//             return str1;
//         }
//     }
// }
//
// // Пример использования:
//
// const changeScene = censor();
//
// changeScene('PHP', 'JS'); // ['PHP', 'JS']
//
// changeScene('backend', 'frontend'); // ['backend', 'frontend']
//
// console.log(changeScene('PHP is the most popular programming language for backend web-development'));

// 52 ----------------------------------------------------------------------
// 53 ----------------------------------------------------------------------
// 54 ----------------------------------------------------------------------

// push / pop

// 55 ----------------------------------------------------------------------

// // immutable
// const arr = [1, 2, 3, 4, 5];
// console.log(arr);
//
// // не используем pop, push, shift, unshift, sort, reverse
// const newArr = arr.slice(0, 4); // [1, 2, 3, 4]
// console.log(newArr);
//
// const newArr2 = [0, ...newArr]; // [0, 1, 2, 3, 4, 5]
// console.log(newArr2);

// const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
// }
//
// // obj.a = 2 // mutation
// // obj.d = 4 // mutation
//
// const obj2 = {
//     ...obj,
//     a: 10,
//     d: 4,
// }
//
//
// console.log(obj);
// console.log(obj2);


// 56 ----------------------------------------------------------------------

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// function doubleNum(num) {
//     return num * 2;
// }
// const result = numbers.map(doubleNum);
// console.log(result);
//
//
// const result2 = numbers.map(num => num * 2);
// console.log(result2);
// console.log(numbers);

// HW 23 ------------------------------------------------------------------------

// 1
// const numbers = [1, 22, 12, 66, 90, 51, 11];
// const doubledNumbers = numbers.map(num => num * 2);
//
// console.log(doubledNumbers);

// 2
// Дана коллекция developers. Создайте на ее основе новую коллекцию middleDevelopers, увеличив значения ключа salary на 500, а также добавив к ключу skills значение 'TypeScript'.

// const developers = [
//     {
//         id: 1,
//         fullName: 'Anton Petrov',
//         skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'React'],
//         salary: 1000,
//     },
//     {
//         id: 2,
//         fullName: 'Ivan Ivanov',
//         skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'Vue'],
//         salary: 950,
//     },
//     {
//         id: 3,
//         fullName: 'Albert Sidorov',
//         skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'jQuery'],
//         salary: 850,
//     },
// ];

// const newRes = developers.map(dev => {
//     const middleDevelopers = {
//         id: dev.id,
//         fullName: dev.fullName,
//         salary: dev.salary + 500,
//         skills: dev.skills.concat('TypeScript'),
//     };
//
//     return middleDevelopers;
//
// });
// 1 -------------------
// const newRes = developers.map(dev => ({
//     ...dev,
//     salary: dev.salary + 500,
//     skills: dev.skills.concat('TypeScript'),
// }));
// console.log(newRes);
// 2 ---------------
// const middleDevelopers = developers.map(dev => ({
//     id: dev.id,
//     fullName: dev.fullName,
//     salary: dev.salary + 500,
//     skills: dev.skills.concat('TypeScript'),
// }));
// console.log(middleDevelopers);


// const middleDevelopers = developers.map(dev => dev.salary + 500);
// const middleDevelopers = developers.map(
//     Object.assign(developers),
//     developers.salary + 500,
//     developers.skills + ['TypeScript']
// );

// 57 ----------------------------------------------------------------------

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//
// const oddNumbers = numbers.filter(num => num % 2 !== 0); // [1, 3 ...]
// const evenNumbers = numbers.filter(num => num % 2 === 0); // [2, 4 ...]
//
// console.log(oddNumbers);
// console.log(evenNumbers);
// console.log(numbers);


// const users = [
//     {
//         id: 1,
//         name: 'Brad Petter',
//         movies: ['Snatch', 'Inglorious Basterdes'],
//         isMarried: true,
//     },
//     {
//         id: 2,
//         name: 'Diana Moore',
//         movies: ['Inglorious Basterdes'],
//         isMarried: false,
//     },
//     {
//         id: 3,
//         name: 'Olivie Giroud',
//         movies: ['Inglorious Basterdes'],
//         isMarried: true,
//     },
//     {
//         id: 4,
//         name: 'Scott Parker',
//         movies: ['Inglorious Basterdes'],
//         isMarried: false,
//     },
// ];
//
// const marriedUsers = users.filter(user => user.isMarried); // true
// // const marriedUsers = users.filter(user => !user.isMarried); // false
// const snatchUsers = users.filter(user => user.movies.includes('Snatch'));
//
// console.log(marriedUsers);
// console.log(snatchUsers);

// HW 24 ------------------------------------------------------------------------

// 1
// const names = ['Mikhail', 'Ivan', 'Albert', 'John', 'Ian', 'Petr', 'Alexandr', 'Oleg', 'Jaroslav', 'Vsevolod'];
//
//
// const shortNames = names.filter(num => num);
// console.log(shortNames);

// 2
// const products = [
//     {
//         id: 1,
//         name: 'Intro to JavaScript',
//         category: 'books',
//         price: 150,
//     },
//     {
//         id: 2,
//         name: 'Intro to CSS',
//         category: 'books',
//         price: 120,
//     },
//     {
//         id: 3,
//         name: 'Deep dive into JavaScript',
//         category: 'books',
//         price: 350,
//     },
//     {
//         id: 4,
//         name: 'Intro to PHP',
//         category: 'books',
//         price: 250,
//     },
//     {
//         id: 5,
//         name: 'Deep dive into PHP',
//         category: 'books',
//         price: 350,
//     },
// ];
//
// const cheapProducts = products.filter(user => user.price < 300);
// console.log(cheapProducts);

// 3
// const developers = [
//     {
//         id: 1,
//         fullName: 'Ivan Ivanov',
//         skills: ['HTML', 'CSS', 'Git', 'Gulp', 'Pug']
//     },
//     {
//         id: 2,
//         fullName: 'Petr Petrov',
//         skills: ['HTML', 'CSS', 'Git', 'JavaScript', 'npm']
//     },
//     {
//         id: 3,
//         fullName: 'Ian Melnikov',
//         skills: ['HTML', 'CSS', 'Git', 'JavaScript', 'TypeScript']
//     },
//     {
//         id: 4,
//         fullName: 'Antonio Banderas',
//         skills: ['HTML', 'CSS', 'Git', 'JavaScript', 'TypeScript', 'React']
//     },
// ];
//
// const tsDevelopers = developers.filter(dev => dev.skills.includes('TypeScript'));
// console.log(tsDevelopers);

// 58 ----------------------------------------------------------------------

// const staff = [
//     {
//         id: 1,
//         name: 'John Doe',
//         salary: 1000,
//     },
//     {
//         id: 2,
//         name: 'Sara Smith',
//         salary: 900,
//     },
//     {
//         id: 3,
//         name: 'Elton John',
//         salary: 1100,
//     },
//     {
//         id: 4,
//         name: 'Mo Williams',
//         salary: 1000,
//     },
// ]
// // 1
// const budget = staff.reduce((acc, user) => {
//     return acc + user.salary;
// }, 0);
// console.log(budget);
//
// // 2
// let budgetForSmallPersonal = staff.reduce((acc, user) => {
//     if (user.salary < 1000) {
//         return acc + user.salary;
//     }
//
//     return acc;
// }, 0);
//
// console.log(budgetForSmallPersonal);
//
// // 3
// const salaries = staff.reduce((acc, user) => {
//     return [...acc, user.salary];
// }, []);
// console.log(salaries);

// HW 25 ------------------------------------------------------------------------

// const order = [
//     {
//         id: 1,
//         name: 'Лопата',
//         price: 1000,
//         quantity: 1,
//     },
//     {
//         id: 2,
//         name: 'Удочка',
//         price: 1200,
//         quantity: 2,
//     },
//     {
//         id: 3,
//         name: 'Ведро',
//         price: 500,
//         quantity: 3,
//     },
//     {
//         id: 4,
//         name: 'Мороженое',
//         price: 100,
//         quantity: 8,
//     },
// ];
//
// let totalPrice = order.reduce((acc, user) => {
//     return acc + user.price * user.quantity;
//
// }, 0);
//
//
// console.log(totalPrice);

// 59 ----------------------------------------------------------------------

// const developers = [
//     {
//         id: 1,
//         fullName: 'John Doe',
//         skills: ['HTML', 'CSS', 'Javascript'],
//         area: 'frontend',
//     },
//     {
//         id: 2,
//         fullName: 'Adam Smith',
//         skills: ['HTML', 'CSS', 'Javascript', 'React'],
//         area: 'frontend',
//     },
//     {
//         id: 3,
//         fullName: 'Will Dowson',
//         skills: ['HTML', 'PHP', 'Laravel'],
//         area: 'backend',
//     },
//     {
//         id: 4,
//         fullName: 'Sam Wilson',
//         skills: ['HTML', 'CSS', 'Javascript', 'PHP'],
//         area: 'fullstack',
//     },
// ]

// console.log(developers.find((item) => item.area === 'frontend'));
// console.log(developers.find((item) => item.skills.includes('React')));
// console.log(developers.findIndex((item) => item.skills.includes('React')));

// HW 26 ------------------------------------------------------------------------

// const players = [
//     {
//         id: 1,
//         name: 'Andres',
//         surname: 'Iniesta',
//         club: 'Vissel Cobe',
//     },
//     {
//         id: 2,
//         name: 'Eden',
//         surname: 'Hazard',
//         club: 'Real Madrid',
//     },
//     {
//         id: 3,
//         name: 'Mo',
//         surname: 'Salah',
//         club: 'Liverpool',
//     },
//     {
//         id: 4,
//         name: 'Lionel',
//         surname: 'Messi',
//         club: 'Barcelona',
//     },
// ];
//
// const messi = players.find((item) => item.surname === 'Messi');
// console.log(messi);

// 60 ----------------------------------------------------------------------

// const numbers = [1, 2, 3, 4, 10, 12, 23];
//
// numbers.sort((a, b) => a - b); //  1,  2,  3, 4, 10, 12, 23
// numbers.sort((a, b) => b - a); //  23, 12, 10, 4, 3,  2,  1
//
// numbers.sort((a, b) => b - a);
// numbers.reverse(); //  1,  2,  3, 4, 10, 12, 23
// console.log(numbers);


// const cities = ['Madrid', 'Amsterdam', 'Paris', 'Berlin', 'Kiev'];
// cities.sort(sorting);
// console.log(cities);
//
// function sorting(a, b) {
//     if (a > b) return 1;
//     if (a < b) return -1;
//     return 0;
// }


// const developers = [
//     {
//         id: 1,
//         fullName: 'John Doe',
//         skills: ['HTML', 'CSS', 'Javascript'],
//         area: 'frontend',
//     },
//     {
//         id: 2,
//         fullName: 'Adam Smith',
//         skills: ['HTML', 'CSS', 'Javascript', 'React'],
//         area: 'frontend',
//     },
//     {
//         id: 3,
//         fullName: 'Will Dowson',
//         skills: ['HTML', 'PHP', 'Laravel'],
//         area: 'backend',
//     },
//     {
//         id: 4,
//         fullName: 'Sam Wilson',
//         skills: ['HTML', 'CSS', 'Javascript', 'PHP'],
//         area: 'fullstack',
//     },
// ]
//
// developers.sort((a, b) => sorting(a.area, b.area));
// console.log(developers);
//
// function sorting(a, b) {
//     if (a > b) return 1;
//     if (a < b) return -1;
//     return 0;
// }

// HW 27 ------------------------------------------------------------------------

// const food = ["Apple", "Melon", "Banana", "Yogurt", "Orange", "Stawberry"];
//
// food.sort(sorting);
// console.log(food);
//
// function sorting(a, b) {
//     if (a > b) return 1;
//     if (a < b) return -1;
//     return 0;
// }
//
// const players = [
//     {
//         id: 1,
//         name: 'Cristiano',
//         surname: 'Ronaldo',
//         club: 'Juventus',
//     },
//     {
//         id: 2,
//         name: 'Lionel',
//         surname: 'Messi',
//         club: 'Barcelona',
//     },
//     {
//         id: 3,
//         name: 'Karim',
//         surname: 'Benzema',
//         club: 'Real Madrid',
//     },
//     {
//         id: 4,
//         name: 'Maxi',
//         surname: 'Gomez',
//         club: 'Valencia',
//     },
//     {
//         id: 5,
//         name: 'Quincy',
//         surname: 'Promes',
//         club: 'Spartak',
//     },
// ];
//
//
// players.sort((a, b) => sorting(a.surname, b.surname));
// console.log(players);

// 61 ----------------------------------------------------------------------

// const numbers = [1, 2, 3, 4, 10, 12, 23];
// const cities = ['Madrid', 'Amsterdam', 'Paris', 'Berlin', 'Kiev'];
//
// const arr2 = ['Riga', ...cities, 'Kiev', ...numbers];
// console.log(arr2);


// const dev1 = {
//     id: 1,
//     fullName: 'John Doe',
//     skills: ['HTML', 'CSS', 'Javascript'],
//     area: 'frontend',
// };
//
// const dev2 = {...dev1};
// // console.log(dev2);
//
// dev2.id = 18;
// dev2.fullName = 'Mikhail';
// // console.log(dev2);
//
//
// function sum(a, b, ...args) {
//     let result = a + b;
//
//     for (let i = 0; i > args.length; i++) {
//         result += args[i];
//     }
//
//     return result;
// }
//
// console.log(sum(5, 6));
// console.log(sum(1, 2, 5));
// console.log(sum(7, 2, 5, 6));

// 62 ----------------------------------------------------------------------

// const cities = ['Madrid', 'Amsterdam', 'Paris', 'Berlin', 'Kiev'];

// const [madrid, ams, paris] = cities;
// console.log(madrid, ams, paris);

// const [madrid, , paris] = cities;
// console.log(madrid, paris );

// const [madrid, ams, ...otherCities] = cities;
// console.log(madrid, otherCities);

// const cities = null;
//
// const [
//     madrid = 'Мадрид',
//     ams = 'Amsterdam',
//     ...otherCities
// ] = cities || [];
// console.log(madrid, ams, otherCities);


// const number = [1, 2, [3, 4], 10, 12, 23];
// const [
//     a,
//     b,
//     [c, d]
// ] = number;
// console.log(a, b, c, d);


// const number = null;
// const [
//     a = 0,
//     b = 0,
//     [c = 1, d = 1] = []
// ] = number || [];
// console.log(a, b, c, d);


// let x = 10;
// let y = 20;
// [y, x] = [x, y];
// console.log(x, y);

// HW 28 ------------------------------------------------------------------------
// Дана функция getInfo, возвращающая массив в результате вызова. Создайте переменные carName и carSeries и при помощи деструктуризации назначьте ей значения, возвращаемые функцией.

// function getInfo() {
//     return ['BMW', 'X3'];
// }
//
// const [carName, carSeries] = getInfo();

// 63 ----------------------------------------------------------------------
// const developer = {
//     id: 1,
//     fullName: 'John Doe',
//     skills: ['HTML', 'CSS', 'Javascript'],
//     area: 'frontend',
//     language: {
//         english: 'B2',
//         spanish: 'native',
//         hebrew: 'A1',
//     },
// };

// const {
//     area,
//     id
// } = developer;
// console.log(area, id);


// const area = 'abc';
//
// const {
//     area: areaDeveloper,
//     id
// } = developer;
// console.log(area, areaDeveloper, id);


// const area = 'abc';
//
// const {
//     area: areaDeveloper = '',
//     id = null,
//     ...otherProp
// } = developer;
// console.log(area, areaDeveloper, id, otherProp);


// const area = 'abc';
//
// const {
//     area: areaDeveloper = '',
//     id = null,
//     language: {
//         spanish,
//     } = {},
//     skills: [,,basicSkills] = [],
//     ...otherProp
// } = developer || {};
// console.log(spanish, basicSkills);


// let area, id;
// ({area, id} = developer);
// console.log(area, id);

// HW 29 ------------------------------------------------------------------------

// const link = {
//     href: '#',
//     title: 'simple link',
//     target: 'blank',
//     className: 'link',
//     id: null,
//     children: {
//         span: {
//             content: 'Click me',
//             className: 'anchor',
//         },
//     },
// }
//
// const {
//     target,
//     className,
//     children: {
//         span: {
//             className: renamed,
//             content
//         }
//     }
// } = link;
//
// console.log(target, className, renamed, content);


// 64 ----------------------------------------------------------------------

// const firstName = 'John';
// const lastName = 'Doe';
//
// console.log('Hi, my name is ' + firstName + ' ' + lastName + '!');
// console.log(`Hi, my name is ${lastName} ${firstName}! My age is ${2021 - 1985}`);

// const html = `
//     <div>
//         <h1>${firstName} ${lastName}</h1>
//         <button>click me</button>
//     </div>
// `;
// console.log(html);


// 65 ----------------------------------------------------------------------

// Number()
// String()
// Boolean()
// Object()

// const obj = {a: 1, b: 2, c: 3};
//
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));


// console.log(Array.from('hello world'));
// console.log(Array.of(1, 2, 'asd', true));

// 66 ----------------------------------------------------------------------

// JSON

// const a = ` {
//       "fistName": "Mikhail",
//       "age": 36,
//
//       "skills": ["CSS"],
//       "languages": {
//         "key": "value"
//       }
// }`;
//
// const myObj = JSON.parse(a);
// // console.log(myObj);
// // console.log(myObj.fistName);
//
//
// const obj = {
//     a: 1,
//     print() {
//         console.log('Hello');
//     }};
// console.log(JSON.stringify(obj));

// HW 30 ------------------------------------------------------------------------

// const players = [
//     {
//         id: 1,
//         name: 'Andres',
//         surname: 'Iniesta',
//         club: 'Vissel Cobe',
//     },
//     {
//         id: 2,
//         name: 'Eden',
//         surname: 'Hazard',
//         club: 'Real Madrid',
//     },
//     {
//         id: 3,
//         name: 'Mo',
//         surname: 'Salah',
//         club: 'Liverpool',
//     },
//     {
//         id: 4,
//         name: 'Lionel',
//         surname: 'Messi',
//         club: 'Barcelona',
//     },
// ];
//
// const jsonPlayers  = JSON.stringify(players);
// console.log(jsonPlayers);

// 67 ----------------------------------------------------------------------
// HW 31 ------------------------------------------------------------------------
// Проект "Витрина". Практика
// Есть небольшая страничка со списком товаров и корзиной.

// В app.js есть массив products со списком товаров со страницы и массив order, куда должны добавляться товары по клику на кнопку "Buy".

// На кнопках уже висят обработчики клика, вызывающие функцию addToBasket с передачей в нее id товара. Необходимо доработать эту функцию, чтобы товары добавлялись в массив заказа, при этом один и тот же товар нельзя было добавить в заказ дважды.

// При добавлении в корзину товар автоматически будет отрисовываться на странице. А при клике на его имя в корзине будет вызываться функция removeFromBasket. Необходимо доработать ее функционал, чтобы  товар удалялся из корзины.

// Метод rerenderTotalPrice отвечает за расчет общей стоимости товаров в корзине, которая также выводится на страницу. Необходимо описать функционал перерасчета общей суммы.

// const products = [
//     {
//         id: 1,
//         title: 'Lenovo Yoga',
//         price: 3000,
//     },
//     {
//         id: 2,
//         title: 'Acer Aspire',
//         price: 1800,
//     },
//     {
//         id: 3,
//         title: 'Dell Vostro',
//         price: 3400
//     },
// ];
//
// let order = [];
//
// function addToBasket(productId) {
//     // TODO: добавить проверку наличия товара в заказе (при наличии выдать alert, что товар уже в корзине)
//
//     // TODO: если товар еще не в корзине, добавить его из массива products
//
//     if (order.find((item) => item.id === productId)) {
//         alert('товар уже в корзине');
//         console.log('товар уже в корзине')
//     } else {
//         // Ищем товар по id в массиве products
//         const product = products.find(item => item.id === productId);
//
//         // Если товар найден, добавляем его в корзину
//         if (product) {
//             order.push(product);
//             console.log('добавить его из массива products');
//         }
//     }
//
//
//     // Эти строчки не трогаем, они отвечают за переотрисовку страницы
//     renderCart();
//     rerenderTotalPrice();
// }
//
// function removeFromBasket(productId) {
//     // TODO: описать логику удаления товара из корзины
//     const index = order.findIndex(item => item.id === productId);
//     order.splice(index, 1);
//
//     // Эти строчки не трогаем, они отвечают за переотрисовку страницы
//     renderCart();
//     rerenderTotalPrice();
// }
//
//
// function rerenderTotalPrice() {
//     // TODO: опишите функционал подсчета общей стоимости заказа
//     // const totalPrice = 0;
//
//     let totalPrice = order.reduce((acum, item) => acum + item.price, 0);
//
//     // Не меняйте эту строчку
//     document.getElementById('total').innerText = totalPrice;
// }
//
// // Этот метод остается без изменений
// function renderCart() {
//     const cart = document.getElementById('basket-items');
//
//     cart.innerHTML = '';
//     order.forEach(item => {
//         const el = document.createElement('li');
//         el.innerText = item.title;
//         el.onclick = () => removeFromBasket(item.id);
//         cart.appendChild(el);
//     })
// }

// 68 ---------------------------------------------------------------------------
// 69 ---------------------------------------------------------------------------
// HW 32 ------------------------------------------------------------------------

// const movies = ['Aladdin', 'Home Alone', 'Home', 'Terminator', 'Matrix'];
//
// const getThreeMovies = (film) => {
//     if (!Array.isArray(film)) {
//         return [];
//     }
//
//     if (film.length <= 3) {
//         return film
//     } else if (film.length >= 3) {
//         const shuffled = [...film].sort(() => Math.random() - 0.5);
//         return shuffled.slice(0, 3);
//     }
//
// }
//
// console.log(getThreeMovies(movies)); // ['Home', 'Matrix', 'Aladdin']

// HW 33 ------------------------------------------------------------------------

// const movies = {
//     b34dfd3: { id: "b34dfd3", title: "Titanic", year: 1997 },
//     s98df21: { id: "s98df21", title: "Iron man", year: 2008 },
//     z092sds: { id: "z092sds", title: "Avatar", year: 2005 },
//     cdsdsds: { id: "cdsdsds", title: "Terminator 2", year: 1992 },
// };
//
// const getThreeMovies = (film) => {
//
//     const titles = Object.values(film).map(movie => movie.title);
//
//     if (titles.length <= 3) {
//         return titles;
//     } else {
//         titles.sort(() => Math.random() - 0.5);
//         return titles.slice(0, 3);
//     }
//
// }
//
// getThreeMovies(movies); // ['Avatar', 'Titanic', 'Iron man']

// HW 34 ------------------------------------------------------------------------
// HW 35 ------------------------------------------------------------------------
// 70 ---------------------------------------------------------------------------
// 71 ---------------------------------------------------------------------------
// 72 ---------------------------------------------------------------------------

// document

// document.querySelector('h1');
//
// const title = document.querySelector('h1');
// title

// HW 36 ------------------------------------------------------------------------

// const title = document.querySelector('h1');
// const btn = document.querySelector('button#btn');
// const subtitle = document.querySelector('.title.gray');
// const sections = document.querySelectorAll('section');

// 73 ---------------------------------------------------------------------------

// innerTerxt
// innerHTML
// getAttribute
// setAttribute
// className
// style

// 74 ---------------------------------------------------------------------------

// forEach


// 75 ---------------------------------------------------------------------------

// classList
// add
// remove
// contains
// toggle

// 76 ---------------------------------------------------------------------------

// parentElement
// children
// firstElementChild
// lastElementChild
// nextElementSibling


// 77 ---------------------------------------------------------------------------
// 78 ---------------------------------------------------------------------------
// 79 ---------------------------------------------------------------------------

// const btn = document.getElementById('toggle-btn');
// const div = document.querySelector('.element');
//
// // function toggleDivVisibility() {
// //     if (div.style.display === "none") {
// //         div.style.display = "block";
// //     } else {
// //         div.style.display = "none";
// //     }
// // }
//
// function toggleDivVisibility() {
//     div.classList.toggle('hide');
// }
//
// btn.addEventListener('click', toggleDivVisibility);

// HW 37 ------------------------------------------------------------------------

// const accordion = document.querySelectorAll('.accordion');
//
// accordion.forEach(accordion => {
//     accordion.addEventListener('click', e => {
//         e.target.nextElementSibling.classList.toggle('show');
//     })
// })

// 80 ---------------------------------------------------------------------------

const btn = document.querySelectorAll('button');

btn.forEach(btn => {
    btn.addEventListener('click', e => {
        e.target.classList.toggle('show');
        getAttribute('data-clicked')
    })
})






























































































































































































































