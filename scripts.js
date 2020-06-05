/* Задача 1

Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти
элементы на экран.
*/

console.log('Задача 1');
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

/* Задача 2

Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут
быть положительными и отрицательными. Выведите на экран только отрицательные
числа, которые больше -10, но меньше -3.
*/

console.log('Задача 2');
arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for (let i = 0; i < arr.length; i++) {
    if(arr[i] < -3 && arr[i] > -10) {
        console.log(arr[i]);
    }
}

/* Задача 3

Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и
while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого
массива. Запишите ее в переменную result и выведите.
*/

console.log('Задача 3');

arr = [];

for (let i = 23; i <= 57; i++) {
    arr.push(i);
}
console.log(arr);

let i = 23;

arr.length = 0;

while (i <= 57) {
    arr.push(i);
    i++;
}
console.log(arr);

let result = 0;
for (i = 0; i < arr.length; i++) {
    result += arr[i];
}

console.log(result);

/* Задача 4

Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’].
Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или
5.
*/

console.log('Задача 4');

arr = ['10', '20', '30', '50', '235', '3000'];
let firstLetter;

for (let i = 0; i < arr.length; i++) {
    firstLetter = +arr[i][0];

    if(firstLetter == 1 || firstLetter == 2 || firstLetter == 5) {
        console.log(arr[i]);
    }
}

/* Задача 5

Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все
дни недели, а выходные дни выведите жирным.
*/

console.log('Задача 5');

arr = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

let strOutput,
    dayOfWeek;

for (let i = 0; i < arr.length; i++) {

    dayOfWeek = arr[i];

    if(dayOfWeek == 'СБ' || dayOfWeek == 'ВС') {
        strOutput = '<b>' + dayOfWeek + '</b>';
    } else {
        strOutput = dayOfWeek;
    }

    strOutput += '<br>';
    document.write(strOutput);
}


/* Задача 6

Создайте массив с произвольными данными. Добавьте в конец массива любой элемент,
и получите последний элемент массива, используя свойство length.
*/

console.log('Задача 6');
arr = [];

for (i = 12; i < 20; i++) {
    arr.push(i);
}

console.log (arr);
arr.push(1000);
console.log('Последний элемент ' + arr[arr.length - 1]);

/* Задача 7

Запросите у пользователя по очереди числовые значения при помощи prompt и
сохраните их в массив. Собирайте числа до тез пор пока пользователь не введет пустое
значение. Выведите получившийся массив на экран. Выполните сортировку чисел
массива, и выведите его на экран.
*/

console.log('Задача 7');

let num;
arr = [];

 while (num = prompt()) {

     if(!isNaN(num)) {
         arr.push(+num);
     }
 }


 console.log(arr);

 arr.sort(function(a, b){
     return a - b;
 });

console.log(arr);

/* Задача 8

Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке),
используя цикл while и метод reverse.
*/

console.log('Задача 8');

arr = [12, false, 'Текст', 4, 2, -5, 0];
i = arr.length -1;
result = [];

console.log(arr);
while (i>= 0) {
    result.push(arr[i]);
    i--;
}

console.log(result);

console.log(arr.reverse());

/* Задача 9

Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном
целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6].
*/

console.log('Задача 9');

arr = [5, 9, 21, , , 9, 78, , , , 6];

let emptyEl = 0;

for (i = 0; i < arr.length; i++) {
    if (arr[i] === undefined) {
        emptyEl++;
    }
}

console.log(emptyEl);

/* Задача 10

Найдите сумму элементов массива между двумя нулями (первым и последним нулями
в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть
более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или
[1,8,0,13,76,8,7,0,22,0,2,3,2].
*/

console.log('Задача 10');

arr = [1,8,0,13,76,8,7,0,22,0,2,3,2];
console.log(arr);

let newArr,
    firstZero = arr.indexOf(0),
    lastZero = arr.lastIndexOf(0, arr.length - 1);

sum = 0;
newArr = [];

if(firstZero == -1 || lastZero == -1) {
    sum = 0;
} else {
    newArr = arr.slice(firstZero + 1, lastZero);
    console.log(firstZero, lastZero);
    console.log(newArr);

    for (let i = 0; i < newArr.length; i++) {
        sum += newArr[i];
    }
}

console.log(sum);

/* Задача 10

Нарисовать равнобедренный треугольник из символов ^. Высоту выбирает
пользователь. Например: высота = 5, на экране:
*/

console.log('Задача 11');

let countSpace,
    countSymbol,
    symbolsInLastRow,
    strSpace,
    height = 4;

arr = [];
symbolsInLastRow = 2 * height - 1;

for (i = 1; i <= height; i++) {
    countSymbol = (2 * i) - 1;
    countSpace = (symbolsInLastRow - (countSymbol)) / 2;
    strSpace = '&nbsp;'.repeat(countSpace);
    document.write(strSpace + '^'.repeat(countSymbol) + strSpace + '<br>');
}

