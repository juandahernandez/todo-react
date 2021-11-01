import React from 'react'

//styles



const TodoCard = ({todo, cambiarTodo}) => {
    return (
        <div className="todo-card">
            <div>
                <h4>{todo.title}</h4>
            </div>
            <div className="todo-tarea">
                <button className={todo.completed ? "completar" : "completada"} onClick={() =>cambiarTodo(todo.id)}>
                    {todo.completed ? "complete" : "incomplete"}
                </button>
            </div>
        </div>
    )
}

export default TodoCard
