import React from "react";
import Iconheart from "../Iconheart";
import styled from "styled-components";
import { Border1pxBorder } from "../../styledMixins";


function ButtonSecondary() {
  return (
    <ButtonSecondary1>
      <Iconheart />
    </ButtonSecondary1>
  );
}

const ButtonSecondary1 = styled.div`
  ${Border1pxBorder}
  width: 78px;
  height: 56px;
  position: relative;
  display: flex;
  padding: 0 29px;
  align-items: center;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
`;

export default ButtonSecondary;
