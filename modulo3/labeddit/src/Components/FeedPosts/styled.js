import styled from "styled-components";

export const Container = styled.div`
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
  word-wrap: inherit;
  @media screen and (max-device-width: 480px) {
    width: 80%;
  }
`;
export const Conteudo = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-device-width: 480px) {
  }
`;
export const PUsername = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #6f6f6f;
  @media screen and (max-device-width: 480px) {
  }
`;
export const ImgComments = styled.img`
  width: 14.93px;
  height: 14px;

  @media screen and (max-device-width: 480px) {
  }
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
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-device-width: 480px) {
  }
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
  @media screen and (max-device-width: 480px) {
  }
`;
export const Img = styled.img``;
export const Button = styled.button`
  border: none;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-device-width: 480px) {
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
  @media screen and (max-device-width: 480px) {
  }
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
  @media screen and (max-device-width: 480px) {
  }
`;
export const Body = styled.p`
  display: flex;
  align-items: center;
  word-break: break-word;
  @media screen and (max-device-width: 480px) {
  }
`;
