import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToPostPage, logout } from "../../Route/Coordinator";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { createPost, useRequestData } from "../../Services/requests";
import { BASE_URL } from "../../Constants/url";
import FeedPosts from "../../Components/FeedPosts/FeedPosts";
import useForm from "../../Hooks/useform";
import Pagination from "../../Pagination/Pagination";
import logo from "../../img/logo.png";
import {
  Container,
  Conteudo,
  Header,
  Img,
  ButtonLogout,
  InputTitulo,
  InputPost,
  Form,
  ButtonPost,
  Hr,
  Div,
  InputSearch
} from "./styled";
export const FeedPage = (props) => {
    useProtectedPage();
    const changeToLoginPage = useNavigate();
    const { form, onChange, cleanFields } = useForm({ title: "", body: "" });
    const [page, setPage] = useState(0);
    const [search, setSearch] = useState('')
    const itensPerPage = 5;
    const [posts, isLoading, error, getData] = useRequestData(
      `${BASE_URL}/posts/?page=${page * itensPerPage}&size=${itensPerPage}`
    );
    const onLeftClick = () => {
      if (page > 0) {
        setPage(page - 1);
      }
    };
    const onRightClick = () => {
      if (page + 1 < 50) {
        setPage(page + 1);
      }
    };
    const onChangeSearch = (event) => {
      setSearch(event.target.value)
    }
    const filteredPost = posts && posts.filter((post) => {
      let search1 = search.toLowerCase();
      let posts = post.body.toLowerCase();
      return (
           posts.includes(search1)
        );
    })
    const listPost =
      filteredPost.map((post) => {
        return (
          <FeedPosts
            post={post}
            key={post.id}
            getData={getData}
            body={props.body}
            setBody={props.setBody}
          />
        );
      });
  
    const createdPost = (event) => {
      event.preventDefault();
      const url = `${BASE_URL}/posts`;
      createPost(url, form, getData, cleanFields);
    };
  
    return (
      <Container>
        <Header>
          <Img src={logo} alt="" />
          <InputSearch onChange={onChangeSearch} value = {search} type = 'text' placeholder="Buscar..."/>
          <ButtonLogout onClick={() => logout(changeToLoginPage)}>
            Logout
          </ButtonLogout>
        </Header>
        <div>
          
          <Form onSubmit={createdPost}>
            <InputTitulo
              type="text"
              onChange={onChange}
              name="title"
              placeholder="título do Post *"
              value={form.title}
              required
            />
            <InputPost
              type="text"
              onChange={onChange}
              name="body"
              placeholder="Escreva seu Post... *"
              value={form.body}
              required
            />
            <ButtonPost>Postar</ButtonPost>
          </Form>
          <Hr />
          <Conteudo>
            {isLoading && <p>carregando...</p>}
            {!isLoading && listPost}
          </Conteudo>
          <Div>
            <Pagination
              page={page + 1}
              onLeftClick={onLeftClick}
              onRightClick={onRightClick}
            />
          </Div>
        </div>
      </Container>
    );
  };
  