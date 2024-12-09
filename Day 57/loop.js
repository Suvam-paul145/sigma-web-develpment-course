


// for loop as the c++,c

let obj = {
    name : "Suvam Paul", 
    Stream : "CSE",
    interest : "Gate"

}

/// normal for loop
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
// use to print the elemt of a given object 

for (const key in obj) {
   // if (obj.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key);                
    //}
}
  // used for for print te elements of a string you  have to givethe string values

for (const element of "suvam Paul") {
    console.log(element);
    
}
let a=8, b=7;
while (a>b) {
    console.log((a--)-b)   
}

do {
    
} while (condition);



