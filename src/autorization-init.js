const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const loginBtn = document.querySelector('.login-button');
const logoutBtn = document.querySelector('.logout-button');
const input = document.getElementById('sign-up-login');
const password = document.getElementById('sign-up-password');
const autorizedUser = document.querySelector('.autorized-user');
const user = document.querySelector('.user');
const search = document.querySelector('.search_btn');

const state = {
  login: localStorage.getItem('login'),
  password: '',
};

const render = () => {
  if (state.login === null) {
    loginBtn.classList.add('active');
    user.innerHTML = '';
    user.value = '';
  } else {
    logoutBtn.classList.add('active');
    user.innerHTML = `${state.login}`;
  }
};

const openForm = () => {
  modal.classList.add('show');
  overlay.classList.add('show');
};

const closeForm = () => {
  modal.classList.remove('show');
  overlay.classList.remove('show');
  password.value = '';
};

const login = () => {
  loginBtn.classList.remove('active');
  autorizedUser.classList.add('active');
};

const logout = () => {
  loginBtn.classList.add('active');
  logoutBtn.classList.remove('active');
  autorizedUser.classList.remove('active');
  localStorage.removeItem('login');
  state.login = localStorage.getItem('login');
  input.value = '';
  password.value = '';
  render();
};

const changeUser = () => {
  openForm();
  user.value = state.login;
  password.value = '';
};

export default () => {
  render();

  // open form by button
  loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openForm();
  });

  // close form by click
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-dialog')) {
      closeForm();
    }
  });

  // log in
  input.addEventListener('input', (e) => {
    const formData = e.target.value;
    localStorage.setItem('login', formData);
    state.login = localStorage.getItem('login');
  });

  const submitButton = document.querySelector('.sign-up-btn');

  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    login();
    render(state.login);
    closeForm();
  });

  // log out
  logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    logout();
  });

  // change user
  user.addEventListener('click', (e) => {
    e.preventDefault();
    changeUser();
  });

  search.addEventListener('click', (e) => {
    e.preventDefault();
    render();
  });
};
