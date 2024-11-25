function generatePassword(length,includeNumbers ,includeSpecialChars){

    let passWord=""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (includeNumbers)
         str += "0123456789"
    if (includeSpecialChars) 
        str += "!@#$%^&*-_+=[]{}~`"    

    for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        console.log((Math.random()  * str.length))
        passWord += str.charAt(char)
        
      }

      return passWord
    
}

// var length = prompt("Enter value")
// var includeNumbers = prompt("Enter value")
// var includeSpecialChars = prompt("Enter value")

var length = 10
var includeNumbers =true
var includeSpecialChars = true
console.log(generatePassword(length,includeNumbers ,includeSpecialChars))