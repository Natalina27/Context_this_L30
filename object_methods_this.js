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


