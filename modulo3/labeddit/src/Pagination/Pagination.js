import React from "react";
import { Div, Div1, Button } from "./styled";

const Pagination = (props) => {
  const { page, totalPages, onLeftClick, onRightClick } = props;
  return (
    <Div>
      <Button onClick={onLeftClick}>voltar</Button>
      <Div1>{page}</Div1>
      <Button onClick={onRightClick}>próxima</Button>
    </Div>
  );
};
export default Pagination;
