import { todoList } from "..";
import { Todo } from "../classes";

const divTodoList = document.querySelector('.todo-list');
const inputText = document.querySelector('.new-todo');
const btnBorrarCompletados = document.querySelector('.clear-completed')
const btnFilters = document.querySelector('.filters');
const contadorPendientes = document.querySelector('.todo-count')

export const crearTodoHtml = (todo) => {

    const htmlTodo =`
        <li class="${(todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
            <div class="view">
                <input class="toggle" type="checkbox" ${(todo.completado) ? 'checked': ''}>
                    <label>${todo.tarea}</label>
                    <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>`

        const div = document.createElement('div');
        div.innerHTML = htmlTodo;

        divTodoList.append(div.firstElementChild);

        return div.firstElementChild;

}

//Eventos

inputText.addEventListener('keyup',( event) =>{
    if(event.keyCode===13 && event.target.value.length>0){
        
        const nuevoTodo = new Todo(inputText.value);
        todoList.nuevoTodo(nuevoTodo);
        // console.log(nuevoTodo);
        
        crearTodoHtml(nuevoTodo);
        inputText.value= '';
        // console.log(todoList);

        
        
    }
    
});



divTodoList.addEventListener('click', (event)=>{
    const nombreElemento = event.target.localName;    
    const todoElemento   = event.target.parentElement.parentElement;
    const todoId         =todoElemento.getAttribute('data-id');
    // console.log(todoList);

    if (nombreElemento.includes('input')){
        // console.log('le dio click en el checkbox')
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
        actualizaContador();
    } else if(nombreElemento.includes('button')){
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento);
    }
    // console.log(nombreElemento);
    // console.log(todoElemento);
    // console.log(todoId);
    
    
});


btnBorrarCompletados.addEventListener('click', ()=>{
    // console.log('se hizo click enn el boton borrar completados');
    todoList.eliminarCompletados();
    for(let i=divTodoList.children.length -1;i>=0;i--){
        if(divTodoList.children[i].classList.contains('completed')){
            divTodoList.removeChild(divTodoList.children[i]);
        }
    }

});

btnFilters.addEventListener('click', (event)=>{
    // console.log(event.target.getAttribute('href'));
    const hrefButton= event.target.text;
    if(hrefButton=='Todos'){
        
        for(let i=divTodoList.children.length-1; i>=0;i--){
            divTodoList.children[i].classList.remove('hidden');
            // console.log('mostrando los div de nuevo');
            // if(divTodoList.children[i].classList.contains('hidden')){
                // console.log(divTodoList.children[i]);
            // }
        }


    }else if(hrefButton=='Pendientes'){
        for(let i=divTodoList.children.length -1;i>=0;i--){
            if(divTodoList.children[i].classList.contains('completed')){
                divTodoList.children[i].classList.add('hidden');
            }
        }
        console.log('Pendientes');
    }else if(hrefButton=='Completados'){
        for(let i=divTodoList.children.length -1;i>=0;i--){
            if(!divTodoList.children[i].classList.contains('completed')){
                divTodoList.children[i].classList.add('hidden');
            }
        }
        console.log('Completados');
    }
});


const actualizaContador = function (){
    let contador=0;

    for(const elemento of divTodoList.children){
        
       if(!elemento.classList.contains('completed')){
           contador++;
       }
    }
          
  contadorPendientes.innerHTML=`<strong>${contador}</strong> pendiente(s)` ;   


}
