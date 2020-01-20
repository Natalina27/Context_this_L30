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

f = fn.bind( {name: "Вася"} ).bind( {name: "Петя" } );

f();
console.log('===================');