function validar() {
  const email = document.getElementById('form.email');
  const senha = document.getElementById('form.senha');

  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
validar();
