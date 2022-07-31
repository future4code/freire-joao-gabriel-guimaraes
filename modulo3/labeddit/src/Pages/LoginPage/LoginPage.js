import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../Hooks/useform";
import { goToSignUpPage, goToFeedPage } from "../../Route/Coordinator";
import { BASE_URL } from "../../Constants/url";
import logo from "../../img/logo.png";
import {
  Img,
  Header,
  H2,
  P,
  Form,
  InputEmail,
  InputSenha,
  ButtonLogin,
  ButtonSignUp,
  Hr,
} from "./styled";

export const LoginPage = () => {
  const changePage = useNavigate();

  const { form, onChange, cleanFields } = useForm({ email: "", password: "" });

  const loginFunction = (event) => {
    event.preventDefault();
    axios
      .post(`${BASE_URL}/users/login`, form)
      .then((res) => {
        console.log(res.data);
        goToFeedPage(changePage);
        cleanFields();
        window.localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        alert('Usuário não encontrado! Crie uma conta nova')
      });
  };

  return (
    <div>
      <Header>
        <Img src={logo} alt="" />
        <H2>LabEddit</H2>
        <P>O projeto de rede Social da Labenu</P>
      </Header>

      <Form onSubmit={loginFunction}>
        <InputEmail
          type="email"
          name="email"
          onChange={onChange}
          placeholder="email"
          required
          value={form.email}
        />
        <InputSenha
          type="password"
          name="password"
          onChange={onChange}
          placeholder="senha"
          required
          value={form.password}
          pattern="^.{8,}$"
          title={"escreva no mínimo 8 caracteres"}
        />
        <ButtonLogin>Continuar</ButtonLogin>
        <Hr />
        <ButtonSignUp onClick={() => goToSignUpPage(changePage)}>
          Crie uma conta!
        </ButtonSignUp>
      </Form>
    </div>
  );
};
