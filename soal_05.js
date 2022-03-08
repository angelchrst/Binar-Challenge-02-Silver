function getSplitName(personName) {
    if (typeof(personName) == 'string') {
        let jumlahNama = personName.split(' ');

        if (jumlahNama.length <= 3) {
            if (jumlahNama.length == 3) {
                let firstName = personName.split(' ')[0];
                let middleName = personName.split(' ')[1] != null ? personName.split(' ')[1] : null;
                let lastName = personName.split(' ')[2] != null ? personName.split(' ')[2] : null;
                let data = {
                    firstName: firstName,
                    middleName: middleName,
                    lastName: lastName,
                };
                return data;
            } else if (jumlahNama.length == 2) {
                let firstName = personName.split(' ')[0];
                let middleName = null;
                let lastName = personName.split(' ')[1];
                let data = {
                    firstName: firstName,
                    middleName: middleName,
                    lastName: lastName,
                };
                return data;
            } else {
                let firstName = personName.split(' ')[0];
                let middleName = null;
                let lastName = null;
                let data = {
                    firstName: firstName,
                    middleName: middleName,
                    lastName: lastName,
                };
                return data;
            }
        } else {
            return 'ERROR : This function is only for 3 characters name'
        }
    } else {
        return 'ERROR : Data must be filled with string value'
    }
}

console.log(getSplitName("Aldi Daniela Pranata"))
console.log(getSplitName("Dwi Kuncoro"))
console.log(getSplitName("Aurora"))
console.log(getSplitName("Aurora Aureliya Sukma Darma"))
console.log(getSplitName(0))


