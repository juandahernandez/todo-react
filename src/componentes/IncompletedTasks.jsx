import React from 'react'
import TodoCard from './TodoCard'

const IncompletedTasks = ({todos, cambiarTodo}) => {
    return (
        <div className="todo-container">
            {
                todos.map(todo => todo.completed !== true && (
                    <TodoCard todo={todo} cambiarTodo={cambiarTodo}/>
                ))
            }
        </div>
    )
}

export default IncompletedTasks
