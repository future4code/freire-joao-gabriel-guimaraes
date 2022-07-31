import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Constants/url";
import { goToPostPage } from "../../Route/Coordinator";
import { createVote, changeVote, deleteVote } from "../../Services/requests";
import likeOn from "../../img/likeOn.png";
import likeOff from "../../img/likeOff.png";
import dislikeOn from "../../img/dislikeOn.png";
import dislikeOff from "../../img/dislikeOff.png";
import comments from "../../img/comments.png";
import {
  Container,
  Conteudo,
  PUsername,
  ImgComments,
  Comment1,
  Votes1,
  Img,
  Button,
  PVote,
  PComment,
  Body,
} from "./styled";

export default function FeedPosts(props) {
  const changePage = useNavigate();
  let like = 1;
  let dislike = -1;
  const url = `${BASE_URL}/posts/${props.post.id}/votes`;
  const goToPostComments = (id) => {
    goToPostPage(changePage, id);
    props.setBody(props.post);
  };
  const postVote = (curtida) => {
    createVote(
      url,
      curtida,
      props.getData,
    );
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
        <Comment1 onClick={() => goToPostComments(props.post.id)}>
          <ImgComments src={comments} alt="" />
          {props.post.commentCount === null ? (
            <PComment>0</PComment>
          ) : (
            <PComment>{props.post.commentCount}</PComment>
          )}
        </Comment1>
      </Conteudo>
    </Container>
  );
}
