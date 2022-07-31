import styled from "styled-components";

export const Container = styled.div`
  display: grid;

  grid-template-rows: 50px 1fr;
  @media screen and (max-device-width: 480px) {
  }
`;
export const Header = styled.div`
  background-color: #ededed;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-device-width: 480px) {
  }
`;
export const Img = styled.img`
  display: flex;
  margin: auto;
  width: 28.02px;
  height: 28.64px;
  @media screen and (max-device-width: 480px) {
  }
`;
export const ButtonLogin = styled.button`
  color: #4088cb;
  width: 55px;
  height: 25px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  margin-right: 10px;
  background-color: transparent;
  border: none;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-device-width: 480px) {
  }
`;
export const P = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 43px;
  color: #373737;
  text-align: center;
  margin-top: 15px;
  @media screen and (max-device-width: 480px) {
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  @media screen and (max-device-width: 480px) {
  }
`;
export const InputNome = styled.input`
  border: 1px solid #d5d8de;
  border-radius: 4px;
  width: 30%;
  height: 60px;
  padding-left: 12px;
  margin-bottom: 12px;
  &:hover {
    border: 2px solid #ff6489;
  }
  &:focus {
    border-color: #f9b24e;
    outline: none;
  }
  @media screen and (max-device-width: 480px) {
    width: 80%;
  }
`;
export const InputEmail = styled.input`
  border: 1px solid #d5d8de;
  border-radius: 4px;
  width: 30%;
  height: 60px;
  padding-left: 12px;
  margin-bottom: 12px;
  &:hover {
    border: 2px solid #ff6489;
  }
  &:focus {
    border-color: #f9b24e;
    outline: none;
  }
  @media screen and (max-device-width: 480px) {
    width: 80%;
  }
`;
export const InputSenha = styled.input`
  border: 1px solid #d5d8de;
  border-radius: 4px;
  width: 30%;
  height: 60px;
  padding-left: 12px;
  &:hover {
    border: 2px solid #ff6489;
  }
  &:focus {
    border-color: #f9b24e;
    outline: none;
  }
  @media screen and (max-device-width: 480px) {
    width: 80%;
  }
`;
export const ButtonSignUp = styled.button`
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  border-radius: 27px;
  color: white;
  text-align: center;
  width: 31%;
  height: 50px;
  border: none;
  margin-top: 30px;
  margin-bottom: 12px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-device-width: 480px) {
    width: 81%;
  }
`;
export const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  
  color: #000000;
  margin-top: 50px;
  span {
    color: #4088cb;
    &:hover {
      cursor: pointer;
    }
  }
  @media screen and (max-device-width: 480px) {
  }
`;
export const Div = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;

  margin-right: 2%;
  color: #000000;
  margin-top: 30px;
  max-width: 95%;
  @media screen and (max-device-width: 480px) {
  }
`;
