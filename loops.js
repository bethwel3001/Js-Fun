// 1. For loop

for (let a=0; a<=20; a++){
    console.log(a);
}
// 2. While loop
let b=0;
while (b<=20){
    console.log(b);
    b++;
}
// 3. Do while loop
let c=0;
do {
    console.log(c);
    c++;
}
// 4. For of loop

// 5. For in loop
const person  = {
    name: "John",
    age: 30,
    city: "New York",
    role: "developer"
};
for (const property in person) {
    console.log(`${property}: ${person[property]}`);
}