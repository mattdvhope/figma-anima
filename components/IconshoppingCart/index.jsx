import React from "react";
import styled from "styled-components";


function IconshoppingCart(props) {
  const { vector2, vector3, vector4 } = props;

  return (
    <IconshoppingCart1>
      <OverlapGroup2>
        <Vector src="https://anima-uploads.s3.amazonaws.com/projects/61273750e5d09982f3a6f4f8/releases/612737d60a59a61410296668/img/vector-2@2x.png" />
        <Vector1 src={vector2} />
      </OverlapGroup2>
      <FlexRow>
        <Vector2 src={vector3} />
        <Vector3 src={vector4} />
      </FlexRow>
    </IconshoppingCart1>
  );
}

const IconshoppingCart1 = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: column;
  padding: 1.5px 0.4px;
  align-items: flex-end;
`;

const OverlapGroup2 = styled.div`
  width: 19px;
  height: 11px;
  position: relative;
  margin-top: 2px;
  margin-right: 0.21px;
`;

const Vector = styled.img`
  position: absolute;
  width: 16px;
  height: 10px;
  top: 0;
  left: 3px;
`;

const Vector1 = styled.img`
  position: absolute;
  width: 5px;
  height: 2px;
  top: 0;
  left: 0;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 12px;
  margin-top: 1px;
  margin-right: 2.18px;
`;

const Vector2 = styled.img`
  width: 4px;
  height: 4px;
`;

const Vector3 = styled.img`
  width: 4px;
  height: 4px;
  margin-left: 5px;
`;

export default IconshoppingCart;
