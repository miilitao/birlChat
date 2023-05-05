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
  console.log(taxaBasal);
}

const resultadoTaxaBasal = [];

function calcularTaxa(idade, altura, peso){
  //Separar Array
  const idadeNovo = Number(idade.value);
  const alturaNovo = Number(altura.value);
  const pesoNovo = Number(peso.value);
  const resultTaxa = parseInt(65.5 + (pesoNovo * 14.5) + (alturaNovo * 5) - (idadeNovo * 6.5)) + ' calorias';
  resultadoTaxaBasal.push(resultTaxa);
}

//Inputs para guardar no banco de dados

const dieta = [];
const comida = [];
const treino = [];

function adicionaBancoDeDados(){
  const diet = inputDiet.value;
  dieta.push(diet);
  const food = inputFood.value;
  comida.push(food);
  const workout = inputWorkout.value;
  treino.push(workout);
}

const OPENAI_API_KEY = "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"
const inputDiet = document.getElementById('input-diet');
const inputFood = document.getElementById('input-food');
const inputWorkout = document.getElementById('input-workout');
const buttonInputs = document.getElementById('submit-gpt');
const answerChat = document.getElementById('answerChat');

buttonInputs.addEventListener('click', async() => {

  adicionaBancoDeDados();
  hideAll(formulario, taxaMetabolicaBasal, answerChat);
  await fetch("https://api.openai.com/v1/completions", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json", 
    Authorization: "Bearer " + OPENAI_API_KEY,
  },
  body: JSON.stringify({
    model: "text-davinci-003",
    prompt: `Monte para mim uma planilha de 1 semana de duração no formato de lista texto corrido, 
    ${dieta}, além disso, conside que minha taxa mentabolica basal é ${resultadoTaxaBasal}, e adeque a dieta a essas calorias. 
    e que ${comida} e gostaria de incluí-los em alguns dias da semana, conside também que ${treino}.
    Escreva dentro do header desta planilha que ${dieta} e que a quantidade de calorias que eu gasto por dia é ${resultadoTaxaBasal}`,
    max_tokens: 500,
    temperature: 0
  })
 });

});

function hideAll (formulario, taxa, answer){
  if(formulario.style.display === 'block'){
    formulario.style.display = 'none';
  } else {
    formulario.style.display = 'block'
  } 
  if(taxa.style.display === 'block'){
    taxa.style.display = 'none';
  } else {
    taxa.style.display = 'block'
  } 
  if(answer.style.display === 'none'){
    answer.style.display = 'block';
  } else {
    answer.style.display = 'block'
  }
  
}