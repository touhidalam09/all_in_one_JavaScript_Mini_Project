let color = ["#7CFC00",
        "#7FFF00",
        "#32CD32",
        "#00FF00",
        "#228B22",
        "#008000",
        "#006400",
        "#ADFF2F",
        "#9ACD32",
        "#00FF7F",
        "#00FA9A",
        "#90EE90",
        "#98FB98",
        "#8FBC8F",
        "#3CB371",
        "#2E8B57",
        "#808000",
        "#556B2F",
        "#6B8E23"
    ],
    index = 0;
document.getElementById('main').onclick = function() {


    document.getElementById('main').style.background = color[index];
    index < color.length ? index = index + 1 : index = 0;


}

/***
 * 
 */