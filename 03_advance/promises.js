const promiseOne = new Promise(function(resolve, reject) {
    //Do any async task
    // DB Calls, cryptography, network
    setTimeout(function() {
        console.log('Async task is complete');
        resolve();
    }, 10000)
})

promiseOne.then(function() {
    console.log("Promise consumed");
})

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task 2");
        resolve();
    }, 10000)
}).then(function() {
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve({username: "Vipul", email: "adarshsinggh1262@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFourth = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "Vipul", password: "12345"});
        }else{
            reject('ERROR: Something went wrong');
        }
    }, 1000)
})

// promiseFourth.then().catch()
promiseFourth
.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected"));

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "Javascript", password: "12345"});
        }else{
            reject('ERROR: JS went wrong');
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch(error){
        console.log(error);
    }
}

consumePromiseFive();


async function getallusers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getallusers();

