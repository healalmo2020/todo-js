import './styles.css';

import { Todo, TodoList} from './classes/index.js';
import { crearTodoHtml } from './js/componentes';



export const todoList = new TodoList();


todoList.todos.forEach(todo =>crearTodoHtml(todo));


console.log('Todos', todoList);

// const tarea = new Todo('Aprender Javascript Moderno!!!');
// // const tarea2 = new Todo('Comprar un unicornio');

// todoList.nuevoTodo(tarea);
// // todoList.nuevoTodo(tarea2);

// crearTodoHtml(tarea);

// localStorage.setItem('mi-key','abcd');

// console.log(todoList);



