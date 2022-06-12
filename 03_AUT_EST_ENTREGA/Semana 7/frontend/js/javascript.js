
// JQUERY
$('#btn-link').on({
    click: function(){
        window.location="https://www.linkedin.com/in/mihaellalves/"
    }
});

//Get de skills

var getResDiv = ".get";

function getSkills(){
    var url = "/skills";
    var resposta;

    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", url, false);
    xhttp.send();

    resposta = JSON.parse(xhttp.responseText);

    //Toda a tabela em JSON
    $(getResDiv).append("<br />" + JSON.stringify(resposta));
    //Get da skill de index 0
    // $(getResDiv).append("<br />Seleção da <i>skill</i>: " + resposta[0].skill);
    console.log(xhttp.responseText);
}