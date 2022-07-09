import React from "react";
import { Container, Header, Div, H3 } from "./styled";
import Card from "../../components/Card/Card";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import PeopleIcon from "@mui/icons-material/People";
import Loading from "../../components/Loading/Loading";
import axios from "axios";
import { urlApi } from "../../constants/apiUrl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ChoosePerson(props) {
  const choosePersonTrue = (id) => {
    props.setProfiles("");
    const url = `${urlApi}/JoaoGabriel/choose-person`;
    const body = {
      id: `${id}`,
      choice: true,
    };
    axios
      .post(url, body)
      .then((res) => {
        if (res.data.isMatch) {
          toast("❤️ Você tem um novo Match!! ❤️", {
            position: "top-center",
            autoClose: 2000,
            progress: undefined,
          });
        }
        props.getProfileToChoose();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <Div>
      <ToastContainer />
      <Container>
        <Header>
          <IconButton onClick={props.clearProfile} color="secondary">
            <AutorenewIcon color="secondary" />
          </IconButton>
          <H3>AstroMatch</H3>
          <IconButton
            onClick={() => {
              props.getMatches();
            }}
          >
            <PeopleIcon color="secondary" />
          </IconButton>
        </Header>

        {props.profiles !== "" ? (
          <Card
            foto={props.profiles.photo}
            nome={props.profiles.name}
            idade={props.profiles.age}
            bio={props.profiles.bio}
          />
        ) : (
          <Loading />
        )}
        <div>
          <IconButton
            color="secondary"
            size="large"
            onClick={() => {
              props.choosePersonFalse(props.profiles.id);
            }}
          >
            <ClearIcon fontSize="large" color="secondary" />
          </IconButton>
          <IconButton
            color="secondary"
            size="large"
            onClick={() => {
              choosePersonTrue(props.profiles.id);
            }}
          >
            <FavoriteIcon fontSize="large" color="secondary" />
          </IconButton>
        </div>
      </Container>
    </Div>
  );
}

export default ChoosePerson;
