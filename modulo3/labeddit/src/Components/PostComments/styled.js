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
    background: #FBFBFB;
    border: 1px solid #E0E0E0;
    border-radius: 12px;
    box-sizing: border-box;
    @media screen and (max-device-width : 480px){
        width: 80%;
    }
`
export const Conteudo = styled.div`

    display: flex;
    align-items: center;

`
export const PUsername = styled.p`

font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;
color: #6f6f6f;
    

`
export const Votes1= styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    gap: 15.92px;
    border: 0.796748px solid #ECECEC;
    border-radius: 28px;
    height: 28px;
    

`
export const Img = styled.img`
    
    

`
export const Button = styled.button`

    border: none;
    background-color: transparent;
    &:hover{
        cursor: pointer;
    };

`
export const PVote = styled.p`

        margin-bottom: 4px;
      
        width: 18px;
        height: 12px;
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 12px;
        text-align: center;
        color: #6F6F6F;

`
export const Body = styled.p`

    display: flex;
    align-items: center;
        

`