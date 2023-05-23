const form = document.querySelector('.todo_high__form');
const input = document.querySelector('.todo_high__form_input');
const newForm = document.querySelector('.newForm');
const pls = document.querySelector('.input_pls');

function getText() {
    let text = input.value;

    if(!text == '') {
        setDiv(text);    
    }
    
    input.value = '';
}

function setDiv(text) {
    const divList = document.createElement('div');
    divList.setAttribute('class', 'divEl');
    divList.innerHTML = text;
   
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.addEventListener('click', event => {
        event.target.closest('div').style.backgroundColor = '#F4F4F4'
    });

    const img = document.createElement('img');
    img.setAttribute('class', 'imgClose');
    img.setAttribute('src', 'img/close.png');
    img.addEventListener('click', event => {
        event.target.closest('div').remove();
    });

    divList.insertAdjacentElement('afterbegin', radio);
    divList.appendChild(img);
    newForm.appendChild(divList);
}

pls.addEventListener('click', getText);