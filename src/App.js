import React, { useState } from 'react';
import './style.css';
import InForm from './InForm';
import ToDoList from './ToDoList';

export default function App() {
  const [inText, setInText] = useState('');
  const [toToDos, setToDos] = useState([]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1> My to do</h1>
      <h1>{inText}</h1>

      <InForm
        toToDos={toToDos}
        setToDos={setToDos}
        inText={inText}
        setInText={setInText}
      />
      <ToDoList toToDos={toToDos} setToDos={setToDos} />
    </div>
  );
}
