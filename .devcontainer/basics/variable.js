const accountId = 144556

//value of const variable cannot be changed

let accountEmail = "neha@gmail.com"
var accountPassword = "12345"
let accountCity = "Jaipur"
let accountState;
//if we declare a variable without assigning a value, it will be undefined by default
/*    
prefer not to use var as it is function scoped and block scoped, it can lead to unexpected behavior.       
*/
console.log(accountId)
console.table([accountEmail, accountPassword, accountCity])