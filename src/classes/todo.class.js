




export class Todo {

    static fromJson(obj) {
        const temTodo = new Todo(obj.tarea);
    }


    constructor(tarea) {

        this.tarea = tarea;
        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();

    }
}