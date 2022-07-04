import React from 'react';
//import './ImagemButton.css'
import styled from 'styled-components';

const ImagemButtonCss = styled.div`

    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
`


const Foto1 = styled.img `
    width: 30px;
    margin-right: 10px;
`
const Link = styled.a `
    text-decoration: none;
    &:visited {
    color: black;
  }
  &:link{
      color:black;
  }
`

function ImagemButton(props) {
    return (
        <ImagemButtonCss className="image-button-container">
            <Foto1 src={ props.imagem } alt={props.alt}/>
            <Link href= {props.link} target = "_blank">{ props.texto }</Link>
        </ImagemButtonCss>

    )
}

export default ImagemButton;