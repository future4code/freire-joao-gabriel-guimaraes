import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../Constants/url";
import { goToFeedPage, goToLoginPage } from "../../Route/Coordinator";
import { useRequestData } from "../../Services/requests";
import useForm from "../../Hooks/useform";
import { createComment } from "../../Services/requests";
import PostComments from "../../Components/PostComments/PostComments";
import sair from "../../img/sair.png";
import logo from "../../img/logo.png";
import likeOn from "../../img/likeOn.png";
import likeOff from "../../img/likeOff.png";
import dislikeOn from "../../img/dislikeOn.png";
import dislikeOff from "../../img/dislikeOff.png";
import comments from "../../img/comments.png";
import {
  Container,
  Conteudo1,
  Button1,
  Header,
  Img1,
  ButtonLogout,
  InputComentario,
  ButtonRes,
  Form,
  Hr,
  Div,
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

export const PostPage = (props) => {
  const changeToFeedPage = useNavigate();
  const id = useParams().id;
  const [comments1, isLoading, error, getData] = useRequestData(
    `${BASE_URL}/posts/${id}/comments`
  );
  const { form, onChange, cleanFields } = useForm({ body: "" });

  const listComments =
    comments1 &&
    comments1.map((post) => {
      return <PostComments key={post.id} post={post} getData={getData} />;
    });

  const postComment = (event) => {
    event.preventDefault();
    const url = `${BASE_URL}/posts/${id}/comments`;
    createComment(url, form, getData, cleanFields);
  };

  return (
    <Container>
      <Header>
        <Button1 onClick={() => goToFeedPage(changeToFeedPage)}>
          <img src={sair} alt="" />
        </Button1>
        <Img1 src={logo} alt="" />
        <ButtonLogout onClick={() => goToLoginPage(changeToFeedPage)}>
          Logout
        </ButtonLogout>
      </Header>
      <Div>
        <PUsername>enviado por: {props.body.username}</PUsername>
        <Body>{props.body.body}</Body>
        <Conteudo>
          <Votes1>
            {props.body.userVote === null ? (
              <Button>
                <Img src={likeOff} alt="" />{" "}
              </Button>
            ) : props.body.userVote === 1 ? (
              <Button>
                <Img src={likeOn} alt="" />
              </Button>
            ) : (
              <Button>
                <Img src={likeOff} alt="" />
              </Button>
            )}
            {props.body.voteSum === null ? (
              <PVote>0</PVote>
            ) : (
              <PVote>{props.body.voteSum}</PVote>
            )}
            {props.body.userVote === null ? (
              <Button>
                <Img src={dislikeOff} alt="" />
              </Button>
            ) : props.body.userVote === 1 ? (
              <Button>
                <Img src={dislikeOff} alt="" />
              </Button>
            ) : (
              <Button>
                <Img src={dislikeOn} alt="" />
              </Button>
            )}
          </Votes1>
          <Comment1>
            <ImgComments src={comments} alt="" />
            {props.body.commentCount === null ? (
              <PComment>0</PComment>
            ) : (
              <PComment>{props.body.commentCount}</PComment>
            )}
          </Comment1>
        </Conteudo>
      </Div>
      <Form onSubmit={postComment}>
        <InputComentario
          type="text"
          onChange={onChange}
          value={form.body}
          name="body"
          placeholder="escreva um comentário..."
          required
        />
        <ButtonRes>comentar</ButtonRes>
      </Form>
      <Hr />
      <Conteudo1>
        {isLoading && <p>carregando...</p>}
        {!isLoading && listComments}
      </Conteudo1>
    </Container>
  );
};
