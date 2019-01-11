let example1 = [1,2,3,4,5,6];
// makes a deep copy
let example2 = [...example1];
example2.push(true);

let example1 = {
    firstName: 'Dylan'
};

// let example2 = {
// firstName: 'N/A'    
//     ...example1
// }

// example2 = {firstName: 'Dylan'}

console.log(example2);