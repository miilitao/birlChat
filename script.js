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
