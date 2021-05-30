import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ toToDos, setToDos }) => {
  return (
    <ul>
      {toToDos.map(todo => (
        <ToDo
          todo={todo}
          text={todo.inText}
          setToDos={setToDos}
          toToDos={toToDos}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
