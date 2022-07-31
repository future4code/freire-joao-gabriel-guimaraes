import styled from "styled-components";

export const Img = styled.img`
  display: flex;
  margin: auto;
  @media screen and (max-device-width: 480px) {
  }
`;
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 8%;
  @media screen and (max-device-width: 480px) {
    margin-top: 25%;
  }
`;
export const H2 = styled.p`
  display: flex;
  justify-content: center;

  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 47px;
  margin-top: 5px;
  @media screen and (max-device-width: 480px) {
  }
`;
export const P = styled.p`
  display: flex;
  justify-content: center;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 21px;
  @media screen and (max-device-width: 480px) {
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  @media screen and (max-device-width: 480px) {
  }
`;
export const InputEmail = styled.input`
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
export const InputSenha = styled.input`
  border: 1px solid #d5d8de;
  border-radius: 4px;
  width: 30%;
  height: 60px;
  margin-top: 8px;
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
export const ButtonLogin = styled.button`
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  border-radius: 27px;
  color: white;
  text-align: center;
  width: 30%;
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
export const ButtonSignUp = styled.button`
  border: 1px solid #fe7e02;
  border-radius: 27px;
  text-align: center;
  width: 30%;
  height: 50px;
  color: #fe7e02;
  margin-top: 12px;
  background-color: white;
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
export const Hr = styled.hr`
  width: 30%;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  height: 2px;
  border: none;
  @media screen and (max-device-width: 480px) {
    width: 80%;
  }
`;
