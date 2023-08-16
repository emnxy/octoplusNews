const matriz = []

function salvarCad() {
//    alert('oi')
    let usernome = document.getElementById("exampleInputNomeu1").value;  
    let nome = document.getElementById("exampleInputNome1").value;
    let email = document.getElementById("exampleInputEmail1").value;
    let dtnasc = document.getElementById("exampleInputData1").value;
    let cpf = document.getElementById("exampleInputCPF1").value;
    let senha = document.getElementById("exampleInputPassword1").value;
    let senhaconf = document.getElementById("exampleInputPassword").value;

    matriz.push([usernome, nome, email, dtnasc, cpf, senha, senhaconf])
    //console.log(matriz)

    
    gravaMat(matriz)
    
}


function gravaMat (getMatriz){
    return console.log(matriz)
}