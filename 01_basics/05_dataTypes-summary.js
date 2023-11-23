// +++++++++++++++++ Stack(Primitive dataTypes), Heap(Non-Primitive dataTypes) Memory +++++++++++++++

let myYoutubename = "adarshsingh";
let anothername = myYoutubename;

anothername = "vipulsingh";

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "adarsh@google.com",
    upi:"adarsh@ybl"
}

let userTwo = userOne;

userTwo.email = "vipul@google.com";

console.log(userOne.email);
console.log(userTwo.email);