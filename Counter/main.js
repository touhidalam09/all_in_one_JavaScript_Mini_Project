let count = 0;
let counter = document.getElementById("counter");
let lcount = document.getElementById("lcount");
let acount = document.getElementById("acount");

function color() {
    count < 0 ? counter.style.color = "red" : counter.style.color = "#094c46bf";

}

acount.onclick = function() {
    count = count + 1;
    counter.innerHTML = count;

    color();
}

lcount.onclick = function() {
    count = count - 1;
    counter.innerHTML = count;
    color();
}