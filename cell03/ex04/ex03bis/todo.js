$(document).ready(function() {
    const $todoList = $('#ft_list');
    const $newTodoBtn = $('#newTodoBtn');

    loadTodos();

    $newTodoBtn.on('click', function() {
        const todoText = prompt("Enter a new TO DO:");
        if (todoText && todoText.trim() !== "") {
            addTodo(todoText);
        }
    });

    function addTodo(text) {
        const $todoItem = $('<div></div>')
            .addClass('todo-item')
            .text(text)
            .on('click', function() {
                if (confirm("Do you want to remove this TO DO?")) {
                    $(this).remove();
                    saveTodos();
                }
            });

        $todoList.prepend($todoItem);
        saveTodos();
    }

    function saveTodos() {
        const todos = $todoList.children().map(function() {
            return $(this).text();
        }).get();
        document.cookie = "todos=" + JSON.stringify(todos) + "; path=/";
    }

    function loadTodos() {
        const cookies = document.cookie.split('; ');
        const todosCookie = cookies.find(row => row.startsWith('todos='));
        if (todosCookie) {
            const todos = JSON.parse(todosCookie.split('=')[1]);
            todos.forEach(todo => addTodo(todo));
        }
    }
});