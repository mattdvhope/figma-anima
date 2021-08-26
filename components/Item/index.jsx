import React from "react";
import NavigationBar from "../NavigationBar";
import ButtonSecondary from "../ButtonSecondary";
import ButtonPrimaryWithIcon from "../ButtonPrimaryWithIcon";
import styled from "styled-components";
import {
  SfprotextBoldJagger22px,
  SfprotextRegularNormalManatee17px,
  SfprodisplayBoldJagger30px,
  ValignTextMiddle,
} from "../../styledMixins";


function Item(props) {
  const { media, overlapGroup1, bostonLettuce, text2, piece, text, title, text3, buttonPrimaryWithIconProps } = props;

  return (
    <Item1>
      <OverlapGroup>
        <Media src={media} />
        <Dots>
          <X1></X1>
          <X2></X2>
          <X2></X2>
        </Dots>
        <NavigationBar />
        <Backdrop>
          <OverlapGroup1 style={{ backgroundImage: `url(${overlapGroup1})` }}>
            <BostonLettuce>{bostonLettuce}</BostonLettuce>
            <Price>
              <Text2>{text2}</Text2>
              <Piece>{piece}</Piece>
            </Price>
            <Text>{text}</Text>
            <Title>{title}</Title>
            <Text1>{text3}</Text1>
            <FlexRow>
              <ButtonSecondary />
              <ButtonPrimaryWithIcon
                text1={buttonPrimaryWithIconProps.text1}
                iconshoppingCartProps={buttonPrimaryWithIconProps.iconshoppingCartProps}
              />
            </FlexRow>
          </OverlapGroup1>
        </Backdrop>
      </OverlapGroup>
    </Item1>
  );
}

const Item1 = styled.div`
  width: 414px;
  display: flex;
  align-items: flex-start;
  background-color: var(--background);
  overflow: hidden;
`;

const OverlapGroup = styled.div`
  width: 422px;
  height: 896px;
  position: relative;
`;

const Media = styled.img`
  position: absolute;
  width: 414px;
  height: 358px;
  top: 0;
  left: 0;
`;

const Dots = styled.div`
  position: absolute;
  height: 8px;
  top: 258px;
  left: 187px;
  display: flex;
  align-items: flex-start;
`;

const X1 = styled.div`
  width: 8px;
  height: 8px;
  background-color: var(--white);
  border-radius: 4px;
`;

const X2 = styled.div`
  width: 8px;
  height: 8px;
  margin-left: 8px;
  background-color: var(--white);
  border-radius: 4px;
`;

const Backdrop = styled.div`
  position: absolute;
  height: 615px;
  top: 281px;
  left: 0;
  display: flex;
  align-items: flex-start;
`;

const OverlapGroup1 = styled.div`
  width: 414px;
  display: flex;
  flex-direction: column;
  padding: 37px 18px;
  align-items: flex-start;
  min-height: 615px;
  background-size: 100% 100%;
`;

const BostonLettuce = styled.div`
  ${ValignTextMiddle}
  ${SfprodisplayBoldJagger30px}
            width: 376px;
  height: 41px;
  align-self: flex-end;
  letter-spacing: 0.41px;
  line-height: 41px;
  white-space: nowrap;
`;

const Price = styled.div`
  width: 159px;
  height: 44px;
  margin-top: 16px;
  margin-left: 2px;
  display: flex;
  align-items: flex-start;
  overflow: hidden;
`;

const Text2 = styled.h1`
  min-height: 44px;
  min-width: 63px;
  font-family: var(--font-family-sf_pro_text-bold);
  font-weight: 700;
  color: var(--text-primary);
  font-size: var(--font-size-xxxl);
  letter-spacing: -0.8px;
  line-height: 43.1px;
  white-space: nowrap;
`;

const Piece = styled.div`
  min-height: 44px;
  margin-left: 3px;
  min-width: 95px;
  font-family: var(--font-family-sf_pro_text-regular);
  color: var(--text-secondary);
  font-size: var(--font-size-xxl2);
  text-align: center;
  letter-spacing: -0.8px;
  line-height: 43.1px;
  white-space: nowrap;
`;

const Text = styled.div`
  min-height: 26px;
  margin-top: 8px;
  margin-left: 2px;
  font-family: var(--font-family-sf_pro_text-medium);
  font-weight: 500;
  color: #05be77;
  font-size: var(--font-size-m);
  letter-spacing: -0.41px;
  line-height: 25.5px;
  white-space: nowrap;
`;

const Title = styled.div`
  ${SfprotextBoldJagger22px}
  min-height: 24px;
  margin-top: 32px;
  margin-left: 2px;
  letter-spacing: -0.41px;
  line-height: 22px;
  white-space: nowrap;
`;

const Text1 = styled.div`
  ${SfprotextRegularNormalManatee17px}
  width: 375px;
  min-height: 194px;
  align-self: flex-end;
  margin-top: 16px;
  letter-spacing: -0.41px;
  line-height: 25.5px;
`;

const FlexRow = styled.div`
  height: 56px;
  display: flex;
  align-items: flex-start;
  min-width: 374px;
  position: relative;
  align-self: center;
  margin-top: 56px;
`;

export default Item;
