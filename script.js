const getBtnHeader = document.querySelector('#subimit-btn-header');

function validar() {
  const email = document.getElementById('form.email');
  const senha = document.getElementById('form.senha');

  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

getBtnHeader.addEventListener('click', validar);

const getBtnAgreement = document.querySelector('#agreement');
const getBtnSubmit = document.querySelector('#submit-btn');

const activeBtn = (event) => {
  const btnAgreement = event.target;
  if (btnAgreement.checked) {
    getBtnSubmit.disabled = false;
    getBtnSubmit.style.backgroundColor = 'rgb(78, 44, 131)';
    getBtnSubmit.style.color = 'white';
  } else {
    getBtnSubmit.disabled = true;
    getBtnSubmit.style.backgroundColor = 'rgb(179, 179, 179)';
    getBtnSubmit.style.color = 'gray';
  }
};
getBtnAgreement.addEventListener('click', activeBtn);

const myTextArea = document.getElementById('input-comment');
const remainingCharsText = document.getElementById('my-textarea-remaining-chars');
const MAX_CHARS = 500;

myTextArea.addEventListener('input', () => {
  const remaining = MAX_CHARS - myTextArea.value.length;
  remainingCharsText.textContent = `${remaining}`;
});
