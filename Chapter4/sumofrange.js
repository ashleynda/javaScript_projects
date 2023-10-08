function range(start, end, step) {
    const result = [];
    for (let index = start; index < end; index+= step) {
        result.push(index);        
    }
    return result;    
}
const myRange = range(1, 10, 2);
console.log(myRange);

// function addition(numbers) {
//     // let numbers = [5, 4, 3, 2];
//     let sum = 0;
//     for (let index = 0; index < numbers.length; index++) {
//         sum += numbers[index];        
//     }
//     return sum;
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(addition(numbers));