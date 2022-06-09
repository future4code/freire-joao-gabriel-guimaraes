import React, {Component} from 'react'
import styled from 'styled-components'


const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
    justify-items: center;
`


const Botao = styled.button `
    background-color: white;
    color: black;
    margin-left: 0vw;
    border: 1px solid white;
    &:hover{
        background-color: darkgray;
    }
    
`

export default class SecaoEnviar extends Component {
	

	
	render() {
		
		return ( <CommentContainer>
			
			<Botao 
            onClick={this.props.aoEnviar} 
            nameL={'instagram'} >Instagram
            </Botao>
            
            <Botao 
            onClick={this.props.aoEnviar} 
            nameL = {'facebook'}>Facebook
            </Botao>
            <Botao 
            onClick={this.props.aoEnviar} 
            nameL = {'twitter'}>Twitter
            </Botao>
		</CommentContainer>
        );
	}
}