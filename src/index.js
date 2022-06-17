import './styles.css';
import { crearTodoHtml } from './js/componentes';
import { Todo, TodoList } from './classes';

export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);

console.log('todos', todoList.todos);