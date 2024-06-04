
function Converter(CEP) {
    fetch("https://cep.awesomeapi.com.br/json/13380180")
        .then((response) => response.json())
        .then((data) => console.log(data))
        .then((error) => console.log(error))
}

document.getElementById("calcular").addEventListener("click",()=>{
    let CEP = document.getElementById("CEP").value
    Converter(CEP)
})