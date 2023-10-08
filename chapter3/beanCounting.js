function countBs(name) {
    let counter = 0;
    for (let count = 0; count < name.length; count++) {
        if (name[count] === "B") {
            counter++;                   
        }       
    }
    return counter;  
}
const myName = "Babe is BABE";
console.log(countBs(myName)) 



function countChar(book, Y) {
    let count = 0;
    for (let index = 0; index < book.length; index++) {
        if (book[index] === "Y") {
            count++;             
        }             
    }
    return count;    
}
const myBook = "You are a Big BabYY";
console.log(countChar(myBook));