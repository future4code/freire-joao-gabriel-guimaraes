import React from "react";
import { BASE_URL } from "../../constants/urls";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import axios from "axios";
import useForm from "../../hooks/useForm";

function LoginPage() {
  useUnprotectedPage();

  const {form, onChange, cleanFields} = useForm({email: "", password: ""})

  const navigate = useNavigate();

  const goToAdminPage = (event) => {
    event.preventDefault();
    axios
      .post(`${BASE_URL}/login`, form)
      .then((response) => {
        window.localStorage.setItem("token", response.data.token);
        navigate("/admin/trips/list");
        cleanFields()
      })
      .catch((err) => {
        console.log(err.response);
        alert("usuário não encontrado!");
      });
  };
  const goBack = () => {
    navigate("/");
  };

  return (
    <div className="App">
      pagina de login
      <form onSubmit={goToAdminPage}>
        <input
          type="email"
          placeholder="email"
          required
          name="email"
          onChange={onChange}
          value={form.email}
        />
        <input
          type="password"
          placeholder="senha"
          required
          name="password"
          onChange={onChange}
          value={form.password}
        />
        <button type="submit">entrar</button>
      </form>
      <button onClick={goBack}>voltar</button>
    </div>
  );
}

export default LoginPage;
