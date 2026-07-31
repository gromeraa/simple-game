alert ("Boas vindas ao jogo do número secreto");
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log("Número secreto: " + numeroSecreto);
let chute;
let tentativa = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Digite um número entre 0 e ${numeroMaximo}`);

    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor do que ${chute}!`);
        } else {
            alert(`O número secreto é maior do que ${chute}!`);
        }

        tentativa++;
    }
}

let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa";
alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} em ${tentativa} ${palavraTentativa}!`);

/* if (tentativa > 1) {
    alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} em ${tentativa} tentativas!`);
} else {
    alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} em ${tentativa} tentativa!`);
} */
