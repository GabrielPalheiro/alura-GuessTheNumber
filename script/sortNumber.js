const lowerValue = 1;
const higherValue = 10;
const secretNumber = sortNumber();

function sortNumber() {
  return parseInt(Math.random() * higherValue + 1);
  //com está sintaxe faz sortear vezes o maior valor mais 1 para poder retornar o maior valor
}

const elementLowerValue = document.getElementById("menor-valor");
elementLowerValue.innerHTML = lowerValue;

const elementHigherValue = document.getElementById("maior-valor");
elementHigherValue.innerHTML = higherValue;
