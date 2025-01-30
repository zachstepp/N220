const password = "(d0nteatTheScript)"; //totally don't need to change password later in case I get hacked, so const
let startWithSpace = password.charAt(0) == " "; //this is a check, shouldn't be const
let atLeast8Chars = password.length >= 8; //this is a check, shouldn't be const
let containsEat = password.includes("eat"); //this is a check, shouldn't be const
console.log("Password starts with space? ", startWithSpace);
console.log("Password is at least 8 characters? ", atLeast8Chars);
console.log("Password contains 'eat'?", containsEat);
