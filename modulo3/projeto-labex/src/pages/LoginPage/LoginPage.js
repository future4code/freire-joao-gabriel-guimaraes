import React from "react";
import { BASE_URL } from "../../constants/urls";
import { useNavigate } from "react-router-dom";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import axios from "axios";
import useForm from "../../hooks/useForm";
import Button from "@mui/material/Button";
import { Container, Div, Header, Form, Input, ButtonContainer } from "./styled";

function LoginPage() {
  useUnprotectedPage();

  const { form, onChange, cleanFields } = useForm({ email: "", password: "" });

  const navigate = useNavigate();

  const goToAdminPage = (event) => {
    event.preventDefault();
    axios
      .post(`${BASE_URL}/login`, form)
      .then((response) => {
        window.localStorage.setItem("token", response.data.token);
        navigate("/admin/trips/list");
        cleanFields();
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
    <Container>
      <Header>
        <h1>labeX</h1>{" "}
        <Button
          variant="contained"
          size="small"
          margin="normal"
          color="secondary"
          onClick={goBack}
        >
          voltar
        </Button>
      </Header>
      <Div>
        <Form onSubmit={goToAdminPage}>
          <h1>pagina de login</h1>
          <Input
            InputLabelProps={{
              style: { color: "purple" },
            }}
            sx={{ input: { color: "purple" } }}
            color="secondary"
            margin="normal"
            id="outlined-basic"
            variant="outlined"
            type="email"
            label="email"
            required
            name="email"
            onChange={onChange}
            value={form.email}
          />
          <Input
            InputLabelProps={{
              style: { color: "purple" },
            }}
            sx={{ input: { color: "purple" } }}
            color="secondary"
            margin="normal"
            id="outlined-basic"
            variant="outlined"
            type="password"
            label="senha"
            required
            name="password"
            onChange={onChange}
            value={form.password}
          />
          <ButtonContainer>
            <Button
              variant="contained"
              size="small"
              margin="normal"
              color="secondary"
              type="submit"
            >
              entrar
            </Button>
          </ButtonContainer>
        </Form>
      </Div>
    </Container>
  );
}

export default LoginPage;
