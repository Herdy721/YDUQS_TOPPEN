document.getElementById("value").textContent = `13 parcelas`;
const value = document.querySelector("#value");
const input = document.querySelector("#volume");
function updateValue() {
  const inputValue = input.value;
  if (inputValue == 1) {
    value.textContent = `${inputValue} Parcela`;
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
  const inputValue_entrada = input_entrada.value;
  if (inputValue_entrada == 0) {
    value_entrada.textContent = 'Sem entrada';
  } else if (inputValue_entrada > 1) {
    value_entrada.textContent = `R$ ${inputValue_entrada} de entrada`;
  } else {
    value_entrada.textContent = inputValue_entrada;
  }
}

function getValorentrada() {
  const inputValue_entrada = input_entrada.value;
  if (inputValue_entrada == 0) {
    return 0;
  } else if (inputValue_entrada > 1) {
    return inputValue_entrada;
  }
}

input.addEventListener("input", (event) => {
  updateValue();
  getValordiv();
});

input_entrada.addEventListener("input", (event) => {
  updateValue_entrada();
  updateValue();
  getValordiv();
  atuaValordiv();
});

document.getElementById("result").textContent = `R$ 0`;
document.getElementById("result_2").textContent = `Saldo devedor: R$ 0`;

function countChecked() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  const checkedCount = checkboxes.length;
  const result_saldo = checkedCount * 7200;
  document.getElementById('result_saldo').textContent = ` R$ ${result_saldo}`;
}

document.addEventListener('DOMContentLoaded', () => {
  getValorParcelas();
  updateValue();
  getValordiv();
  atuaValordiv();
  updateValue_entrada();
});


const radioContainer = document.querySelector('.input__check');
radioContainer.addEventListener('change', () => {
    getValorParcelas();
    updateValue();
    getValordiv();
    atuaValordiv();
    updateValue_entrada();
});

function getValorParcelas() {
  const radios = document.getElementsByName('radio__parcelas');
  const entrada = getValorentrada();

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      if (radios[i].value === 'Vencidas') {
        value_par= 3000 - entrada;
        return value_par;
      } else {
        value_par= 7200 - entrada;
        return value_par;
      }
    }
  }
}

function getValorTotal() {
  const radios = document.getElementsByName('radio__parcelas');
  const entrada = getValorentrada();

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      if (radios[i].value === 'Vencidas') {
        value_par= 3000;
        return value_par;
      } else {
        value_par= 7200;
        return value_par;
      }
    }
  }
}

function getValordiv() {
  const result = getValorParcelas();
  const input = document.querySelector("#volume");
  const inputValue = input.value;
  const result_div = result / inputValue;  
  const formattedValue = result_div.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  value_div.textContent = `Valor da parcela: R$ ${formattedValue}`;
}

function atuaValordiv() {
  const total = getValorTotal();
  const result = getValorParcelas();
  const result_format = result.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const result_div = getValordiv();
  document.getElementById('result').textContent = `R$ ${total}`;
  document.getElementById('result_2').textContent = `Saldo devedor: R$ ${result_format}`;
}

function atuaValor() {
  const result = getValorParcelas();
  const result_format = result.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  document.getElementById('result').textContent = `R$ ${result_format}`;
}


function criarPopup(){
  alert("Documento enviado por e-mail!");
}
