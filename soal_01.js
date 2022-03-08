function changeWord (selectedText, changeWord, text) {
    switch (selectedText) {
        case 'mencintai':
            text = `Andini sangat ${changeWord} kamu selamanya`
            return text;
        case 'bromo':
            text = `Gunung ${changeWord} tak akan mampu menggambarkan besarnya cintaku padamu`
            return text;
        default:
            break;
    }
}

const kalimat1 = 'Andini sangat mencintai kamu selamanya'
const kalimat2 = 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu'

console.log(changeWord('mencintai','membenci',kalimat1))
console.log(changeWord('bromo','semeru',kalimat2))