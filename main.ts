// [assignment 1]
console.log("Hello world"); 


// [assignement 2  CALCULATOR]

var prompt = require("prompt-sync");
let n1 = parseInt(prompt("enter your first number"));
let n2 = parseInt(prompt("enter your second number"));
let operator = (prompt("enter operator(+,-,*,/)"));

if (operator = "+"){
    console.log('the answer of ${n1} ${operator} ${n2} = ${n1}+{n2}');
}
if (operator = "-"){
    console.log('the answer of ${n1} ${operator} ${n2} = ${n1}-{n2}');
}
if (operator = "*"){
    console.log('the answer of ${n1} ${operator} ${n2} = ${n1}*{n2}');
}
if (operator = "/"){
    console.log('the answer of ${n1} ${operator} ${n2} = ${n1}/{n2}');
}
else{
    console.log("enter correct operator");
}
export{};

// [assignment 3]

let personName : string = "Kamran"
let message : string = '{personName} , hope you are doing good these days';
// console.log(message);

[assignment 4]

let lowercaseName: string = PersonName.toLowerCase();
console.log(lowercaseName);
let uppercaseName: string = PersonName.toUpperCase();
console.log(uppercaseName);
let words: string[] = PersonName.split(" ");
let titlecaseName: string = "";

for (let i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}

console.log(titlecaseName);


[assignement 5]

console.log(`Quaid e azam said , "expect the best , prepare for worst`);

[assignment 6]

let famousPerson : string = "Quaid e Azam";
let message : string = famousPerson + `once said , "expect the best , prepare for worst`;
console.log(message);

[assignment 7]

let personName : string = ("\n Muhammad khan" \t);
console.log("Name with space" , personName);
let strippedName : string = personName.trim();
console.log("strippedName" , strippedName);

[assignment 8]

const addition = 6+2 ;
console.log(addition);

const subtraction = 10-2;
console.log(subtraction);

const multiply = 4*2;
console.log(multiply);

const divided = 64/8;
console.log(divided);

[assignment 9]

console.log("=".repeat(80));
console.log ( 4+4 );
console.log("=".repeat(80));
console.log( 6+2);
console.log("=".repeat(80));
console.log( 7+1);
console.log("=".repeat(80));

[assignment 10]

let favouriteNumber = 12;
let message : string = `${favouriteNumber} , is my favourite number `;
console.log(message);

[assignment 11]

we can comment any thing with Ctrl + ? key 
example 

console.log("hello"); //

[assignment 12]

let names : string[] = ['rafay' , 'nafay' , 'wasil', 'adil'];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

[assignment 13] for loop

let names : string[] = ["raffay", "wasay" ," ayesha"];
for (let name of names){
    console.log(`good morning ${names} , do your lunch`)}; 

    [assignment 14] FAVPURITE TRANSPORT

    let favouriteTransportation : Array <[Transport : string , brand : string] > = [];
favouriteTransportation.push(["car" , "toyota"])
favouriteTransportation.push(["bike" , "honda"])
favouriteTransportation.push(["bicycle" , "sohraab"])

favouriteTransportation.forEach ((Transport , brand) =>{console.log("i need ${transport} ${brand}")});
 
[assignment 15] INVITING GUESTS

let guestlist : Array <string> = [
    "zia khan",
    "raffay khan",
    "wasay khan",
];
guestlist.forEach((guestName) =>
{
    console.log(`dear ${guestName} , you are invited`)
})

