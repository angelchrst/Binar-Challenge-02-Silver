function checkEmail(email) {
    let validateEmail_1 = /^([A-Za-z][A-Za-z0-9\-\.\_]*)\@([A-Za-z][A-Za-z0-9\-\_]*)(\.[A-Za-z][A-Za-z0-9\-\_]*)+$/;
    let validateEmail_2 = /^([A-Za-z][A-Za-z0-9\-\.\_]*)+$/
    if(email != null) {
        if(typeof(email) == 'string') {
            if(validateEmail_1.test(email)) {
                return "VALID";
            } else if(validateEmail_2.test(email)){
                return "Email format doesn't match";
            } else {
                return "INVALID";
            }
        } else {
            return "Email must be a string";
        }
    } else {
        return "Email cannot be empty";
    }
}

console.log(checkEmail('apranata@binar.co.id'))
console.log(checkEmail('apranata@binar.com'))
console.log(checkEmail('apranata@binar'))
console.log(checkEmail('apranata'))
// console.log(checkTypeNumber(checkEmail(3322)))
// baris kode di atas sengaja di comment karena jika dipaksa untuk ditampilkan hasilnya akan error,
// kenapa error? -> karena function checkEmail berada di dalam function checkTypeNumber,
// padahal function checkTypeNumber tidak ada
console.log(checkEmail())