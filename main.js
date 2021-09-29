class MyString {
    constructor() { }
    reverse(name) {
        let str = name.split('');
        let reverse = str.reverse();
        let result = reverse.join('');
        return result
    }
    ucFirst(first) {
        return first[0].toUpperCase(0) + first.substr(1)
    }
    ucWords(word) {
        let str = word.split(' ');
        for (let i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].substr(1)
        } 
        return str.join(' ')
    }
}

let str = new MyString()
console.log(str.reverse('ivan'))
console.log(str.ucFirst('arsenal'))
console.log(str.ucWords('arsenal arsenal arsenal'))
