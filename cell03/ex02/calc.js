const CalButton = document.getElementById('button');

CalButton.addEventListener('click', ()=>{
    calculate();
})

function calculate() {
    const leftValue = document.getElementById('leftValue').value;
    const operator = document.getElementById('operator').value;
    const rightValue = document.getElementById('rightValue').value;

    if (!isPositiveInteger(leftValue) || !isPositiveInteger(rightValue)) {
        alert('Error :(');
        return;
    }

    const leftNum = parseInt(leftValue);
    const rightNum = parseInt(rightValue);
    let result;

    switch (operator) {
        case '+':
            result = leftNum + rightNum;
            break;
        case '-':
            result = leftNum - rightNum;
            break;
        case '*':
            result = leftNum * rightNum;
            break;
        case '/':
            if (rightNum === 0) {
                alert("It’s over 9000!");
                console.log("It’s over 9000!");
                return;
            }
            result = leftNum / rightNum;
            break;
        case '%':
            if (rightNum === 0) {
                alert("It’s over 9000!");
                console.log("It’s over 9000!");
                return;
            }
            result = leftNum % rightNum;
            break;
        default:
            alert('Error :(');
            return;
    }

    alert(`Result: ${result}`);
    console.log(result);
}

function isPositiveInteger(value) {
    const num = parseInt(value);
    return !isNaN(num) && num >= 0;
}

setInterval(() => {
    alert('Please, use me...');
}, 30000);