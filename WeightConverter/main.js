document.getElementById('output').style.visibility = "hidden";
document.getElementById('lbsInput').addEventListener('input', function(e){
    document.getElementById('output').style.visibility = "visible";
    let lbs = e.target.value;
    console.log(lbs);


    document.getElementById('gramsOutput').innerHTML = lbs/0.0022046;
    document.getElementById('kilogramsOutput').innerHTML = lbs/2.2046;
    document.getElementById('ouncesOutput').innerHTML = lbs*16;
    
    
});

//document.getElementById('gramsOutput').innerHTML = n;