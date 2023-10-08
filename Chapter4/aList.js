function arrayToList(value) {
    let list = {
        value: 1,
        rest: {
            value: 2,
            rest: {
                value: 3,
                rest: null
            }
        }
    };
}
const myArray = [1, 2, 3];
console.log(arrayToList({myArray}));


// function listT0