[assignment 16] ONE GUEST CANT ATTEND THE MEETING :(

    let guestArr : string [] = ["raffay" , "wasay" , "ayesha"];
let canNotAttend : string = "wasay";
 console.log(canNotAttend , "" + "can not attend meeting");

let newGuest : string = "alyyy" ;
guestArr [guestArr.indexOf (canNotAttend)] = newGuest;
console.log(guestArr);

guestArr.map((`items`) =>
console.log(`here are items ${items} , you are invited`);

[assignment 17]

let (guest of guestlist) {
    console.log(`hello ${guest} , we found a bigger dinner table`)
}
let newGuestAtbegining : string = "Ali Phool"
guestlist.unshift(newGuestAtbegining);
console.log(guestlist)

let newGuestinMiddle : string = "mian asif"
let middleIndex : number = Math.floor(guestlist.length/2)
guestlist.splice(middleIndex, 0, newguestinMiddle)
console.log(guestlist)

let newGuestAtEnd: string = "Muhammad Ali"
guestlist.push(newGuestAtEnd)
console.log("new set of invitation messages:");
for(let guest of guestlist){
    console.log(`dear ${guest}, you are invited to dinner`);
}

[assignment 18]

let guestlist : Array <string> = [
    "raffay",
    "wasay",
    "zia",
    "tabarak",
    "mozam"
]
console.log(`i can invite only two people for dinner`);

while(guestlist.lenght > 2){
let removeGuest = guestList.pop()
console.log(`Sorry , ${removeGuest} , i cant invite you to dinner`);

}

for(let guest for guestlist){
    console.log(`Hello , ${guest} , you are still invited to dinner`);
}

guestlist.pop()
guestlist.pop()

console.log(`Guest list after dinner`, guestlist)

[assignment 19]

let travelDestination : string [] = ["Madina" , "Makkah", "America","London" , "Newyork" , "Iran"];

console.log("Original Order");
console.log(travelDestination);

console.log("\n Alphabatical order without modifying the actual list");
console.log(...[travelDestination].sort());

console.log("Showing Array in its original order \n");
console.log(travelDestination);

// console.log("\n Reverse Alphabatical order without modifying the actual list");
// console.log([... travelDestination].sort().reverse())

// console.log("\n Reverse Order");
// travelDestination.reverse();
// console.log(travelDestination);

// console.log("\n Change to reverse Alphabtical order")
// travelDestination.sort().reverse
// console.log(travelDestination);

// [assignment 20]

// let guestArr : string [] = ["raffay" , "wasay" , "ayesha"];
// // let canNotAttend : string = "wasay";
// //  console.log(canNotAttend , "" + "can not attend meeting");

// // let newGuest : string = "alyyy" ;
// // guestArr [guestArr.indexOf (canNotAttend)] = newGuest;
// // console.log(guestArr);

// // guestArr.map((`items`) =>
// // console.log(`here are items ${items} , you are invited`);

// console.log(`\n printing message indicating number guests`)

// console.log(`we have finally invited ${guest.list/length}`)

// [assignment 21]

// const countries : string[] = ["USA", "CANADA","UAE" , "OMAN"]
// console.log("list of countries:")

// for (let country of countries){
//     console.log(country)
// }

// [assignment 22] STORING OBJECT IN ARRY

// let bouquet : void {} = {
//     name:  = "spring delight"
//     price:  = "1000"
//     details:  = "beautiful flowers"

}

let bouquets : Array<typeof bouquet> = [];

bouquet.push (bouquet);
bouquet.push ({
    name : "summer bliss"
    price: "300"
    details: "summer flower"
})

let bouquet3 

name : "baby lily"
    price: "300"
    details: "summer flower water"

    bouquet.push(bouquet3)
    console.log(bouquets)

    function displaybouquets (bouquets : Array<typeof bouquet>)

    for (let i of bouquets) {
        console.log(
            title : ${i.name};
            details$ : {i.details};
            price : ${1.price};
        )
    };
    displaybouquets(bouquets);

[assignment 23]


let Fruit = [
        createFruit("Apple" , "Mango", "Banana"),
        createFruit("red" , "yellow" , "yellow"),
        createFruit("A" ,"B" ,"c"),
        createFruit("NO", "YES" , "NOYES"),
        createruit("Citrusy" , "Tangy" , "Orange"),

    

]
const invalidIndex = 10;
console.log(`Fruit at index ${invalidIndex}:`, fruits [invalidindex]);

Fruit.forEach((Fruit) => {
       console.log(`Name: ${Fruit.name}, Color: ${Fruit.color}, Taste : ${Fruit.taste}`)
});
export{};

// [assignment 24] conditional Operators

let age = 25;
console.log("Is age > 18? I predict True.");
console.log(age < 18); // True

console.log("Is age < 21? I predict False.");
console.log(age < 21);  // False 

[assignment 25] ALIEN 
 
// first version of code 
let alien_color : string = "green";
 if (alien_color === `green`){
    console.log(`Congrats ! you just got 5 points for shooting the alien.`);
 }
 else{
    console.log(`Congrats ! you just got 10 points for shooting the alien.`)
 }
//    seocnd version of code 
 let alien_color : string = "blue";
 if (alien_color === `green`){
    console.log(`Congrats ! you just got 5 points for shooting the alien.`);
 }
 else{
    console.log(`Congrats ! you just got 10 points for shooting the alien.`)
 }

[assignment 26]

// first version of code 
let alien_color : string = "green";
 if (alien_color === `green`){
    console.log(`Congrats ! you just got 5 points for shooting the alien.`);
 }
 else{
    console.log(`Congrats ! you just got 10 points for shooting the alien.`)
 }
//    seocnd version of code 
 let alien_color : string = "blue";
 if (alien_color === `green`){
    console.log(`Congrats ! you just got 5 points for shooting the alien.`);
 }
 else{
    console.log(`Congrats ! you just got 10 points for shooting the alien.`)
 }
 third version of code 

 let alien_color : string = "red";
 if (alien_color === `red`){
    console.log(`Congrats ! you just got 5 points for shooting the alien.`);
 }
 else{
    console.log(`Congrats ! you just got 10 points for shooting the alien.`)
 }

// [assignment 27]

let age  : 25;
if (age < 2){
        console.log(`the person is a baby `);
else if (age < 4){
        console.log(`the person is a toddler `);
else if (age < 20){
         console.log(`the person is a teen `);
else if (age < 60){
        console.log(`the person is a elder `);          
}}}};

[assignment 28]

let favouriteFruit : string[] = ["apples" , "banana" , "orange"];
if (favouriteFruit.includes("apples")){
    console.log("i like apples");
if (favouriteFruit.includes("banana")){
    console.log("i like banana");
if (favouriteFruit.includes("orange")){
    console.log("i like orange");
}    
}    
}

[assignment 29] GREETING 

let UserName : string [] = ["admin", "raffay" , "wasay" , "noor" , "muhammad" , "wasil"];
function greetU const i : string 
 for (const i in UserName){
    if (UserName[i].toLowerCase() === `admin`) {
        console.log(`Hello admin, would you like to see a status report?`);
    } else {
        console.log(`Hello ${UserName[i]}, thank you for logging again`)
    }
 }
 greetU();

[assignment 30]

let UserName : string [] = ["admin", "raffay" , "wasay" , "noor" , "muhammad" , "wasil"];
function greetU const i : string 
 for (const i in UserName){
    if (UserName[i].toLowerCase() === `admin`) {
        console.log(`Hello admin, would you like to see a status report?`);
    } else {
        console.log(`Hello ${UserName[i]}, thank you for logging again`)
    }
 }
 console.log(`For non empty username: \n`);
 greetU (UserName);

 UserName : []
 console.log(`\n\n For empty username: \n`);
 greetU(UserName);
 export{};

// [assignment 31]
 
let currentUsers : string [] = ["Kamran" , "Ali" , "Adnan" , "Mahad" , "Asif" , "Khan"];
 let newUsers : string [] = ["rahat", "umer" , "sherry" , "minhas" , "daniyal"];

 function checkUserNames(currentUsers : string [] , new_users : string[]): void
 {
    const lowercasedCurrentUsers = currentUsers.map(user => user.toLocaleLowerCase());

    for (let newUser of new_users) {
        let lowercasedCurrentUsers = newUser.toLocaleLowerCase();
        if (lowercasedCurrentUsers.includes(lowercasedCurrentUsers)){
            console.log(`UserName "${newUser} is already taken. Please enter a new username`);

        } else {
            console.log(`UserName "${newUser} is available`)
        }
    }
 }

 checkUserNames(currentUsers , newUsers);

[assignment 32]

let emptyUserNames : string [] = [];

let UserNames  : string [] = ["raffay" , "wasay" , "ahsan", "pervaiz" , "khan"];

function greetUsers(UserNames : string []): void {
    if(`username.toLowerCase()===admin` ){
        console.log(`Hello admin, would you like to see astatus report?`)
    else {
        console.log(`Hello ${username}, thank you for logging in again .`);
    }    
    }
}
console.log(`for non empty username:\n`)
greetUsers (UserNames);

export{};

[assignment 33]

let numbers : number[] = [1,2,3,4,5,6,7,8,9];
let ordinal : string ;
if(number === 1) {
        ordinal = "st";
if(number === 2) {
        ordinal = "nd";
if(number === 3) {
        ordinal = "rd";  
if(number === 4) {
         ordinal = "th";          
  console.log(`${numbers} ${ordinal}`);               
}

[assignment 34]

let favouritePizza = ["BBQ" , "Chicken" , "cheese"];
console.log(`My favourite Pizza are:`);

for (let i = 0; i < favouritePizza.length; i++){
    console.log(`I like ${favouritePizza[i]} pizza.`);
} 

// printing for each favouritePizza

console.log("\n I like these pizza:");
for (let i = 0; i < favouritePizza.length; i++){
    console.log(`I like ${favouritePizza[i]} pizza`);
}

[assignment 35] LIST OF ANIMALS

let animals : string [] = [`cat` , `dog` , `goat` ]

console.log("List of animals:");
for ( let i of animals){
    console.log(animals);
}

console.log(`statement about each animal`)
for ( let animal of animals){
    if(animal === `dog` ){
        console.log(`A ${animal} is a great pet`);
    else if (animal === `cat`){
        console.log(`A ${animal} would be friendly`)
    else if ( animal === `dog`){
        console.log(`A ${animal} will wild`)
    }    
    }    
    }

}
console.log(`\n what these animal have in common?`)
console.log(`any of these animal would be a great pet`);


[assignment 36]


const make_shirt =  (size: string  , message : string ): void =>
{
    console.log(`size : ${size}, message: ${message}`)
}
// calling function

let size : string = "medium";
let message : string = "never give up";

make_shirt (size, message);
make_shirt("Large" , "yes i like this shirt");

[assignment 37]

function unknown_city   (city : string , country : string = " Unknown Country"){
    console.log(`${city} is in ${country}.`);
};

[assignment 38]
const city_country = (city: string, country : string) : string => {
    return  `${city} ${country}`;

}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("USA" , "Barkley"));
console.log(city_country("Iran" , "Oman"));

[assignment 39]

function make_album(artist : string , title  : string , tracks? : number);
{atrtists : string ; title : string  : tracks? : number}
{
    const album = {
        artist,
        title ,
        Tracks
    };
    if (track !== undefined){
        album.tracks = tracks ;
    }
    return album
}
const album = make_album(`Artist 1, Album 1`);
const album = make_album(`Artist 2 , album 2 `);
const album = make_album(`Artist 3 , album 3`);


console.log(album 1);
console.log(album 2);

[assignment 40]

let magicianeNames : string [] = ["Harry" , "Copper" , "Mark" , "Duen" , "Swan"];
function show_magicianeNames(magicians : string []): void {
    for(let items of magicians) {
        console.log(magicians);
    }
};

[assignment 43] 

let magicianeNames : string [] = ["Harry" , "Copper" , "Mark" , "Duen" , "Swan"];
function show_magicianeNames(magicians : string []): void {
    for(let items of magicians) {
        console.log(magicians);
    }
}

function make_great(magicians : string []) : string [] {
    const greatMagicians: string [] = magicians.map(magicians => `the
    Great ${magicians}`);
    return greatMagicians
}
const greatMagicianNames : string [] = make_great(magicianeNames);
console.log("Original Magicians:")
show_magicians(magicianeNames);

console.log( greatMagicianNames);
 
[assignment 44] MAKING SANDWHICH 


 function makeSandwhich(...items : string []): void {
    console.log("Sandwhich Summary");
  if (items.length === 0 ) {
    console.log(` you order an empty sandwhich please ad some items`);
  else   {
    items.forEach((items , index  => {
        console.log (` ${i + 1}.${items}`);

    }));
  
  } 
 console.log("\n"); 

[assignment 45]

function createCar(manufacturer : string , model: string, ... proprties : [string,any] []): any{
    const car: any = {
        manufacturer,
        model,
    };
    for (const [key,value] of properties ) [
        car[key] = value;
    ]
return car;
}
console.log(myCar);



// DEAR FACULTY AND SIR ZIA . I AM NEWBIE IN CODING BUT TRY MY BEST I KNOW I DO MISTAKE BUT I DONE HIS BY SACRIFICING WHOLE NIGHT AND SUBMITTING THIS AS SOON AS POSSIBLE.