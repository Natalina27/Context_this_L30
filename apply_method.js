//Если нам неизвестно, с каким количеством аргументов понадобится вызвать функцию,
// можно использовать более мощный метод: apply.

console.log( Math.max(1, 5, 2) );

let arr = [];
arr.push(1);
arr.push(5);
arr.push(2);

// получить максимум из элементов arr
console.log( Math.max.apply(null, arr) ); // 5