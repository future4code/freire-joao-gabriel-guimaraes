import axios from "axios";
import { useEffect, useState } from "react";

export const useRequestData = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const getData = () => {
    setIsLoading(true);
    axios
      .get(url, { headers: { authorization: localStorage.getItem("token") } })
      .then((res) => {
        setIsLoading(false);
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  };
  useEffect(() => {
    getData();
  }, [url]);

  return [data, isLoading, error, getData];
};

export const createPost = (url, form, getData, cleanFields) => {
  axios
    .post(url, form, {
      headers: { authorization: localStorage.getItem("token") },
    })
    .then(() => {
      alert("post Criado com sucesso!");
      getData();
      cleanFields();
    })
    .catch((err) => {
      console.log(err.message);
    });
};
export const createComment = (url, form, getData, cleanFields) => {
  axios
    .post(url, form, {
      headers: { authorization: localStorage.getItem("token") },
    })
    .then(() => {
      alert("comentário postado com sucesso!");
      getData();
      cleanFields();
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const createVote = (
  url,
  curtida,
  getData
) => {
  const body = { direction: curtida };
  axios
    .post(url, body, {
      headers: { authorization: localStorage.getItem("token") },
    })
    .then((res) => {
      getData();
    })
    .catch((err) => {
      console.log(err.message);
    });
};
export const changeVote = (url, curtida, getData) => {
  const body = { direction: curtida };
  axios
    .put(url, body, {
      headers: { authorization: localStorage.getItem("token") },
    })
    .then((res) => {
      getData();
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const deleteVote = (url, getData) => {
  axios
    .delete(url, { headers: { authorization: localStorage.getItem("token") } })
    .then(() => {
      getData();
    })
    .catch((err) => {
      console.log(err.message);
    });
};
