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

document.getElementById("value_entrada").textContent = `R$ 1500 de entrada`;
const value_entrada = document.getElementById("value_entrada");
const input_entrada = document.getElementById('entrada');
const numeroEntrada = document.getElementById('entrada_a');
const outputNumber = document.getElementById('value_entrada');
const outputRange = document.getElementById('value_entrada');

function updateValue_entrada() {

 // Função para sincronizar o número com o range
 numeroEntrada.addEventListener('input', () => {
  let value = parseFloat(numeroEntrada.value.replace(',', '.'));

  if (value < 1) value = 1; // Garante o mínimo de 1
  if (value > 3000) value = 3000; // Garante o máximo de 3000
  input_entrada.value = value; // Sincroniza o range
  outputNumber.textContent = `R$ ${value.toFixed(2).replace('.', ',')} de entrada`; // Atualiza o output do número
  outputRange.textContent = `R$ ${value.toFixed(2).replace('.', ',')} de entrada`; // Atualiza o output do range
});

// Função para sincronizar o range com o número
input_entrada.addEventListener('input', () => {
  let value = parseFloat(input_entrada.value.replace(',', '.')) || 0; 
  if (value < 1) value = 1; // Garante o mínimo de 1
  if (value > 3000) value = 3000; // Garante o máximo de 3000
  numeroEntrada.value = value; // Sincroniza o número
  outputNumber.textContent = `R$ ${value} de entrada`; // Atualiza o output do número
  outputRange.textContent = `R$ ${value} de entrada`; // Atualiza o output do range
});




// Seleção dos elementos

const numberInput = document.getElementById('volume_a'); // Campo number
const rangeInput = document.getElementById('volume');    // Campo range
const outputValue = document.getElementById('value');    // Output

// Sincronizar o campo number com o range
numberInput.addEventListener('input', () => {
    let value = numberInput.value || 1; // Converte para número ou usa 1 como padrão
    if (value < 1) value = 1; // Garante o mínimo de 1
    if (value > 36) value = 36; // Garante o máximo de 36
    rangeInput.value = value; // Atualiza o range
    const textoParcelas = value === 1 ? 'parcela' : 'parcelas';
    outputValue.textContent = `${value} ${textoParcelas}`; 
    getValordiv();

});

// Sincronizar o range com o campo number
rangeInput.addEventListener('input', () => {
    const value = rangeInput.value || 1; // Converte para número
    numberInput.value = value; // Atualiza o campo number
    const textoParcelas = value === 1 ? 'parcela' : 'parcelas';
    outputValue.textContent = `${value} ${textoParcelas}`; 
    getValordiv();

});

}

function getValorentrada() {
  const inputValue_entrada = parseFloat(input_entrada.value.replace(',', '.')) || 0;
  return inputValue_entrada >= 0 ? inputValue_entrada : 0; 
}

input.addEventListener("input", (event) => {
  updateValue();
  getValordiv();
  getValorParcelas();
});

input_entrada.addEventListener("input", (event) => {
  updateValue_entrada();
  updateValue();
  getValordiv();
  atuaValordiv();
});

numeroEntrada.addEventListener("input", (event) => {
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
  const entrada = parseFloat(getValorentrada()) || 0;

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      if (radios[i].value === 'Vencidas') {
        value_par= 3000.00 - entrada;
        return value_par;
      } else {
        value_par= 7200.00 - entrada;
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
        value_par= "3.000,00";
        return value_par;
      } else {
        value_par= "7.200,00";
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
