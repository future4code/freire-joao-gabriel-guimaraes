import React from 'react';
// import './CardGrande.css'
import styled from 'styled-components';

const CardGrandeCss = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const Imagem = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
    
`

const H4 = styled.h4 `
    margin-bottom: 15px;
`

const Div = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`




function CardGrande(props) {
    return (
        <CardGrandeCss className="bigcard-container">
            <Imagem src={ props.imagem } alt = {props.alt} />
            <Div>
                <H4>{ props.nome }</H4>
                <p>{ props.descricao }</p>
                
            </Div>
        </CardGrandeCss>
    )
}

export default CardGrande;