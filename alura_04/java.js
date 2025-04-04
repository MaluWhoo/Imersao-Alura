// Criar uma lista com 3 personages
personagem = ["", "", ""]
viloes = ["", "", ""]

forcaPersonagem = 0
forcaViloes = 0

function jogar(){
    // alert("O array personagem contem isso aqui" + personagem)
    // const = não da para mudar. let = já da para mudar. São tipos de variaveis

    for(let i=0; i<3; i++){
    // o i=0 serve para pegar cada personagem 0, 1 e 2 respectivamente.
    // i<3 faz com que o 3 não entre na conta.
    // 1++ é para fazer com que vá de 1 em 1.
        EscolhaPersonagem = prompt("Digite o nome do seu Pokémon: " + (i + 1))
        personagem[i] = EscolhaPersonagem
    
    // Calcular a força de cada personagem 3 somar para saber a força total do time
        forcaPersonagem = forcaPersonagem + Math.floor(Math.random() * 10) + 1
       // forcaPersonagem += Math.floor(Math.random() * 10) + 1 // Menira mais avançada de fazer a linha de cima
    }
    // onsole.log("Agora o Arrey personagem contem: " + personagem)
    
    // console.log("Inicio Viloes: " + viloes)
    
    for(let i=0; i<3; i++){
        indiceAletorio = Math.floor(Math.random() * 5) //A maquina faz o sorteio em cima de uma lista com 10 personagens
        viloesPossiveis = ["Gengar", "Lapras", "Mewtwo", "Ditto", "Charizard"]
        viloes[i] = viloesPossiveis[indiceAletorio]
    
    // Calulcar a força de cada personagem do time do computador também 
        forcaViloes = forcaViloes + Math.floor(Math.random() * 10) + 1
    }
    
    //console.log("Final Vilões " + viloes)
    
    // Comparar os dois times para saber quem vence.
    if (forcaPersonagem > forcaViloes){
        alert("Seu time ganhou! Sua força foi " + forcaPersonagem + "!")
    }
    else { // Se a primeira condição do IF não for verdeira, uma outra condição de IF se inicia nesse ELSE
        if (forcaPersonagem < forcaViloes){
            alert("Seu time perdeu! Tenha mais sorte na proxima. A força do Computador foi " + forcaViloes + "!")
        }
        else{
            alert("Empate! Você e o Computador tem a mesma força!")
        }
    }
}

