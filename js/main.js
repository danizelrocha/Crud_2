"use strict";

const openModal = () =>
  document.getElementById("modal").classList.add("active");

const closeModal = () => {
  clearFields()
  document.getElementById("modal").classList.remove("active");
}

const getLocalStorage = () => JSON.parse (localStorage.getItem("db_client")) ?? []
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

//--------Validação da inscrição---------
const isValidFields = () => {
  return document.getElementById("form").reportValidity()
}

//--------Interação com o layout---------
const saveClient = () => {
  if (isValidFields()){
    const client = {
      nome: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      celular: document.getElementById("celular").value,
      cidade: document.getElementById("cidade").value
    }
    createClient(client)
    closeModal()
  }
}

//----------Limpar formulario------------
const clearFields = () => {
  const fields = document.querySelectorAll('.modal-field')
  fields.forEach(field => field.value = "")
}
//-------Criando a Tabela----------------

const createRow = (client, index) => {
  const newRow = document.createElement('tr')
  newRow.innerHTML = `
      <td>${client.nome}</td>
      <td>${client.email}</td>
      <td>${client.celular}</td>
      <td>${client.cidade}</td>
      <td>
          <button type="button" class="button green" id="edit-${index}">Editar</button>
          <button type="button" class="button red" id="delete-${index}" >Excluir</button>
      </td>
  `
  document.querySelector('#tableClient>tbody').appendChild(newRow)
}

//---------Atualiza a Tabela-------------
const updateTable = () => {
  const dbClient = readClient()
  dbClient.forEach(createRow)
}

updateTable()


//-------------Eventos-------------------
document
  .getElementById("cadastrarCliente")
  .addEventListener("click", openModal);

document
  .getElementById("modalClose")
  .addEventListener("click", closeModal);

document
  .getElementById("salvar")  
  .addEventListener("click", saveClient)