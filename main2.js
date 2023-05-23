const imgButton = document.querySelector('.div_img');
const formHigh = document.querySelector('.todo_high__form'); 
const inputHigh = document.querySelector('.todo_high__form_input');



function getDiv() {
    const formHighGlobal = document.querySelector('.todo_high'); 
    const divEl = document.createElement('div');
    const inputRadio = document.createElement('div');
    const divBox = document.createElement('div');
    
    inputRadio.type = "radio";
    inputRadio.innerHTML = `<input type="radio">`;
    divEl.innerHTML = inputHigh.value;
    divEl.classList.add('lol');
    divBox.classList.add('divEl');
    inputRadio.classList.add('da');
    divBox.insertAdjacentElement('afterbegin', inputRadio);
    formHighGlobal.appendChild(divBox);
    divBox.appendChild(divEl)

    inputHigh.value = '';

}

const radios = document.querySelectorAll('input[type="radio"]');

radios.forEach(radio => {
  radio.addEventListener('click', () => {
    const parentDiv = radio.closest('.divBox');
    parentDiv.style.backgroundColor = '#F4F4F4';
  });
});



