var btn_calcular = document.getElementById("calcular");
var btn_refazer = document.getElementById("refazer");
var input_altura = document.getElementById("altura");
var input_peso = document.getElementById("peso");

var div_pesoideal = document.querySelector(".pesoideal");

var classecm = document.querySelectorAll(".cm");

var animacao = document.querySelector(".grafico");
var hstatus = document.querySelector(".status");
var resultado = document.querySelector(".resultado");
var niveistabela = document.querySelector(".niveis");

var total = document.querySelector(".total");
var status = "Normal";





function calcular (){

var pesoideal = [];


pesoideal.push(input_altura.value[1]);
pesoideal.push(input_altura.value[2]);

var pesoidealconvertido = Number(`${pesoideal[0]}${pesoideal[1]}`)

var goup = "";
goupeso = 0;

if(pesoidealconvertido > input_peso.value) {
    goup = "ganhar"
    goupeso = pesoidealconvertido - input_peso.value
} else {
    goup = "perder"
    goupeso = input_peso.value - pesoidealconvertido
}



div_pesoideal.innerHTML = `<br><p>O seu peso ideal é ${pesoidealconvertido} kgs.<br> sendo assim você precisa ${goup} ${goupeso} kgs.</p>`

var imc = (input_peso.value / (input_altura.value * input_altura.value)*10000).toFixed(1);
total.innerText = imc;

if (imc <= 16.9) {
    status = "Muito abaixo do peso"
}else if(imc <= 18.4) {
    status = "Abaixo do peso"
}else if(imc <= 24.9) {
    status = "Normal";
}else if(imc <= 29.9) {
    status = "Sobrepeso"
}else if(imc <= 34.9) {
    status = "Obesidade Grau 1"
}else if(imc <= 39.9) {
    status = "Obesidade Grau 2"
}else if(imc > 40) {
    status = "Obesidade Grau 3"
}

hstatus.innerHTML = `${status}<br>
<span id=""><i class='bx bxs-check-circle'></i>IMC Calculado!</span>`

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


        classecm[0].innerHTML = `<input type="number" id="altura" disabled >
        <label for="">cm</label>`;

        classecm[1].innerHTML = `<input type="number" id="peso" disabled>
        <label for="">kg</label>`;

};

input_altura.addEventListener("focusout",()=>{

    
    input_altura.value = input_altura.value.replace(".","").replace(",","");
})


        // animacao.style.display = "none";
        // resultado.style.display = "flex";
        // niveistabela.style.display = "flex";
        // btn_calcular.style.display = "none";
        // btn_refazer.style.display = "block";


btn_calcular.addEventListener("click",()=>{
    var input_altura = document.getElementById("altura");
    var input_peso = document.getElementById("peso");

    if(input_altura.value == ""|| input_altura.value <= 0) {

        input_altura.value = 0;
        input_peso.value = 0;
        alert("Verifique os dados e tente novamente");

    } else {
        calcular();
    }
});

btn_refazer.addEventListener("click",()=>{
    window.location.reload(true);
})




        

        
        


        