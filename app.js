alert ("Boas vindas ao jogo do número secreto");

let numeroSecreto = 5;
console.log("Número secreto: " + numeroSecreto);
let chute;
let tentativa = 1;

while (chute != numeroSecreto) {
    chute = prompt("Digite um número entre 0 e 10");


    if (chute == numeroSecreto) {
    alert(`Você acertou! ${numeroSecreto} é o número secreto! Com apenas ${tentativa} tentativas!`);
} else {
    if (chute > numeroSecreto) {
        alert(`O número secreto é menor do que ${chute}!`);
    } else {
        alert(`O número secreto é maior do que ${chute}!`);
    }
    tentativa++;
}
}


