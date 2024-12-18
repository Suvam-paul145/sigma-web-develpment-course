// write a JS program to print the factoria of a given no 

//var no = prompt("Please enter a number");
// let number = 6
// var factorial = 1;
// method to create one array 
function factorial1(number) {
    let arr = Array.from(Array(number + 1).keys())
    // console.log(arr.slice(1,))
    let c = arr.slice(1,).reduce((a, b) => {
        return a * b

    })
    console.log(c);
}

factorial1(7)


// for (let i = 1; i <= no; i++) {
//    // const element = array[i];
//     factorial = factorial * i;
// }

// console.log(factorial);