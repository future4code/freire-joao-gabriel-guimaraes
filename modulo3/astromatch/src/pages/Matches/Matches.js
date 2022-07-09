import React from "react";
import IconButton from "@mui/material/IconButton";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Img1, Div, Header, Div1, Strong, P, H2 } from "./styled";

function Matches(props) {
  return (
    <Div1>
      <Div>
        <Header>
          <IconButton onClick={props.clearProfile} color="secondary">
            <AutorenewIcon color="secondary" />
          </IconButton>
          <H2>Matches</H2>
          <IconButton
            color="secondary"
            onClick={() => {
              props.homePage();
            }}
          >
            <ArrowBackIcon color="secondary" />
          </IconButton>
        </Header>
        <div>
          {props.matchedProfiles.map((profile) => {
            return (
              <P key={profile.name}>
                <Img1 src={profile.photo} alt="" />
                <Strong> {profile.name} </Strong>
              </P>
            );
          })}
        </div>
      </Div>
    </Div1>
  );
}

export default Matches;
