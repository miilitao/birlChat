//Botão esconde texto e mostra caixa de inputs

const MainButton = document.getElementById('main-button');
const h1 = document.getElementById('main-text');
const subtext = document.getElementById('subtext');
const formulario = document.getElementById('formulario');

function hideElement(){
  if(h1.style.display === 'block'){
    h1.style.display = 'none';
  } else {
    h1.style.display = 'block'
  } 
  if(subtext.style.display === 'block'){
    subtext.style.display = 'none'
  } else {
    subtext.style.display = 'block'
  }
  if(MainButton.style.display === 'block'){
    MainButton.style.display = 'none'
  } else {
    MainButton.style.display = 'none';
  }

  mostrarInput();
}

function mostrarInput(){
  if(formulario.style.display === 'none'){
    formulario.style.display = 'block'
  } else {
    formulario.style.display = 'none'
  }
}

//Inputs para guardar no banco de dados

const input1 = [];
const input2 = [];
const input3 = [];

const inputDiet = document.getElementById('input-diet');
const inputFood = document.getElementById('input-food');
const inputWorkout = document.getElementById('input-workout');
const buttonInputs = document.getElementById('submit-gpt');

buttonInputs.addEventListener('click', (event) => {
  const diet = inputDiet.value;
  const food = inputFood.value;
  const workout = inputWorkout.value;

  input1.push(diet);
  input2.push(food);
  input3.push(workout);

  console.log(input1);
  console.log(input2);
})