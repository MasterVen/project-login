import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

import UI from './config/ui.config';
import { validata } from './helpers/validate';
import { removeInputError, showInputError } from './views/form';
import { login } from './services/auth.service';
import { signIn } from './services/signIn';
import { notify } from './views/notification';

const { form, inputEmail, inputPassword, btn } = UI;
const inputs = [inputEmail, inputPassword];

// Events
form.addEventListener('submit', e => {
  e.preventDefault();
  onSubmit();
});
inputs.forEach(el => el.addEventListener('focus', () => removeInputError(el)));
btn.addEventListener('click', () => {
  onSignIn();
});

// Handlers
async function onSubmit() {
  const isValidForm = inputs.every(el => {
    const isValidInput = validata(el);
    if (!isValidInput) {
      showInputError(el);
    }
    return isValidInput;
  });

  if (!isValidForm) return;

  try {
    await login(inputEmail.value, inputPassword.value);
    form.reset();
    // show success notify
    notify({ msg: 'Login success', className: 'alert-success' });
  } catch (err) {
    // show error notify
    notify({ msg: 'Login fail', className: 'alert-danger' });
  }
}

async function onSignIn() {
  try {
    await signIn({
      email: 'soslukven1984@gmail.com',
      password: 'fasol1555',
      nickname: 'MasterVen',
      first_name: 'Vitalii',
      last_name: 'Sosluik',
      phone: '0985845562',
      gender_orientation: 'male', // or "female"
      city: 'Starokostantinov',
      country: 'Ukrane',
      date_of_birth_day: 2,
      date_of_birth_month: 4,
      date_of_birth_year: 1984,
    });
    form.reset();
    // show success notify
  } catch (err) {
    // show error notify
  }
}
