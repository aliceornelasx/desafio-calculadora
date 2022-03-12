function media (){
    
    let n1 = parseInt(document.getElementById("n1").value)
    let n2 = parseInt(document.getElementById("n2").value)
    let n3 = parseInt(document.getElementById("n3").value)
    let n4 = parseInt(document.getElementById("n4").value)

    let media = (n1+n2+n3+n4) / 4

    if (media >= 5){ 
        document.getElementById("resultado").innerHTML = "<font color = 'white'> Parabéns, foi aprovado! A sua média final foi: " + media.toFixed(1) + "</font>"
    } else {
        document.getElementById("resultado").innerHTML = "<font color = 'white'> Infelizmente reprovou. A sua média final foi: " + media.toFixed(1) + "</font>"
    }

}