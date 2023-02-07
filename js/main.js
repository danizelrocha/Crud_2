'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
    nome: "Fernanda",
    email: "farnandarocha@gmail.com",
    celular: "11991992813"
}



//--------------CRUD-------------------

//Create

const createClient = (client) => {
    
}

//Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)