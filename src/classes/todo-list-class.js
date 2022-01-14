import { crearTodoHtml } from "../js/componentes";



export class TodoList{


    constructor (){

        this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id){
       this.todos= this.todos.filter(todo => todo.id !=id)
       this.guardarLocalStorage();
    }

    marcarCompletado(id){
      for (const todo of this.todos){
        if (todo.id==id){
            todo.completado= !todo.completado;
            break;
        }
      }
    }

    eliminarCompletados(){
        this.todos= this.todos.filter(todo => !todo.completado)
    }

    guardarLocalStorage(){
        // console.log(this.todos);
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStorage(){
        // if(localStorage.getItem('todo')){
        //     this.todos = JSON.parse( localStorage.getItem('todo'));
        //     // for (const todo of this.todos) {
        //     //     crearTodoHtml(todo);
        //     // }
            
        // }else{
        //     this.todos = [];
        // }

        this.todos = (localStorage.getItem('todo')) 
                    ? JSON.parse(localStorage.getItem('todo'))
                    :  this.todos = [];
    }



}