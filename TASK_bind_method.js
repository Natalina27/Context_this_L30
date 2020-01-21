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