alert ("Boas vindas ao jogo do número secreto");

let numeroSecreto = 5;
console.log("Número secreto: " + numeroSecreto);

let chute = prompt("Digite um número entre 0 e 10");

if (chute == numeroSecreto) {
    alert(`Você acertou! ${numeroSecreto} é o número secreto!`);
} else {
    alert("Você errou!")
}
