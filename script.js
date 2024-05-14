const equal = document.querySelector("#equal");
const ans = document.querySelector("#ans");

const add = function (num1, num2) {
    console.log("I am add");
    return num1 + num2;
}

const subtract = function (num1, num2) {
    console.log("I am subtract");
    return num1 - num2;
}

const multiply = function (num1, num2) {
    console.log("I am multiply");
    return num1 * num2;
}

const divide = function (num1, num2) {
    console.log("I am divide");
    if (num2 === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return num1 / num2;
}

equal.addEventListener('click', function () {
    const num1 = parseInt(document.querySelector("#num1").value);
    const num2 = parseInt(document.querySelector("#num2").value);
    const operation = document.querySelector("#opr");

    console.log("I am operated");
    console.log(operation.value);

    if (isNaN(num1) || isNaN(num2) || operation.value === "") {
        alert("Enter valid input");
    } else {
        console.log(num1);
        console.log(num2);
        console.log(typeof num1);
        console.log(typeof num2);

        let result = -1;
        if (operation.value === "+") {
            console.log("I am operated +");
            result = add(num1, num2);
        } else if (operation.value === "-") {
            console.log("I am operated -");
            result = subtract(num1, num2);
        } else if (operation.value === "*") {
            console.log("I am operated *");
            result = multiply(num1, num2);
        } else if (operation.value === "/") {
            console.log("I am operated /");
            try {
                result = divide(num1, num2);
            } catch (error) {
                alert(error.message);
                return; // Exit early if there's an error
            }
        } else {
            console.log("Operation not supported");
            return; // Exit early if operation is not supported
        }
        console.log(result);
        ans.innerHTML = result;
    }
});
