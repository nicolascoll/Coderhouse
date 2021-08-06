const arrayDeUsuarios = [];

let inputValues = {
  nombre: '',
  email: '',
  telefono: '',
  mensaje: '',
};

const handleForm = e => {
  e.preventDefault();
  if (
    inputValues.nombre.trim() === '' ||
    inputValues.email.trim() === '' ||
    inputValues.telefono.trim() === '' ||
    inputValues.mensaje.trim() === ''
  ) {
    document.querySelector('.warning').classList.remove('hidden');
    console.log('Todos los campos deben ser completados');
    return; 
  }
  document.querySelector('.warning').classList.add('hidden');
  arrayDeUsuarios.push(inputValues);
};

const handleInput = e => {
 
  inputValues = {
    ...inputValues, 
    [e.target.name]: e.target.value
  };

  console.log(inputValues);
};

const form = document.querySelector('.btn');

const inputs = document.querySelectorAll('.input');

form.addEventListener('click', handleForm);

inputs.forEach(input => input.addEventListener('input', handleInput));