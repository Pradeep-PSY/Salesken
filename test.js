
// function create(){
//     let a = 'cool'
//     // console.log(' I am '+ a)
//     function another(){
        
//         console.log(' I am '+ a + 90 *90)
//     }
//     a = 'super cool'
//    return  another

// }
// let k = create()
// k()

//holi today
//again holiday


function add(a){
    return function(b){
        return a + b
    }
}

let x = add(5)

console.log(x(4))

function user(name){
    return function (age){
        console.log(`My name is ${name} and my Age is ${age}`)
    }
}

let op = user('Rahul')
op(24)

function addd(a,b){
    return a+b
}


function prod(x) {
    x = x + 5
    return z =>(
        x * z
    )
}

console.log(prod(5)(10))


class Registration {
    constructor(name, age){
        this.name = name;
        this.age = age
    }
    get naam (){
        return [this.name, this.age];
    }
    set nam (nam){
        this.name = nam
    }
}

let person = new Registration('Rahul', 22)

console.log(person.naam)

person.nam = 'Arun'

console.log(person.naam)