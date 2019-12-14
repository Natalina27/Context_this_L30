

let user = {
    name: "Джон",
    age: 30
};


console.log('=============');
//Для начала давайте научим нашего пользователя user здороваться:
let user1 = {
    name: "Джон",
    age: 30
};

user1.sayHi = function() {
    console.log("Привет!");
};

user1.sayHi(); // Привет!

let user2 = {
    // ...
};

// сначала объявляем
function sayHi1() {
    console.log("Привет a tutti!");
}

// затем добавляем в качестве метода
user2.sayHi = sayHi1;

user2.sayHi(); // Привет a tutti!

//
console.log('=============');
//
let user3 = {
    name: "Джон",
    age: 30,
    // sayHi: function() {
    //     console.log("Привет");
    // }

    sayHi() {
        console.log("Привет vsem!!!");
        }
};
user3.sayHi();
console.log('=============');

//this
//Для доступа к информации внутри объекта метод может использовать ключевое слово this.
// Значение this – это объект «перед точкой», который использовался для вызова метода.

let userJhon = {
    name: "Джон",
    age: 30,

    sayHi() {

        //console.log(userJhon.name);
        // this - это "текущий объект"
        console.log(this.name);
    }

};

userJhon.sayHi(); // Джон

//userJhon = null; // обнулим переменную для наглядности, теперь она не хранит ссылку на объект.
let admin = userJhon;
userJhon = null; // обнулим переменную для наглядности, теперь она не хранит ссылку на объект.

admin.sayHi(); // Джон if we use this.name , not userJhon.name
//console.log(this); //{}
//console.log(this.name);//undefined

/*
В строгом режиме ("use strict") в таком коде значением this будет являться undefined. Если мы попытаемся получить доступ к name, используя this.name – это вызовет ошибку.
В нестрогом режиме значением this в таком случае будет глобальный объект (window для браузера, мы вернёмся к этому позже в главе Глобальный объект). Это – исторически сложившееся поведение this, которое исправляется использованием строгого режима ("use strict").
Обычно подобный вызов является ошибкой программирования. Если внутри функции используется this, тогда ожидается, что она будет вызываться в контексте какого-либо объекта.
*/
//«this» не является фиксированным
function sayHi2() {
    console.log( this.name );
}

sayHi2();//undefined

//
console.log('=============');
//
let userOne = { name: "Джон" };
let adminOne = { name: "Админ" };

function sayHi() {
    console.log( this.name );
}

// используем одну и ту же функцию в двух объектах
userOne.f = sayHi;
adminOne.f = sayHi;

// вызовы функции, приведённые ниже, имеют разное значение this
// "this" внутри функции является ссылкой на объект, который указан "перед точкой"
userOne.f(); // Джон  (this == user)
adminOne.f(); // Админ  (this == admin)

adminOne['f'](); // Админ (неважен способ доступа к методу - через точку или квадратные скобки)


console.log('=============');
//Внутренняя реализация: Ссылочный тип (Reference type)

let userRef = {
    name: "Джон",
    hi() { console.log(this.name); },
    bye() { console.log("Пока"); }
};

userRef.hi(); // Джон (простой вызов метода работает хорошо)

// теперь давайте попробуем вызывать user.hi или user.bye
// в зависимости от имени пользователя user.name
(userRef.name === "Джон" ? userRef.hi : userRef.bye)(); // undefined - lost this


console.log('=============');
//arrow functions have no own this

//Стрелочные функции особенные: у них нет своего «собственного» this.
// Если мы используем this внутри стрелочной функции, то его значение берётся из внешней
// «нормальной» функции.
//Они полезны, когда мы на самом деле не хотим иметь отдельное значение this,
// а хотим брать его из внешнего контекста

let userArrow = {
    firstName: "Илья",
    sayHi() {
        let arrow = () => console.log(this.firstName);
        arrow();
    }
};

userArrow.sayHi(); // Илья


