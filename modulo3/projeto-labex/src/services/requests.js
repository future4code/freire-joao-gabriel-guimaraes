import { useState, useEffect } from "react";
import axios from "axios";

export function useRequestData(url) {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const getData = () => {
    setIsLoading(true);
    axios
      .get(url, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, [url]);
  return [data, isLoading, error, getData];
}

export function deleteData(url, getData) {
  axios
    .delete(url, {
      headers: {
        auth: localStorage.getItem("token"),
      },
    })
    .then((response) => {
      console.log(response.data);
      alert("Viagem deletada com sucesso!");
      getData();
    })
    .catch((err) => {});
}
export function decideData(url, decision, getData) {
  const body = {
    approve: decision,
  };
  axios
    .put(url, body, {
      headers: {
        auth: localStorage.getItem("token"),
      },
    })
    .then((response) => {
      console.log(response.data);
      alert("decisão registrada!");
      getData();
    })
    .catch((err) => {
      alert(err.message);
    });
}

export function createTrip(url, form, cleanFields) {
  axios
    .post(url, form, {
      headers: {
        auth: localStorage.getItem("token"),
      },
    })
    .then((response) => {
      console.log(response.data);
      alert("Viagem criada com sucesso!");
      cleanFields();
    })
    .catch((err) => {
      console.log(err.response);
    });
}

export function applicationTrip(url, form, cleanFields) {
  axios
    .post(url, form, {
      headers: {
        auth: localStorage.getItem("token"),
      },
    })
    .then((response) => {
      console.log(response.data);
      alert("cadastro realizado!");
      cleanFields();
    })
    .catch((err) => {
      console.log(err.response);
    });
}
