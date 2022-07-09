import styled from 'styled-components'
import FavoriteIcon from "@mui/icons-material/Favorite";

export const Div = styled.div`
  width: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Icon = styled(FavoriteIcon)`
  transform: scale(7.8);
  animation: example 2s linear 0s infinite alternate;
  @keyframes example {
    from {
      transform: scale(7.8);
    }
    to {
      transform: scale(9.8);
    }
  }
`;
