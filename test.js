

function main(){
    let name = 'Rahul'

    function printName(){
        console.log('Name is ', name)

        function third(){
            console.log(name)
        }
        name = 'Rohan'
        third()
    }
    name = 'Mohit'
    return printName
}

let cal = main()

cal()




























/*


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

*/

var xp = 100
function alpha () {
    var xp = 200
    function beta(){
        console.log(xp)
    }
    return beta
}
var gamma = alpha()
gamma()

let fname = 'Masai'
let lname  = 'School'
const org = {fname, lname}
console.log(org)

function getNaam(){
    let name = 'raul'
}
getNaam()
console.log(name)

// absolute, place an element exactly where you want to place it. absolute position is actually set relative to the element's parent. if no parent available then relatively place to the page itself (it will default all the way back up to the element).
// relative, means "relative to itself". Setting position: relative; on an element and no other positioning attributes, it will no effect on it's positioning. Any child element will be absolutely positioned within that block.
// fixed, element is positioned relative to viewport or the browser window itself. viewport doesn't changed if u scroll and hence fixed element will stay right in the same position.