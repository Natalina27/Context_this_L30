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

//«Одалживание метода»
