import React from "react";
import styled from "styled-components";


function Iconheart() {
  return (
    <Iconheart1>
      <Vector src="https://anima-uploads.s3.amazonaws.com/projects/61273750e5d09982f3a6f4f8/releases/612737d60a59a61410296668/img/vector-1@2x.png" />
    </Iconheart1>
  );
}

const Iconheart1 = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  padding: 1.4px 0.5px;
  align-items: flex-end;
`;

const Vector = styled.img`
  width: 19px;
  height: 17px;
`;

export default Iconheart;
