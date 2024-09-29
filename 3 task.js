function createAdder(num1) {
    return function(num2) {
        return num1 + num2;
    };
}

const add5 = createAdder(5);
console.log(add5(10)); 