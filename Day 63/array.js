let a = [1, 2, 3, 4, 5, "Suvam "];

// for (let i = 0; i < a.length; i++) {
//     const element = a[i];
//     console.log(a[i]);

// }

// let obj = {
//     a: 10,
//     b: 30,
//     c: 20
// }

// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key, obj[key]);

//     }
// }
// for (const element of "10933283") {
//     console.log(element);

// }


// console.log(a.indexOf(5));
// console.log(a.concat([100, 500]), a.length);
// console.log(a);
// console.log(typeof a); // typeof array is always object
 console.log(a.toString());

// console.log(a.reverse());
// console.log(a.join(" and "));
// a.push(23)
// console.log(a);
// let newArr = a;
// //map 
newArr = a.map((e) => {
    return e ** 2
})

console.log(newArr);

// filter 

const greaterThanFive = (e, index, array) => {
    if (e > 5) {
        return true;
    }
    else
        return false
}
newArr.filter(greaterThanFive);

const red = (a,b ) =>{
    return a*b;
}

console.log(newArr.reduce(red));


// console.log(newArr);
  let arr = ["Suvam"];
  console.log(arr.form);
  
