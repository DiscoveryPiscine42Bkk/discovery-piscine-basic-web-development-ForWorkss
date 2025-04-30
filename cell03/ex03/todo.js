document.addEventListener('DOMContentLoaded', () => {
    const todoList = document.getElementById('ft_list');
    const newTodoBtn = document.getElementById('newTodoBtn');

    loadTodos();

    newTodoBtn.addEventListener('click', () => {
        const todoText = prompt("Enter a new TO DO:");
        if (todoText && todoText.trim() !== "") {
            addTodo(todoText);
        }
    });

    // Function to add a new TO DO
    function addTodo(text) {
        const todoItem = document.createElement('div');
        todoItem.className = 'todo-item';
        todoItem.textContent = text;

        todoItem.addEventListener('click', () => {
            if (confirm("Do you want to remove this TO DO?")) {
                todoList.removeChild(todoItem);
                saveTodos();
            }
        });

        todoList.prepend(todoItem);
        saveTodos();
    }

    function saveTodos() {
        const todos = Array.from(todoList.children).map(item => item.textContent);
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