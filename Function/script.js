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