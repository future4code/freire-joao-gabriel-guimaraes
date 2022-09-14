import React, { useState } from "react";
import { BASE_URL } from "../../Constants/url";
import { createVote, changeVote, deleteVote } from "../../Services/requests";
import likeOn from "../../img/likeOn.png";
import likeOff from "../../img/likeOff.png";
import dislikeOn from "../../img/dislikeOn.png";
import dislikeOff from "../../img/dislikeOff.png";
import {
  Container,
  Conteudo,
  Body,
  PVote,
  Img,
  Votes1,
  PUsername,
  Button,
} from "./styled";
export default function PostComments(props) {
  let like = 1;
  let dislike = -1;
  const url = `${BASE_URL}/comments/${props.post.id}/votes`;
  const postVote = (curtida) => {
    createVote(url, curtida, props.getData);
  };
  const cPostVote = (curtida) => {
    changeVote(url, curtida, props.getData);
  };

  const deletingVote = () => {
    deleteVote(url, props.getData);
  };
  return (
    <Container>
      <PUsername>enviado por: {props.post.username}</PUsername>
      <Body>{props.post.body}</Body>
      <Conteudo>
        <Votes1>
          {props.post.userVote === null ? (
            <Button onClick={() => postVote(like)}>
              <Img src={likeOff} alt="" />{" "}
            </Button>
          ) : props.post.userVote === 1 ? (
            <Button onClick={() => deletingVote()}>
              <Img src={likeOn} alt="" />
            </Button>
          ) : (
            <Button onClick={() => cPostVote(like)}>
              <Img src={likeOff} alt="" />
            </Button>
          )}
          {props.post.voteSum === null ? (
            <PVote>0</PVote>
          ) : (
            <PVote>{props.post.voteSum}</PVote>
          )}
          {props.post.userVote === null ? (
            <Button onClick={() => postVote(dislike)}>
              <Img src={dislikeOff} alt="" />
            </Button>
          ) : props.post.userVote === 1 ? (
            <Button onClick={() => cPostVote(dislike)}>
              <Img src={dislikeOff} alt="" />
            </Button>
          ) : (
            <Button onClick={() => deletingVote()}>
              <Img src={dislikeOn} alt="" />
            </Button>
          )}
        </Votes1>
      </Conteudo>
    </Container>
  );
}
