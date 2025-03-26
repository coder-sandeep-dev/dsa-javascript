function factorialNumber(num) {
    if (num < 0) {
        console.log("Factorial is not defined for negative numbers.");
        return;
    }
    if (num === 0) {
        console.log(1);
        return;
    }

    let fact = 1;
    while (num > 0) {
        fact = fact * num;
        num--;
    }
    console.log(fact);
}

factorialNumber(5)
