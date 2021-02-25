function sayHello() {
    return function() {
        return "Hello World";
    }
}

let fn = sayHello();
let message = fn();