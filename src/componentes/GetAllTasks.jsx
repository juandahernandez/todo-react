import React from 'react'
import TodoCard from './TodoCard';




const GetAllTasks = ({todo, cambiarTodo}) => {
    
    return (
        <div>
            <div className="todo-container">
        {todo && todo.length > 0 ? (
          todo.map((cadaTodo) => (
            <TodoCard 
            todo = {cadaTodo}
            key={cadaTodo.id}
              // title={cadaTodo.title}
              // status={cadaTodo.completed}
            cambiarTodo={cambiarTodo}
              // id={cadaTodo.id}
            />
          ))
        ) : (
        //   <Loader /> 
        null
        )}
      </div>
        </div>
    )
}

export default GetAllTasks
