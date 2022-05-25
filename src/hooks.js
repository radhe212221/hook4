import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const useHttp = (url) => {
  const [isloading, setisloading] = useState(true);
  const [error, seterror] = useState(null);
  const [data, setdata] = useState(null);

  const boot = () => {
    axios
      .get(url)
      .then((d) => setdata(d.data))
      .then((d) => seterror(null))
      .then((d) => setisloading(false))
      .catch((err) => {
        seterror(err);
        setisloading(false);
      });
  };

  useEffect(boot, []);
  return {
    isloading,
    error,
    data,
  };
};
