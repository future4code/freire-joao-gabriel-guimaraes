import React from 'react';
import styled from 'styled-components';
//import './CardPequeno.css'


const CardPequenoCss = styled.div `
    
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 80px;
    
   
`

const Foto = styled.img `
    width: 50px;
    margin-right: 10px;
    border-radius: 50%;
    background-color: white;
`
const Divi = styled.div `
    display: flex;
    
`

 const P = styled.p `
    margin-left: 7px;
`


function CardPequeno(props) {
    return(
        <CardPequenoCss className="smallContainer">
            <Foto src = {props.imagem} alt = {props.alt}/>
            <Divi>
            <h4>{props.titulo}</h4>
            <P className='descricao'>{props.texto}</P>
            </Divi> 
        </CardPequenoCss>

    )
}

export default CardPequeno;