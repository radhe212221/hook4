import React from 'react';
import './style.css';
import { useHttp } from './hooks';
export default function Demo() {
  const { data, isloading, error } = useHttp(
    'https://jsonplaceholder.typicode.com/photos'
  );

  if (isloading) return <h1>loading...</h1>;
  if (error) return <mark>{JSON.stringify(error)}</mark>;
  return (
    <div>
      {data?.map((x) => (
        <img src={x.thumbnailUrl}/>
      ))}
    </div>
  );
}
