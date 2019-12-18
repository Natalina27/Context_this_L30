//Method call

function showFullName(firstPart, lastPart ) {
    console.log( this[firstPart]+ " " + this[lastPart] );
}
function showFullName1() {
    console.log( this.firstName+ " " + this.lastName );
}

const user = {
    firstName:'Natalya' ,
    lastName: ' Myunster',
    patronym: 'Viktorovna'
};

showFullName(user); //undefined undefined
showFullName1(user); //undefined undefined

showFullName1.call(user); //Natalya  Myunster

showFullName.call(user,'firstName', 'lastName'); //Natalya  Myunster
showFullName.call(user, 'firstName', 'patronym'); //Natalya  Viktorovna

//«Одалживание метода» METHOD BORROWING
//При помощи call можно легко взять метод одного объекта,
// в том числе встроенного, и вызвать в контексте другого.

//arguments не массив, а обычный объект,
// поэтому таких полезных методов как push, pop, join и других у него нет.
function printArgs1() {
    arguments.join = [].join; // одолжили метод - объявлен пустой массив  и скопирован его метод .join

    let argStr = arguments.join(':'); // запустили join в контексте arguments, как будто он всегда там был.

    console.log( argStr ); // сработает и выведет 1:2:3
}

printArgs1(1, 2, 3);

//join реализован примерно так:

function join(separator) {
    if (!this.length) return '';

    let str = this[0];

    for (let i = 1; i < this.length; i++) {
        str += separator + this[i];
    }

    return str;
}

//…Однако, копирование метода из одного объекта в другой не всегда приемлемо!
//Представим на минуту, что вместо arguments у нас – произвольный объект.
// У него тоже есть числовые индексы, length и мы хотим вызвать в его контексте метод [].join.
// То есть, ситуация похожа на arguments, но (!) вполне возможно, что у объекта есть свой метод join.
//Поэтому копировать [].join, как сделано выше, нельзя:
// если он перезапишет собственный join объекта, то будет страшный бардак и путаница.
//
// Безопасно вызвать метод нам поможет call:

function printArgs() {
    let join = [].join; // скопируем ссылку на функцию в переменную

    // вызовем join с this=arguments,
    // этот вызов эквивалентен arguments.join(':') из примера выше
    let argStr = join.call(arguments, ':');

    console.log( argStr ); // сработает и выведет 1:2:3
}

printArgs(1, 2, 3);