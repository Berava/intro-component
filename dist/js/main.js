const form = document.getElementsByClassName('form');
const inputs = document.querySelectorAll('input');

form[0].addEventListener('input', function(e) {
  if (e.target.id !== 'email') {
    if (e.target.validity.valid) {
      e.target.nextElementSibling.textContent = '';
      e.target.classList.remove('invalid');
    }
  } else {
    if (!e.target.validity.valid) {
      e.target.classList.add('invalid');
      e.target.nextElementSibling.textContent =
        e.target.nextElementSibling.dataset.msg;
    } else {
      e.target.classList.remove('invalid');
      e.target.nextElementSibling.textContent = '';
    }
  }
});

form[0].addEventListener('submit', function(e) {
  e.preventDefault();
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === '') {
      if (inputs[i].id !== 'email') {
        inputs[i].nextElementSibling.textContent =
          inputs[i].nextElementSibling.dataset.msg;
        inputs[i].className = 'invalid form-text';
      }
    }
  }
});
