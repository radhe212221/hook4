import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';
export default function App() {
  const [a, seta] = useState([]);

  const load = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then((d) => seta(d.data));
  };

  useEffect(load, []);
  return (
    <div>
      {a.map((x) => (
        <h5>{x.id}</h5>
      ))}
    </div>
  );
}
