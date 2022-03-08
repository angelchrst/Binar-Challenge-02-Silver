function getAngkaTerbesarKedua(dataNumbers) {
    let secMax = 0;
    if(dataNumbers != null) {
        if(dataNumbers.length > 0) {
            for(let i = 1; i < dataNumbers.length; i++) {
                if(dataNumbers[i] > secMax) {
                    secMax = dataNumbers[i];
                }
            }
            return secMax;
        } else if(dataNumbers == 0) {
            return "ERROR : Data cannot be filled with 0";
        } else {
            return false;
        }
    } else {
        return "ERROR : Data cannot be empty";
    }
}

const dataAngka = [9,4,7,7,4,3,2,2,8]

console.log(getAngkaTerbesarKedua(dataAngka))
console.log(getAngkaTerbesarKedua(0))
console.log(getAngkaTerbesarKedua())