/* let desplegLogin = document.querySelector('#desplegLogin');
let login = document.querySelector('#login');

desplegLogin.addEventListener('click', (e) => {
    e.preventDefault();
    login.classList.add('login_action');
});

let cerrarLogin = document.querySelector('#cerrarLogin');

cerrarLogin.addEventListener('click', (e) => {
    e.preventDefault();
    login.classList.remove('login_action');
}); */



fetch("https://dragon-ball-super-api.herokuapp.com/api/characters")
.then(response => response.json())
.then(data => data.forEach(el => {

    let columnasCartas = document.querySelector(`#columnasCartas`);

    let cartas = document.createElement(`div`);

    cartas.classList.add("col-12", "col-md-4", "d-flex", "justify-content-center", "mb-5");

    cartas.innerHTML = `

                    <div class=" bg-transparent img-fluid" style="width: 18rem;">
                        <img src=${el.imageUrl} class="card-img-top my-3" alt="..." height="300px">
                        <div class="bg__card p-3 rounded-bottom">
                          <h1 class="card-title text-center mb-3">${el.name}</h1>
                          <h4 class="card-text d-flex justify-content-center"><u>Planeta</u>: ${el.originplanet}</h4>
                          <h4 class="card-text d-flex justify-content-center"><u>Rol</u>: ${el.role}</h4>
                          <h4 class="card-text d-flex justify-content-center"><u>Especie</u>: ${el.specie}</h4>
                          <h4 class="card-text d-flex justify-content-center"><u>Vivo/Muerto</u>: ${el.status}</h4>
                        </div>
                      </div>
`;

columnasCartas.appendChild(cartas);
})
);

