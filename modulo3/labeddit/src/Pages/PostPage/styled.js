import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
`;
export const Conteudo1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
export const Button1 = styled.button`
  border: none;
  background-color: transparent;
  margin-left: 5px;
  &:hover {
    cursor: pointer;
  }
`;
export const Header = styled.div`
  background-color: #ededed;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const Img1 = styled.img`
  display: flex;
  margin: auto;
  width: 28.02px;
  height: 28.64px;
`;
export const ButtonLogout = styled.button`
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
`;
export const InputComentario = styled.textarea`
  background: #ededed;
  border-radius: 12px;
  width: 40%;
  height: 130px;
  border: none;
  padding-left: 12px;
  padding-top: 12px;
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #6f6f6f;
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
export const ButtonRes = styled.button`
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  border-radius: 12px;
  color: white;
  text-align: center;
  width: 40%;
  height: 50px;
  border: none;
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
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  gap: 12px;
`;
export const Hr = styled.hr`
  width: 40%;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  height: 2px;
  border: none;
  margin: auto;
  margin-bottom: 12px;
  @media screen and (max-device-width: 480px) {
    width: 80%;
  }
`;
export const Div = styled.div`
  position: relative;
  width: 40%;
  min-height: 167px;
  display: grid;
  grid-template-rows: 16px 1fr 35px;
  align-items: center;
  justify-content: space-between;
  padding: 9px 10px;
  gap: 18px;
  background: #fbfbfb;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-sizing: border-box;
  margin: auto;
  margin-top: 20px;
  @media screen and (max-device-width: 480px) {
    width: 80%;
  }
`;
export const Conteudo = styled.div`
  display: flex;
  align-items: center;
`;
export const PUsername = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #6f6f6f;
`;
export const ImgComments = styled.img`
  width: 14.93px;
  height: 14px;
`;
export const Comment1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  gap: 8px;
  width: 65.33px;
  height: 28px;
  border: 0.793333px solid #ececec;
  border-radius: 28px;
`;
export const Votes1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  gap: 15.92px;
  border: 0.796748px solid #ececec;
  border-radius: 28px;
  height: 28px;
`;
export const Img = styled.img``;
export const Button = styled.button`
  border: none;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;
export const PVote = styled.p`
  margin-bottom: 4px;

  width: 18px;
  height: 12px;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 12px;
  text-align: center;
  color: #6f6f6f;
`;
export const PComment = styled.p`
  margin-bottom: 4px;
  width: 18px;
  height: 12px;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 12px;
  text-align: center;
  color: #6f6f6f;
`;
export const Body = styled.p`
  display: flex;
  align-items: center;
  word-break: break-word;
`;
