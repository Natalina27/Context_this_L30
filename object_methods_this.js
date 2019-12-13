

let user = {
    name: "Джон",
    age: 30
};



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

//«this» не является фиксированным
function sayHi2() {
    console.log( this.name );
}

sayHi2();//undefined

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





