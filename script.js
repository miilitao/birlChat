//Botão esconde texto e mostra caixa de inputs

const MainButton = document.getElementById('main-button');
const h1 = document.getElementById('main-text');
const subtext = document.getElementById('subtext');
const formulario = document.getElementById('formulario');
const taxaMetabolicaBasal = document.getElementById('taxaMetabolicaBasal');

MainButton.addEventListener('click', () => {
  hideElement(h1, subtext, MainButton);
  mostrarInput(taxaMetabolicaBasal);
})

function hideElement(text, subtext, button){
  if(text.style.display === 'block'){
    text.style.display = 'none';
  } else {
    text.style.display = 'block'
  } 
  if(subtext.style.display === 'block'){
    subtext.style.display = 'none'
  } else {
    subtext.style.display = 'block'
  }
  if(button.style.display === 'block'){
    button.style.display = 'none'
  } else {
    button.style.display = 'none';
  }
}

function mostrarInput(formulario){
  if(formulario.style.display === 'none'){
    formulario.style.display = 'block'
  } else {
    formulario.style.display = 'none'
  }
}

const taxaBasal = [];

const inputIdade = document.getElementById('input-idade');
const inputAltura = document.getElementById('input-altura');
const inputPeso = document.getElementById('input-peso');
const buttonTaxaBasal = document.getElementById('buttonTaxaBasal');

buttonTaxaBasal.addEventListener('click', () => {
  adicionaBancoDeDadosTaxaBasal();
  calcularTaxa(inputIdade, inputAltura, inputPeso);
  mostrarInput(formulario);

})

function adicionaBancoDeDadosTaxaBasal(){
  const idade = inputIdade.value; 
  const altura = inputAltura.value;
  const peso = inputPeso.value;
  taxaBasal.push(idade, altura, peso);
}

function calcularTaxa(idade, altura, peso){
  //Separar Array
  const idadeNovo = Number(idade.value);
  const alturaNovo = Number(altura.value);
  const pesoNovo = Number(peso.value);
  
  const resultado = parseInt(65.5 + (pesoNovo * 14.5) + (alturaNovo * 5) - (idadeNovo * 6.5));
}


//Inputs para guardar no banco de dados

const input13 = [];
const input23 = [];
const input33 = [];

const inputDiet = document.getElementById('input-diet');
const inputFood = document.getElementById('input-food');
const inputWorkout = document.getElementById('input-workout');
const buttonInputs = document.getElementById('submit-gpt');

buttonInputs.addEventListener('click', (event) => {
  const diet = inputDiet.value;
  const food = inputFood.value;
  const workout = inputWorkout.value;

})