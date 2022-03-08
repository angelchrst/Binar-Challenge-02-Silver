function isValidPassword(givenPassword) {
    let upperCase = /[A-Z]/g;
    let lowerCase = /[a-z]/g;
    let numbers = /[0-9]/g;
    if(givenPassword != null) {
        if(typeof(givenPassword) == 'string') {
            if(givenPassword.length >= 8) {
                if(upperCase.test(givenPassword) && lowerCase.test(givenPassword) && numbers.test(givenPassword)) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            return "ERROR : Password must be a string";
        }
    } else {
        return "ERROR : Password cannot be empty";
    }
}
        
console.log(isValidPassword('Meong2021'))
console.log(isValidPassword('meong2021'))
console.log(isValidPassword('@eong'))
console.log(isValidPassword('Meong2'))
console.log(isValidPassword(0))
console.log(isValidPassword())