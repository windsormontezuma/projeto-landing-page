var SetaRight = window.document.getElementById("seta-right")
var Leonardo = window.document.getElementById("leonardo")
var Samantha = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("bruna")
var SetaLeft = window.document.getElementById("seta-left")


function RolarParaDireita() {
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    SetaRight.style = "display:none"
    SetaLeft.style = "display:flex; margin-top:55px"
} 

function RolarParaEsquerda() {
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    SetaRight.style = "display:flex; margin-top:55px"
    SetaLeft.style = "display:none"
}