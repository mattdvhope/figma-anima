import React from "react";
import IconshoppingCart from "../IconshoppingCart";
import styled from "styled-components";
import { ValignTextMiddle } from "../../styledMixins";


function ButtonPrimaryWithIcon(props) {
  const { text1, iconshoppingCartProps } = props;

  return (
    <ButtonPrimaryWithIcon1>
      <IconshoppingCart
        vector2={iconshoppingCartProps.vector2}
        vector3={iconshoppingCartProps.vector3}
        vector4={iconshoppingCartProps.vector4}
      />
      <Text1>{text1}</Text1>
    </ButtonPrimaryWithIcon1>
  );
}

const ButtonPrimaryWithIcon1 = styled.div`
  height: 56px;
  position: relative;
  margin-left: 21px;
  display: flex;
  padding: 0 65.5px;
  justify-content: flex-end;
  align-items: center;
  min-width: 275px;
  background-color: var(--primary-button-);
  border-radius: 8px;
  cursor: pointer;
`;

const Text1 = styled.div`
  ${ValignTextMiddle}
  height: 18px;
  margin-left: 16px;
  min-width: 106px;
  font-family: var(--font-family-sf_pro_text-semibold);
  color: var(--white);
  font-size: var(--font-size-s);
  letter-spacing: -0.01px;
  line-height: 18px;
  white-space: nowrap;
`;

export default ButtonPrimaryWithIcon;
