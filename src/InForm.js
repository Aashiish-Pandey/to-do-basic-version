import React from 'react';

const InForm = ({ inText, setInText, toToDos, setToDos }) => {
  const addToDos = e => {
    e.preventDefault();

    setToDos([...toToDos, { id: Math.random() * 1000, inText: inText }]);
    setInText('');
  };
  return (
    <form onSubmit={addToDos}>
      <input
        type="text"
        value={inText}
        name="text"
        placeholder="enter your todo"
        onChange={e => setInText(e.target.value)}
      />

      <button type="submit" value="add">
        {' '}
        add to do
      </button>
    </form>
  );
};

export default InForm;
