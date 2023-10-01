//1.
function addElement(arr,element) {
    if (!arr.indexOf(element)) {
        arr.push(element);
    }
    return arr;
}
console.log(addElement([11,23,15,8,12],13));
//2.
function addTo(number) {
    return number === 0
        ? number
        : number < 0
            ? (() => {
                throw new Error("Number should be positive");
            })
            : number + addTo(number - 1);
}

console.log(addTo(5));

//3.
function meanNumbers(arr) {
    return arr.reduce((sum, num) => sum + num, 0) / arr.length;
}
console.log(meanNumbers([1,2,3,4,5]));
//4.
const otherTypeToDecimal = (binary,x) => parseInt(binary,x);
console.log(otherTypeToDecimal('1010',2));
console.log(otherTypeToDecimal('1010',8));
console.log(otherTypeToDecimal('1010',16));
//5
function  decimalToOtherType(decimal,x) {
    let answer = '';
    while (decimal > 0) {
        answer = (decimal % x) + answer;
        decimal = Math.floor(decimal / x);
    }
    return answer;
}
console.log(decimalToOtherType(10,2));
console.log(decimalToOtherType(10,8));
console.log(decimalToOtherType(10,16));
//6
function generateRandomNumber(x) {
    return Math.random()*x;
}
console.log(generateRandomNumber(12));