//При передаче методов объекта в качестве колбэков, например для setTimeout,
// возникает известная проблема – потеря this.

//Как только метод передаётся отдельно от объекта – this теряется.
//
// Вот как это может произойти в случае с setTimeout:
let user = {
  firstName: "Вася",
  sayHi() {
    console.log(`Привет, ${this.firstName}!`);
  }
};

setTimeout(user.sayHi, 1000); // Привет, undefined!
//вызов this.firstName возвращает не «Вася», а undefined!
// Это произошло потому, что setTimeout получил функцию sayHi отдельно от объекта user
// (именно здесь функция и потеряла контекст).
// То есть последняя строка может быть переписана как:
//
// let f = user.sayHi;
// setTimeout(f, 1000); // контекст user потеряли

//Решение 1: сделать функцию-обёртку, создав замыкание:

setTimeout(function() {
  user.sayHi(); // Привет, Вася!
}, 1000);
// Теперь код работает корректно, так как объект user достаётся из замыкания,
// а затем вызывается его метод sayHi.
// То же самое, только короче:
setTimeout(() => user.sayHi(), 1000); // Привет, Вася!
// Выглядит хорошо, но теперь в нашем коде появилась небольшая уязвимость.
//если до момента срабатывания setTimeout (ведь задержка составляет целую секунду!)
// в переменную user будет записано другое значение?
// Тогда вызов неожиданно будет совсем не тот!
user = { sayHi() { console.log("Другой пользователь в 'setTimeout'!"); } };

//Решение 2: привязать контекст с помощью bind

//Базовый синтаксис bind:
// полный синтаксис будет представлен немного позже
//let boundFunc = func.bind(context);
// Результатом вызова func.bind(context) является особый «экзотический объект»
// (термин взят из спецификации), который вызывается как функция и
// прозрачно передаёт вызов в func, при этом устанавливая this=context.
// Другими словами, вызов boundFunc подобен вызову func с фиксированным this.

user = {
  firstName: "Вася",
  sayHi() { console.log(`Привет, ${this.firstName}!`)} };
let sayHi = user.sayHi.bind(user); // (*)
//user.firstName = 'Kolya';
sayHi(); // Привет, Вася!

setTimeout(sayHi, 15000); // Привет, Вася!
//В строке (*) мы берём метод user.sayHi и привязываем его к user.
// Теперь sayHi – это «связанная» функция, которая может быть вызвана отдельно или
// передана в setTimeout (контекст всегда будет правильным).

//Здесь мы можем увидеть, что bind исправляет только this,
// а аргументы передаются как есть:
user1 = {
  firstName: "Vasya",
  say(phrase) {
    console.log(`${phrase}, ${this.firstName}!`);
  }
};

let say = user1.say.bind(user1);

say("Привет"); // Привет, Вася (аргумент "Привет" передан в функцию "say")
say("Пока"); // Пока, Вася (аргумент "Пока" передан в функцию "say")

//Удобный метод: bindAll
//Если у объекта много методов и мы планируем их активно передавать,
// то можно привязать контекст для них всех в цикле:
for (let key in user) {
  if (typeof user[key] == 'function') {
    user[key] = user[key].bind(user);
  }
}

//Частичное применение