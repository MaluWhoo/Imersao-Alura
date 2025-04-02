rodada = 1

// Chamando o botão
function jogar() {
    while(rodada <= 3) {
        console.log("Rodada:" + rodada)
    
        escolhaJogador = prompt("Rodada " + rodada + " escolha entre (1,2 ou 3):")
        pisoQuebrado = Math.floor(Math.random()*3) + 1;
    
        // Quando o número for maior ou igual a 4 = o que era para ser o loop, para
        if (escolhaJogador >= 4){
            alert("Nada de tentar roubar!")
            break
        }
    
        if(escolhaJogador == pisoQuebrado){
            alert ("Número errado! O número sorteado era " + pisoQuebrado)
            // Se o jogador escolher o mesmo que a máquina
            rodada = 1000; // Por que ele parava exatamento na rodada 3. Isso faz ele parar no 3 rodada.
        }
    
        else {
            alert("Passou! O número sorteado era " + pisoQuebrado)
        }
    
        rodada = rodada + 1 // Controle do loop
    }
    
    // Quando ele ganha verdadeiro, e se verdadeiro ele ganhou, quaso ao contrario falso = perdeu
    if(rodada == 4){
        alert("Você ganhou!")
        rodada = 1
    }
    else {
        alert("Você perdeu! Tente novamente!")
        rodada = 1 
    }
}