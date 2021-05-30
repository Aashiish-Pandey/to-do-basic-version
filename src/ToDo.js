import React from 'react';

const ToDo = ({ toToDos, setToDos, todo, text }) => {
  const removeItem = () => {
    setToDos(toToDos.filter(item => item.id !== todo.id));
  };
  console.log(text);
  return (
    <div style={{ display: 'flex' }}>
      <li>{text}</li>
      <button onClick={removeItem}>delete</button>
    </div>
  );
};

export default ToDo;
