function checksValidValue(guess) {
  const number = +guess; //+guess transforma o guess em numero inteiro

  if (validateNumber(number)) {
    elementGuess.innerHTML += `<div>Valor Inválido</div>`;
    return;
  }

  if (numberLowerOrHigher(number)) {
    elementGuess.innerHTML += `<div>Valor inválido, o número precisa estar entre: ${lowerValue} e ${higherValue}</div>`;
    return;
  }

  if (number === secretNumber) {
    document.body.innerHTML = ` 
    <h1>Uau!!! Você acertou o número</h1>
    <h3>O número era: ${secretNumber}</h3>

    <button id="playAgain" class="play">Jogar novamente</button>
    `;
    return;
  } else if (number > secretNumber) {
    elementGuess.innerHTML += `<h3>O número secreto é menor <i class="fa-solid fa-down-long"></i></h3>`;
  } else {
    elementGuess.innerHTML += `<h3>O número secreto é maior <i class="fa-solid fa-up-long"></i></h3>`;
  }
}
function validateNumber(number) {
  return Number.isNaN(number);
}
function numberLowerOrHigher(number) {
  return number > higherValue || number < lowerValue;
}

document.body.addEventListener("click", (e) => {
  if (e.target.id == "playAgain") {
    window.location.reload();
  }
});
