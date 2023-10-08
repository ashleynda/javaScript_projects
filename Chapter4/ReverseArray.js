function reverseArray(numbers) {
    const reverse = [];
    for (let index = numbers.length - 1; index >= 0; index--) {
        reverse.push(numbers[index]);   
    }
    return reverse;  
}
const myNumbers = [1, 2, 3, 4];
console.log(reverseArray(myNumbers));



function reverseArrayInPlace(params) {
    
}

