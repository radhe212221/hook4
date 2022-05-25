import React from 'react';
import './style.css';
import { useHttp } from './hooks';
export default function App() {
  const { data, isloading, error } = useHttp(
    'https://jsonplaceholder.typicode.com/photos'
  );

  if (isloading) return <h1>loading...</h1>;
  if (error) return <mark>{JSON.stringify(error)}</mark>;
  return (
    <div>
      {data?.map((x) => (
        <h5>{x.id}</h5>
      ))}
    </div>
  );
}
