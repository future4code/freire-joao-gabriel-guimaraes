import React from "react";
import { useNavigate } from "react-router-dom";
import { goToFeedPage, goToLoginPage } from "../../Route/Coordinator";
import useForm from "../../Hooks/useform";
import axios from "axios";
import { BASE_URL } from "../../Constants/url";
import logo from "../../img/logo.png";
import {
  Container,
  Header,
  Img,
  ButtonLogin,
  P,
  Form,
  InputNome,
  InputEmail,
  InputSenha,
  ButtonSignUp,
  Text,
  Div,
} from "./styled";
export const SignUpPage = () => {
  const changePage = useNavigate();
  const { form, onChange, cleanFields } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const signUp = (event) => {
    event.preventDefault();
    axios
      .post(`${BASE_URL}/users/signup`, form)
      .then((res) => {
        console.log(res.data);
        goToFeedPage(changePage);
        window.localStorage.setItem("token", res.data.token);
        cleanFields();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <Container>
      <Header>
        <Img src={logo} alt="" />
        <ButtonLogin onClick={() => goToLoginPage(changePage)}>
          Entrar
        </ButtonLogin>
      </Header>
      <div>
        <P>Para começar, crie uma conta!</P>
        <Form onSubmit={signUp}>
          <InputNome
            type="text"
            onChange={onChange}
            placeholder="Nome de usuário"
            value={form.username}
            required
            name="username"
          />
          <InputEmail
            type="email"
            onChange={onChange}
            placeholder="E-mail"
            value={form.email}
            required
            name="email"
          />
          <InputSenha
            type="password"
            onChange={onChange}
            placeholder="Senha"
            value={form.password}
            required
            name="password"
            pattern="^.{8,}$"
            title={"escreva no mínimo 8 caracteres"}
          />
          <Text>
            Ao continuar, você concorda com o nosso{" "}
            <span>Contrato de usuário</span> e nossa{" "}
            <span>Política de Privacidade</span>
          </Text>
          <Div>
            <input type="checkbox" required /> Eu concordo em receber emails
            sobre coisas legais no Labeddit
          </Div>
          <ButtonSignUp>Cadastrar</ButtonSignUp>
        </Form>
      </div>
    </Container>
  );
};
