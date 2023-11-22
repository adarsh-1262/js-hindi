const accountId = 144553
let accountEmail = "adarsh@google.com"
var accountPassword = "12345"
accountCity = "Gorakhpur"
let accountState;

console.log(accountId);
/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

accountEmail = "vipul@google.com"
accountPassword = "34243"
accountCity = "Gurgaon"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);