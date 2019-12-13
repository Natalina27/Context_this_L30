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
function sayHi() {
    console.log("Привет a tutti!");
}

// затем добавляем в качестве метода
user2.sayHi = sayHi;

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
        // this - это "текущий объект"
        console.log(this.name);
    }

};

userJhon.sayHi(); // Джон



