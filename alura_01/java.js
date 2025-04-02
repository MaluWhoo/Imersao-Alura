 /* conversão do V-bucks para o Real
    Levando se:
        1.000 V-Bucks vale em torno de 31 Reais = 
          1 V-Bucks = 0,03 centavos em Real
 */
function conversor(){

    let valor = prompt ("Digite um valor em V-Bucks: ");
    let vbucks = 0.03;
/* formatação do número/resultado para Real */
/* oLocaleString("pt-BR" = formata o número no padrão BR */
/* { style: "currency", currency: "BRL" } = ele insere o símbolo de moeda como R$*/

    let resultado = (valor * vbucks).toLocaleString("pt-BR", { style: "currency", currency: "BRL" }); 
    alert (resultado)

/*
    alert ("R$" + valor * vbucks)
*/

}