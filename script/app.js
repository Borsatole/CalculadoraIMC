var btn_calcular = document.getElementById("calcular");
var btn_refazer = document.getElementById("refazer");
var input_altura = document.getElementById("altura");
var input_peso = document.getElementById("peso");

var animacao = document.querySelector(".grafico");
var resultado = document.querySelector(".resultado");
var niveistabela = document.querySelector(".niveis");

var total = document.querySelector(".total");


var resultadonb = 21.9;

total.innerText = resultadonb;

var status = "Normal";




btn_calcular.addEventListener("click",()=>{
    var input_altura = document.getElementById("altura");
    var input_peso = document.getElementById("peso");

    if(input_altura.value == ""|| input_altura.value <= 0) {

        input_altura.value = 1;
        input_peso.value = 0;
        alert("Verifique os dados e tente novamente");

    } else {
        animacao.style.display = "none";
        resultado.style.display = "flex";
        niveistabela.style.display = "flex";
        btn_calcular.style.display = "none";
        btn_refazer.style.display = "block";
    }
});

btn_refazer.addEventListener("click",()=>{
        input_altura.value = 1;
        input_peso.value = 0;
        animacao.style.display = "block";
        resultado.style.display = "none";
        niveistabela.style.display = "none";
        btn_calcular.style.display = "block";
        btn_refazer.style.display = "none";
})




        animacao.style.display = "none";
        resultado.style.display = "flex";
        niveistabela.style.display = "flex";
        btn_calcular.style.display = "none";
        btn_refazer.style.display = "block";

        var linhas = document.getElementsByTagName("tr");
        

        for (var i = 0;i<linhas.length; i++ ) {

            if (linhas[i].innerText.includes(status)){
                linhas[i].style.background = "#14B339";
                linhas[i].style.color = "white";
            }
        }