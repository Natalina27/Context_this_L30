//1.Связанная функция как метод
//Что выведет функция?

    function f() {
        console.log( this ); // ?
    }

    let user = {
   g: f.bind(null),
    };

user.g();

console.log('===================');
//2.Повторный bind
// Можем ли мы изменить this дополнительным связыванием?
// Что выведет этот код?

function fn() {
    console.log(this.name);
}

a = fn.bind( {name: "Вася"} ).bind( {name: "Петя" } );

a();
console.log('===================');

//3.Свойство функции после bind
// В свойство функции записано значение.
//Изменится ли оно после применения bind? Обоснуйте ответ.

function sayHi() {
  console.log( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася"
});

console.log( bound.test );
// что выведет? почему?
//undefined
//Результатом работы bind является другой объект. У него уже нет свойства test.

console.log('=========================');
//4. Исправьте функцию, теряющую "this"
// важность: 5
// Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.
//
// Однако, его вызов приводит к ошибке. Почему?
//
// Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }
//
// let user = {
//   name: 'Вася',
//
//   loginOk() {
//     alert(`${this.name} logged in`);
//   },
//
//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },
//
// };
//
// askPassword(user.loginOk, user.loginFail);