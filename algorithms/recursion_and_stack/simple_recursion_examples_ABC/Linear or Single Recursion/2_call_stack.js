function A() {
    return "hello " + B();
}

function B() {
    return "my " + C();
}

function C() {
    return "friends.";
}


console.log(A());
