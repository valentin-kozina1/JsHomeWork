// Напишите функцию `f`, которая возвращает куб числа. 
// Число передается параметром. Данная функция должна обязательно 
// содержать проверку входного параметра, потому что принимать она 
// может только число.

function f1(x) {
	if (typeof x != "number") {
		return 'Error: parameter type is not a Number, but not a ' + typeof x;
		
	} else
 	return Math.pow(x, 3);
 }
console.log("Задание 1 : " + f1(2)); //8
console.log("Задание 1 : " + f1('Content'));


// 2 Напишите функцию `f` которая возвращает сумму всех параметров. 
//Количество параметров может быть любым. Данная функция должна обязательно 
//содержать проверку входных параметров, потому что принимать она может только числа.

var summa = 0;
function f2() {
	for (var i = 0; i < arguments.length; i++) {
		if (typeof arguments[i] != "number") {
			return 'Error: all parameters type should be a Number, but not a ' + typeof x;
		} else
 	 	summa += arguments[i];
	}
	return  summa;
}

console.log("Задание 2 : " + f2(1,2,3)); var summa = 0;//6
console.log("Задание 2 : " + f2(1,1,1,1,1,1,1,1)); var summa = 0;//8
console.log("Задание 2 : " + f2(1,2,'s',4)); //Error: all parameters type should be a Number

//3 Сделайте функцию `f`, которая отнимает от первого числа второе и 
//делит на третье. Данная функция должна обязательно содержать проверку 
//входных параметров, потому что принимать она может только числа.

function f3(a, b, c) {
	if (typeof a != "number" || typeof b != "number" || typeof c != "number") {
			return 'Error: all parameters type should be a Number, but not a ' + typeof x;
		} else
 	 	return (a-b)/c;
}

console.log("Задание 3 : " + f3(9,3,2)); // 3
console.log("Задание 3 : " + f3('s',9,3)); // Error: all parameters type should be a Number


//4 Сделайте функцию `f`, которая принимает параметром число от 1 до 7, 
//а затем возвращает день недели на русском языке. Данная функция должна 
//обязательно содержать проверку входного параметра, потому что принимать 
//она может только числа от 1 до 7.

function f4(x) {
	if (typeof x != "number") {
		return 'Error: parameter type is not a Number, but not a ' + typeof x;
	} else
	if (x<1 || x>7) {
		return 'Error: parameter should be in the range of 1 to 7 - ' + x;
	} else
	days = Array('Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 
				'Пятница', 'Суббота')
 	return days[x-1];
}

console.log("Задание 4 : " + f4(1)) // Воскресенье
console.log("Задание 4 : " + f4(2)) // Понедельник
console.log("Задание 4 : " + f4(8)) // Error: parameter should be in the range of 1 to 7
console.log("Задание 4 : " + f4('1')) // Error: parameter type is not a Number

//5 Дан массив с числами `[1, 2, -4, 3, -9, -1, 7]`. Создайте из него новый массив, 
//где останутся лежать только положительные числа `[1, 2, 3, 7]`. 
//Создайте для этого вспомогательную функцию `isPositive(-3)`, которая параметром 
//будет принимать число и возвращать true, если число положительное, 
//и false — если отрицательное. Данная функция должна обязательно содержать 
//проверку входного параметра, потому что принимать она может только число.
//*Для добавление нового элемента в конец массива используйте метод push*

massiv = Array(1, 2, -4, 3, -9, -1, 7);
function isPositive(x) {
	if (typeof x != "number") {
		return 'Error: parameter type is not a Number, but not a ' + typeof x;
	} else
	if (x >= 0) return true
		else return false;
}

var newMassiv = Array();
function f5(x) {
	for (var i = 0; i < x.length; i++) {
		if (isPositive(x[i])) newMassiv.push(x[i]);	
	}
	return newMassiv;
}

console.log("Задание 5 : " + f5(massiv))

//6 Сделайте функцию `isEven()`, которая параметром принимает целое число 
//и проверяет: чётное оно или нет. Если чётное — функция возвращает `true`, 
//если нечётное — `false`. Данная функция должна обязательно содержать проверку 
//входного параметра, потому что принимать она может только число.
//*Чётные числа могут делится на 2 без остатка.*

function isEven(x) {
	if (typeof x != "number") {
		return 'Error: parameter type is not a Number, but not a ' + typeof x;
	} else
	if (x % 2 == 0) return true
		else return false;
}

console.log("Задание 6 : " + isEven(3)); // false
console.log("Задание 6 : " + isEven(4)); // true
console.log("Задание 6 : " + isEven('Content')) // Error: parameter type is not a Number

//7 Сделайте функцию `getDivisors`, которая параметром принимает число и 
//возвращает массив его делителей (чисел, на которое делится данное число 
//начиная от 1 и заканчивая самим собой). Данная функция должна обязательно 
//содержать проверку входного параметра, потому что принимать она может только 
//число больше 0.

var massiv = Array();
function getDivisors(x) {
	if (typeof x != "number") {
		return 'Error: parameter type is not a Number, but not a ' + typeof x;
	} else
	if (x <= 0) {
		return "Error: parameter can't be <= 0"
	} else {
		for (var i = 1; i <= x; i++) {
			if (x%i == 0) massiv.push(i);
		}	
	}	
	return massiv;
}
console.log("Задание 7 : " + getDivisors(12)); //[1, 2, 3, 4, 6, 12]
console.log("Задание 7 : " + getDivisors('Content')); //Error: parameter type is not a Number
console.log("Задание 7 : " + getDivisors(0)); //Error: parameter can't be a 0

//8 Дан массив с числами `[1, 2, 3]`. Создайте функцию `f`, которая принимает 
//данный массив в качестве параметров, а затем последовательно выводит на экран 
//его элементы. Обязательно нужно использовать рекурсию. Использовать цикл 
//запрещено. Данная функция должна обязательно содержать проверку входного 
//параметра, потому что принимать она может только не пустой массив.
//*Возможно вам понадобится метод 
// [splice](https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).*

function f(x) { 
	if (typeof x != 'object') {
		return console.log('Error: parameter type should be an array');
	} else
	if (x.length==0) {
		return console.log("Error: parameter can't be an empty");	
	} else {
		console.log(x.splice(0, 1)[0]);
		if (x.length>0) f(x);
	} 
	
}

f([1,2,3]);

// 1
// 2
// 3
f(1,2,3) // Error: parameter type should be an array
f('Content') // Error: parameter type should be an array
f([]) // Error: parameter can't be an empty