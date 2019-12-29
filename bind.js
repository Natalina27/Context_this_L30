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

// let user = {
//   firstName: "Вася",
//   sayHi() {
//     alert(`Привет, ${this.firstName}!`);
//   }
// };
//
// setTimeout(function() {
//   user.sayHi(); // Привет, Вася!
// }, 1000);
// Теперь код работает корректно, так как объект user достаётся из замыкания, а затем вызывается его метод sayHi.
//
// То же самое, только короче:
//
// setTimeout(() => user.sayHi(), 1000); // Привет, Вася!
// Выглядит хорошо, но теперь в нашем коде появилась небольшая уязвимость.