let text = document.getElementById("text");
let sbmit = document.getElementById("submit");
let msg = document.getElementById("msg");

sbmit.onclick = function() {
    msg.innerHTML = "Last Message Delivered";
    text.value = "";
}