let car: { name: string, year: number } = { name: "Wrangler", year: 2024 };
console.log(car);

let car1 = { name: "Cherokee", year: 2021 }
console.log(car1);

car1.name = "Jeep";
console.log(car1);

let book = { title: 'PC Das', cost: 200 };
let khata = { title: 'Shatadal', cost: 25 };
let pen = { title: "Matador", cost: 5 };
let scale = { title: "All time" }

let items: { readonly title: string, cost?: number }[] = [book, khata, pen, scale];



// ------------------- Function --------------------

function sayHi(name: string) {
    console.log(`Hello there ${name.toUpperCase()}`);
}

sayHi('sohun')


function calculateDiscount(price: number) {
    return price * 0.9;
}

const finalPrice = calculateDiscount(200);
console.log(finalPrice);



// ----------------- Challenges ----------------
let names: string[] = ["Laal", "Neel", "Holudee", "Saadu", "Lalu"];
console.log(names);

// let nameChecker = (myName: string) => {
//     let inputName = myName;

//     for (let name of names) {
//         if (name === inputName) {
//             console.log(true);
//             return;
//         }

//     }
// }

let nameChecker = (name: string) => {
    return names.includes(name)
}
console.log(nameChecker("Lalu"));


let nameToCheck = "Sohun";

if (nameChecker(nameToCheck)) {
    console.log(`${nameToCheck} is in the list`);
}
else {
    console.log(`${nameToCheck} is not in the list`);
}


// Price After Discount
let calculatePrice = (price: number, discount?: number) => {
    return price-(discount || 0);
}

console.log(calculatePrice(199, 45));
console.log(calculatePrice(150));



// -------------- Problem - 2 ---------------
const sum = (message: string, ...numbers: number[]) =>{
    let doubled = numbers.map(number => number*2)
    console.log(doubled);

    let total = numbers.reduce((prev, curr) => {
        return prev + curr
    }, 0);

    return `${message} ${total}`
}


const result = sum('total number is', 1,2,3,4,5);
console.log(result);



// ----------- Problem - 3 Reverse String -----------
const reverseString = (name: string) => {
    return name.toLowerCase().split('').reverse().join('')
}

console.log(reverseString("Sohun"));
