import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function TestComponent() {
  const [names, setNames] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    (async () => {
      const res = await axios.get('/api/allNames');
      setNames(res.data);
    })();
  }, []);

  const handleClick = async () => {
    await axios.post('/api/addName', {
      name: inputValue,
    });
    const res = await axios.get('/api/allNames');
    setNames(res.data);
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') handleClick();
  };

  return (
    <div>
      <p>Names</p>
      <input
        type='text'
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button type='button' onClick={handleClick}>
        Add name
      </button>
      <ul>
        {names.map(name => {
          return <li key={name._id}>{name.name}</li>;
        })}
      </ul>
    </div>
  );
}
