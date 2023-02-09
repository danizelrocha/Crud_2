"use strict";

const openModal = () =>
  document.getElementById("modal").classList.add("active");

const closeModal = () =>
  document.getElementById("modal").classList.remove("active");

const tempClient = {
  nome: "Laura",
  email: "farnandarocha@gmail.com",
  celular: "11991992813",
  cidade: "Santos",
};

const getLocalStorage = () => JSON.parse (localStorage.getItem('db_client')) ?? []
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient))

//--------------CRUD-------------------
//Crud - CREATE
const createClient = (client) => {
  const dbClient = getLocalStorage()
  dbClient.push (client)
  setLocalStorage(dbClient)
}

//cRud - READ
const readClient = () => getLocalStorage()

//crUd - UPDATE
const updateClient = (index, client) => {
  const dbClient = readClient()
  dbClient[index] = client
  setLocalStorage(dbClient)
}

//cruD - DELETE
const deleteClient = (index) => {
  const dbClient = readClient()
  dbClient.splice(index, 1)
  setLocalStorage(dbClient)
}

//Eventos
document
  .getElementById("cadastrarCliente")
  .addEventListener("click", openModal);

document
  .getElementById("modalClose")
  .addEventListener("click", closeModal);
