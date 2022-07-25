import React from "react";
import { BASE_URL } from "../../constants/urls";
import { useNavigate } from "react-router-dom";
import { planets } from "../../constants/planets";
import { createTrip } from "../../services/requests";
import useForm from "../../hooks/useForm";
import Button from "@mui/material/Button";
import {
  Container,
  Div,
  Header,
  Form,
  H3,
  Input,
  Input1,
  Select,
} from "./styled";

function CreateTripPage() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const { form, onChange, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  const createTrip1 = (event) => {
    event.preventDefault();
    const url = `${BASE_URL}/trips`;
    createTrip(url, form, cleanFields);
  };
  const today = new Date();
  const stringToday =
    today.getFullYear() +
    "-" +
    ("0" + (today.getMonth() + 1)).substr(-2) +
    "-" +
    ("0" + today.getDate()).substr(-2);

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
        <Form onSubmit={createTrip1}>
          <H3>Criar Viagem:</H3>
          <Input
            InputLabelProps={{
              style: { color: "purple" },
            }}
            sx={{ input: { color: "purple" } }}
            color="secondary"
            margin="normal"
            id="outlined-basic"
            variant="outlined"
            type="text"
            onChange={onChange}
            value={form.name}
            name="name"
            required
            label="nome"
            inputProps={{ pattern: "^.{5,}$" }}
            title={"escreva no mínimo 5 letras"}
          />
          <Select
            name="planet"
            onChange={onChange}
            value={form.planet}
            required
          >
            <option value={""}>Escolha um Planeta</option>
            {planets.map((planet) => {
              return (
                <option value={planet} key={planet}>
                  {planet}
                </option>
              );
            })}
          </Select>
          <Input1
            type="date"
            onChange={onChange}
            value={form.date}
            name="date"
            required
            placeholder="data"
            min={stringToday}
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
            type="text"
            onChange={onChange}
            value={form.description}
            name="description"
            required
            label="descrição"
            inputProps={{ pattern: "^.{30,}$" }}
            title={"escreva no mínimo 30 letras"}
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
            type="number"
            onChange={onChange}
            value={form.durationInDays}
            name="durationInDays"
            required
            label="Duração"
            inputProps={{ min: 50 }}
          />
          <Button
            variant="contained"
            size="small"
            margin="normal"
            color="secondary"
            type="submit"
          >
            Criar Viagem
          </Button>
        </Form>
      </Div>
    </Container>
  );
}

export default CreateTripPage;
