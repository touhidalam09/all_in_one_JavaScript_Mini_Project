function rollDice1() {
    var die1 = document.getElementById('die1');
    var die2 = document.getElementById('die2');
    var status = document.getElementById('status1');
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var diceTotal = d1 + d2;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    status.innerHTML = "Player1 rolled " + diceTotal + ".";
    if (d1 === d2){
        status.innerHTML += `    Doubles!! Player1 get a free turn.`
    }
}
function rollDice2() {
    var die1 = document.getElementById('die1');
    var die2 = document.getElementById('die2');
    var status = document.getElementById('status2');
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var diceTotal = d1 + d2;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    status.innerHTML = "Player2 rolled " + diceTotal + ".";
    if (d1 === d2){
        status.innerHTML += `   Doubles!! Player2 get a free turn.`
    }
}