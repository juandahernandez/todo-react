import React, { useState, useEffect } from "react";
import CompletedTasks from "./componentes/CompletedTasks";
import GetAllTasks from "./componentes/GetAllTasks";
import IncompletedTasks from "./componentes/IncompletedTasks";
import Header from "./componentes/Header";
import getTasks from "./helpers/fetchTask";

//importacion de estilos
import "./styles/App.css";
import "./styles/TodoCard.css";
import "./styles/Header.css";

const App = () => {
  const [todos, setTodos] = useState();
  const [isSelectedAll, setIsSelectedAll] = useState(false);
  const [isCompletTask, setIsCompletTask] = useState(false);
  const [isIncompletTask, setIsIncompletTask] = useState(false);

  useEffect(() => {
    getTasks().then(setTodos);
  }, []);

  const cambiarTodo = (id) => {
    setTodos(
      todos.map((tod) =>
        tod.id === id ? { ...tod, completed: !tod.completed } : tod
      )
    );
  };

  return (
    <div className="App">
      <Header
        setIsSelectedAll={setIsSelectedAll}
        setIsCompletTask={setIsCompletTask}
        setIsIncompletTask={setIsIncompletTask}
      />

      {isSelectedAll ? (
        <GetAllTasks
          todo={todos}
          setTodo={setTodos}
          cambiarTodo={cambiarTodo}
        />
      ) : (
        <h3>view tasks</h3>
      )}
      {isCompletTask && (
        <CompletedTasks todos={todos} cambiarTodo={cambiarTodo} />
      )}
      {isIncompletTask && (
        <IncompletedTasks todos={todos} cambiarTodo={cambiarTodo} />
      )}
    </div>
  );
};

export default App;
