"use strict";

const openModal = () =>
  document.getElementById("modal").classList.add("active");

const closeModal = () =>
  document.getElementById("modal").classList.remove("active");

const tempClient = {
  nome: "Fernanda",
  email: "farnandarocha@gmail.com",
  celular: "11991992813",
  cidade: "Santos",
};

//--------------CRUD-------------------

//Create

const createClient = (client) => {
    const db_client = {}
    db_client.push (client)
  localStorage.setItem("db_client", JSON.stringify(db_client))
}

//Eventos
document
  .getElementById("cadastrarCliente")
  .addEventListener("click", openModal);

document.getElementById("modalClose").addEventListener("click", closeModal);
