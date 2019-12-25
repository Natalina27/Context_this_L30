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
