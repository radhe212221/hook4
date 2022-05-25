import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';
export default function App() {
  const [a, seta] = useState([]);

  const load = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((d) => seta(d.data));
  };

  useEffect(load, []);
  return (
    <div>
      {a.map((x) => (
        <h5>{x.name}</h5>
      ))}
    </div>
  );
}
