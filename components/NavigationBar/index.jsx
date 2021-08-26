import React from "react";
import styled from "styled-components";


function NavigationBar() {
  return (
    <NavigationBar1>
      <Vector src="https://anima-uploads.s3.amazonaws.com/projects/61273750e5d09982f3a6f4f8/releases/612737d60a59a61410296668/img/vector@2x.png" />
    </NavigationBar1>
  );
}

const NavigationBar1 = styled.div`
  position: absolute;
  height: 96px;
  top: 0;
  left: 0;
  display: flex;
  padding: 21px 20px;
  align-items: flex-end;
`;

const Vector = styled.img`
  width: 8px;
  height: 14px;
`;

export default NavigationBar;
