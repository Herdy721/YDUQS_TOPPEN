document.getElementById("value").textContent = `13 parcelas`;
const value = document.querySelector("#value");
const input = document.querySelector("#volume");
function updateValue() {
  const inputValue = input.value;
  if (inputValue == 1) {
    value.textContent = 'À vista';
  } else if (inputValue > 1) {
    value.textContent = `${inputValue} Parcelas`;
  } else {
    value.textContent = inputValue;
  }
}

document.getElementById("value_entrada").textContent = `Defina o valor de entrada`;
const value_entrada = document.querySelector("#value_entrada");
const input_entrada = document.querySelector("#entrada");
function updateValue_entrada() {
  const inputValue_entrada = input_entrada.value_entrada;
  value_entrada.textContent = `R$${value_entrada} de entrada`;
}


input.addEventListener("input", (event) => {
  updateValue();
  getValordiv();
  updateValue_entrada();
});

document.getElementById("result").textContent = `R$ 0`;
document.getElementById("result_2").textContent = `Saldo devedor: R$ 0`;

function countChecked() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  const checkedCount = checkboxes.length;
  const result_saldo = checkedCount * 7200;
  document.getElementById('result_saldo').textContent = ` R$ ${result_saldo}`;
}

// Executar as funções ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  getValorParcelas();
  updateValue();
  getValordiv();
  atuaValordiv();
  updateValue_entrada();
});

// Executar as funções quando o rádio for alterado
const radioContainer = document.querySelector('.input__check');
radioContainer.addEventListener('change', () => {
    getValorParcelas();
    updateValue();
    getValordiv();
    atuaValordiv();
});

function getValorParcelas() {
  // Obtém todos os elementos radio com o nome "radio__parcelas"
  const radios = document.getElementsByName('radio__parcelas');

  // Itera por cada radio button
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      // Se o radio estiver selecionado, retorna o valor correspondente
      if (radios[i].value === 'Vencidas') {
        return 3000;
      } else {
        return 7200;
      }
    }
  }
}

function getValordiv() {
  const result = getValorParcelas();
  const input = document.querySelector("#volume");
  const inputValue = input.value;
  const result_div = result / inputValue
  const formattedValue = result_div.toFixed(2);
  value_div.textContent = `Valor da parcela: R$ ${formattedValue}`;
}

function atuaValordiv() {
  const result = getValorParcelas();
  const result_format = result.toFixed(2);
  const result_div = getValordiv();
  document.getElementById('result').textContent = `R$ ${result_format}`;
  document.getElementById('result_2').textContent = `Saldo devedor: R$ ${result_format}`;
}

function criarPopup(){
  alert("Documento enviado por e-mail!");
}
