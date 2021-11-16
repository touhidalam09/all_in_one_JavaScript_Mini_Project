const inkey = document.getElementById("inkey");
const inValue = document.getElementById("inValue");
const isOutput = document.getElementById("isOutput");

localStorageValue = window.onload = function() {
    isOutput.innerHTML = "";
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        isOutput.innerHTML += `${key}: ${value} <br />`;
    }
}

function fun() {
    const key = inkey.value;
    const value = inValue.value;

    key && value ?
        localStorage.setItem(key, value) :
        alert("Field the Fill box")
    localStorageValue();
};