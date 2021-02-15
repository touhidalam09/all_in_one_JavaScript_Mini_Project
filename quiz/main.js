function check() {
    var q1 = document.quiz.question1.value;
    var q2 = document.quiz.question2.value;
    var q3 = document.quiz.question3.value;
    var correct = 0;

    if (q1 == 'dhaka'){
        correct++;
    }
    if (q2 == 'Taka'){
        correct++;
    }
    if (q3 == 'Dollar'){
        correct++;
    }

    //document.getElementById('number_correct').innerHTML = `Question1: ${q1}  Question2: ${q2}    Question3: ${q3}`;

    var message = [
        "Great job!",
        "That's just okay",
        "You really need to do better"
    ]
    var colorChange = [
        "green",
        "orange",
        "#ff5459"
         
    ]
    var range;

    if (correct < 1 ){
        range = 2;
    }
    if (correct>0 && correct < 3){
        range = 1;
    }
    if (correct > 2 ){
        range = 0;
    }

    var after_submit_style_change = document.getElementById('after_submit').style;

    document.getElementById('message').innerHTML = message[range];
    document.getElementById('number_correct').innerHTML = `Total Correct answer = ${correct}`

    after_submit_style_change.visibility = "visible";
    after_submit_style_change.background = colorChange[range];
}