let desplegLogin = document.querySelector('#desplegLogin');
let login = document.querySelector('#login');

desplegLogin.addEventListener('click', (e) =>{
    e.preventDefault();
    login.classList.add('login_action');
})

let cerrarLogin = document.querySelector('#cerrarLogin');

cerrarLogin.addEventListener('click', (e) =>{
    e.preventDefault();
    login.classList.remove('login_action');
})