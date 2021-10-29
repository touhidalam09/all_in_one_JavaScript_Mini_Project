// Encode the String
// const encodedStringArray = [
//     'b2xHcGxablNvLUw2akFBL3ZpZXdmb3JtP3VzcD1wcF91cmwmZW',
//     'YWxhbTY0OSU0MGdtYWlsLmNvbS1WenpxSEMybGF6VlR6UEJwJm',
//     'lwUUxTZS1nQUx1eFBKanJPVEZ2MnpCX0FSQVFBbEtGRHlYdTVS',
//     'VudHJ5LjE5NTQwNTAzMDQ9dG91aGlkYWxhbTY0OUBnbWFpbC5j',
//     'aHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZm9ybXMvZC9lLzFGQU',
//     '50cnkuMTAxMzkwOTE1PWZ6OW4wWHNLVFdCTnhNVkQtdG91aGlk',
//     'b20='
// ];
//Declaration Part
const url = "https://docs.google.com/forms/d/16twTSWj9a5Gs3LAN-qiZ0yebI9IKha-kr7FEzy5ogjw/edit";
//Encode url String
const encodeText = btoa(url);
console.log(`%c DEV::Actual url to BASE64 Encode:  %c ${encodeText}`,
    'color: #1c87c9; background: #ccc; font-size: 15px;',
    'color: #8ebf42; background: #666; font-size: 15px;');
var encodedStringArray = [];

//Create a Encode String Array, maximum element length is 50, and think it sort by randomly
function Character50LengthGenerate() {
    var textSlice = "";
    let i = 0;
    while (i <= encodeText.length) {
        textSlice = encodeText.slice(i, i + 50);
        encodedStringArray.push(textSlice);
        i = i + 50;
    }
    encodedStringArray.map(item => console.log(`%c DEV::Encode Character length 50: %c ${item}`, 'color: #1c87c9; background: #ccc; font-size: 15px;',
        'color: #8ebf42; background: #666; font-size: 15px;'))
}

//Shuffle EncodeStringArray
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

//encode to decode convert
function decoded(encodeString) {
    var decodedString = atob(encodeString);
    is_url(decodedString) ?
        console.log(decodedString) : '';

}

//check is valid URL
function is_url(str) {
    regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (regexp.test(str)) {
        return true;
    }
    else {
        return false;
    }
}

//Main Part Start here....
Character50LengthGenerate();
for (let i = 0; i < 1000; i++) {
    shuffle(encodedStringArray);
    var encodeString = encodedStringArray.join('');
    decoded(encodeString);
}