import React from "react"
import { useContext } from 'react'
import {GlobalContext} from "../global/context/useContext.js"
import { loterias } from "../constants/loterias";
import { useForm } from "../hooks/useForm.js";
import { useRequestData } from "../services/index.js";
import { BASE_URL } from "../constants/BASE_URL.js";
import styled from "styled-components";
import logo from '../assets/img/logo.png'

const Container = styled.div`
  background-color: ${(props) => {
    switch (props.nome) {
      case 'mega-sena':
          return '#6BEFA3'
      case "quina":
           return '#8666EF'
      case "lotofácil":
           return '#DD7AC6'
      case "lotomania":
            return '#FFAB64'
      case "timemania":
            return '#5AAD7D'
      case "dia de sorte":
            return '#BFAF83'
    }
  }};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  color: white;
  @media screen and (max-device-width: 480px) {
    width: 100vw;
    height: 600px;
  }
`
const Conteudo = styled.div`
  background-color: #EFEFEF;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-device-width: 480px) {
    width: 100vw;
  }
`

const Master = styled.div `
  display: grid;
  grid-template-columns: 613px 1fr;
  height: 100%;
  @media screen and (max-device-width: 480px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 600px 1fr;
  }
`
const Select = styled.select `
  margin-top: 92px;
  margin-left: 96px;
  width: 215.91px;
  height: 45.2px;
`
const Div = styled.div `
  margin-bottom: 92px;
  margin-left: 96px;
`
const P = styled.p `
margin-left: 96px;
`
 

const NumberP = styled.p `
  background-color: white;
  border-radius: 50%;
  width: 111.2px;
  height: 106.36px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 33px;
  @media screen and (max-device-width: 480px) {
    width: 76px;
    height: 76px;
    font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
  }
`
const Divnumber = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  column-gap: 35px;
  row-gap: 35px;
  @media screen and (max-device-width: 480px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 26px;
  }
`
const PFooter = styled.p `
  position: absolute;
  bottom: 97px;
  width: 65%;
  text-align: center;
  @media screen and (max-device-width: 480px) {
    bottom: -500px;
    width: 350px;
  }
`
const PName = styled.p`
font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 37px;
margin-left: 190px;
@media screen and (max-device-width: 480px) {
    margin: auto;
    margin-top: 50%;
  }
`

const PConcurso = styled.p `
  font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
letter-spacing: 0.135em;
@media screen and (max-device-width: 480px) {
  width: 100%;
  text-align: center;
}
`
const PData = styled.p `
 font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
/* margin-top: 14.4px; */
`

const Img = styled.img`
  position: absolute;
  left: 5.99%;
right: 90.31%;
top: 47.41%;
bottom: 47.47%;
  width: 59.29px;
  height: 55.31px;
  @media screen and (max-device-width: 480px) {
    left: 42%;
    top: 40%

  }
`
const SelectLotery = () => {
    const { nome } = useContext(GlobalContext)
    const { setNome } = useContext(GlobalContext)  
    const {formValues, onChange, cleanFields} = useForm({loterias: ""})
    const [data, isLoading, error, getData] = useRequestData(`${BASE_URL}/loterias-concursos`)

    let indexOf = loterias.indexOf(nome)

    let loteria = data && data.filter((lotery) => {
      return lotery.loteriaId === indexOf
    }).map((lotery) => {
      return lotery.concursoId
    })
    const [data1, isLoading1, error1, getData1] =  useRequestData(`${BASE_URL}/concursos/${loteria[0]}`)
    const date =  Date.now(data1?.data)
    const date1 = new Date(date)
    let dias = date1.getDate()
    if(dias.toString().length === 1) {
      dias = '0'+ dias
    }
    const newDate = dias+"/"+(date1.getMonth()+1)+"/"+date1.getFullYear()
    
    return (
        <Master>
          <Container nome = {nome}>
          <Select name = 'loterias' onChange = {(e) => {setNome(e.target.value)}} label = 'loterias' value = {formValues.loterias}>
            <option value = {""}>Escolha uma loteria</option>
              {loterias.map((loteria) => {
                return (
            <option value = {loteria} key = {loteria} >
              {loteria}
            </option>
          )
        })}
      </Select>
     <Img src={logo}/><PName><strong>{nome.toUpperCase()}</strong></PName>
        <Div>
          <PConcurso>concurso</PConcurso>
          <PData><strong>{data1?.id} - {(newDate)}</strong></PData>
        </Div>
          </Container>
         <Conteudo>
         <Divnumber>
         {data1 && data1?.numeros?.map((num) => {
        return <NumberP><b>{num}</b></NumberP>
      })}
         </Divnumber>
          
      <PFooter>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA</PFooter>
          </Conteudo>  
        </Master>
    )
}

export default SelectLotery