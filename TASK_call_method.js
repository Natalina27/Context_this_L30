//1.Перепишите суммирование аргументов
// важность: 5
// Есть функция sum, которая суммирует все элементы массива:
function sum(arr) {
    return arr.reduce((a, b)=> a + b);
}

console.log( sum([1, 2, 3]) ); // 6 (=1+2+3)
//Создайте аналогичную функцию sumArgs(),
// которая будет суммировать все свои аргументы:
//Для решения примените метод reduce к arguments,
// используя call, apply или одалживание метода.
//
// P.S. Функция sum вам не понадобится,
// она приведена в качестве примера использования
// reduce для похожей задачи.

function sumArgs() {
     arguments.reduce = [].reduce;
 return  arguments.reduce((a,b) => a+b);
}

console.log( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива

function sumArg() {
    return [].reduce.call(arguments,(a, b) =>a + b);
}

console.log( sumArg(1, 2, 3) ); //6

//2. Примените функцию к аргументам
// важность: 5
// Напишите функцию applyAll(func, arg1, arg2...), которая получает функцию func и произвольное количество аргументов.
//
// Она должна вызвать func(arg1, arg2...), то есть передать в func все аргументы, начиная со второго, и возвратить результат.
/// Применить Math.max к аргументам 2, -2, 3
console.log( applyAll(Math.max, 2, -2, 3) ); // 3
//
// // Применить Math.min к аргументам 2, -2, 3
console.log( applyAll(Math.min, 2, -2, 3) ); // -2

function sum1() { // суммирует аргументы: sum(1,2,3) = 6
    return [].reduce.call(arguments, function(a, b) {
        return a + b;
    });
}

function mul() { // перемножает аргументы: mul(2,3,4) = 24
    return [].reduce.call(arguments, function(a, b) {
        return a * b;
    });
}

function applyAll(func) {
    return func.apply(this, [].slice.call(arguments, 1));
}

console.log( applyAll(sum1, 1, 2, 3) ); // -> sum(1, 2, 3) = 6
console.log( applyAll(mul, 2, 3, 4) ); // -> mul(2, 3, 4) = 24