const $ = document.querySelector.bind(document)

// seleciona os elementos -----------------------------------------------
var list = $('#app ul'),
    input = $('#app input'),
    button = $('#app #addTodo')

var todos = JSON.parse(localStorage.getItem('list_todos')) || [] // Pega o item do localStorage ou retorna um array vazio

// Funções --------------------------------------------------------------
/* Renderiza a lista */
function renderTodos() {
    list.innerHTML = ''

    for (i = 0; i < todos.length; i++) {
        var todoItem = document.createElement('li')
        var todoText = document.createTextNode(todos[i])
        todoItem.classList = 'mt-l'

        var link = document.createElement('a')
        link.setAttribute('href', '#')
        link.classList = 'button is-danger is-small ml-m'

        var pos = todos.indexOf(todos[i])
        link.setAttribute('onclick', 'deleteTodo('+ pos +')')

        var linkText = document.createTextNode('Excluir')

        link.appendChild(linkText)

        todoItem.appendChild(todoText)
        todoItem.appendChild(link)
        list.appendChild(todoItem)
    }
}

renderTodos()

/* Adiciona um novo item */
function addTodo() {
    var todoText = input.value;

    todos.push(todoText)
    input.value = ''
    renderTodos()
    saveToStorage()
}

button.addEventListener('click', addTodo)

/* Deleta o item selecionado */
function deleteTodo(pos) {
    todos.splice(pos, 1)
    renderTodos()
    saveToStorage()
}

/* Salva no localStorage */
function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos))
}