function jogar(){
    idade = prompt ("Qual sua idade? ")

    /* so vai ser executada se for verdeiro */
    if(idade < 18) {
        alert ("SAI DAQUI!")
    }

    /* no JS usamos o else if como se fosse o elif do pýthon */
    if(idade >= 18 ){
        escolhaJogador = prompt ("Digite: 1 para Pedra, 2 para Papel ou 3 para Tesoura?")
        escolhaComputador = Math.floor(Math.random() * 3) + 1;

        // Math gera um número aleatório mais com ,
        // Floor -- Arredonda o número para baixo.

        // Jogador Pedra, Computador Pedra --> Empate
        // Jogador Papel, Computador Papel --> Empate
        // Jogador Tesoura, Computador Tesoura --> Empate
        if (escolhaJogador == escolhaComputador) {
            alert("Empate!")
        }
    
        // Jogador Pedra 1, Computador Tesoura 3 --> Jogador vence
        if (escolhaJogador == 1) {
            if (escolhaComputador == 3)
            alert("Você ganhou! Computador escolheu Tesoura.")
       }
    
       // Jogador Papel 2, Computador Pedra 1 --> Jogador vence
       if (escolhaJogador == 2) {
        if (escolhaComputador == 1 )
            alert ("Você ganhou! Computador escolheu Pedra.")
       }
    
        // Jogador Tesoura 3, Computador Papel 2 --> Jogador vence
        if (escolhaJogador == 3) {
            if (escolhaComputador == 2 )
                alert ("Você ganhou! Computador escolheu Papel.")
           }
      
        // Jogador Pedra 1, Computador Papel 2 --> Computador vence
        if (escolhaJogador == 1) {
            if (escolhaComputador == 2 )
                alert ("Você Perde! Computador escolheu Papel.")
           }
    
        // Jogador Tesoura 3, Computador Pedra 1 --> Computador vence
        if (escolhaJogador == 3) {
            if (escolhaComputador == 1)
                alert ("Você Perdeu! Computador escolheu Pedra.")
           }
      
        // Jogador Papel 2, Computador Tesoura 3--> Computador vence
        if (escolhaJogador == 2) {
            if (escolhaComputador == 3)
                alert ("Você Perdeu! Computador escolheu Tesoura.")
           }
    
        // Debugging
        // alert("A escolha do computador foi " + escolhaComputador)
        }
    
}

