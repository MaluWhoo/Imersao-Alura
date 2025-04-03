ganhou = 0 //se for 1 = perdeu. Se for 0 = ganhou,

function jogar() { // Chamando o botão
    for(let rodada = 1; rodada <= 3; rodada ++){ // A Variavel criada dentro do for
        console.log("Rodada:" + rodada)
    
        escolhaJogador = prompt("Rodada " + rodada + " escolha entre (1,2 ou 3):")
        pisoQuebrado = Math.floor(Math.random()*3) + 1;
    
        // Quando o número for maior ou igual a 4 = o que era para ser o loop, para
        if (escolhaJogador >= 4){
            alert("Nada de tentar roubar!")
            break
        }
    
        if(escolhaJogador == pisoQuebrado){
            alert("Número errado! O número sorteado era " + pisoQuebrado)
            // Se o jogador escolher o mesmo que a máquina
            rodada = 1000; // Por que ele parava exatamento na rodada 3. Isso faz ele parar no 3 rodada.
            ganhou = 1
        } else {
            alert("Passou! O número sorteado era " + pisoQuebrado)
        }
    
        // rodada = rodada + 1 // Controle do loop
    }
    
    // Quando ele ganha verdadeiro, e se verdadeiro ele ganhou, quaso ao contrario falso = perdeu
    if(ganhou == 0){
        alert("Você ganhou!")
    }
    else {
        alert("Você perdeu! Tente novamente!")
    }
}