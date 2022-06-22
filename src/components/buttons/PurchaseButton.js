import React from 'react';
import styled from 'styled-components';
import {Caption2, SmallText} from "../styles/TextStyles";
import {Link} from "../../../.cache/gatsby-browser-entry";

function PurchaseButton(props) {
    const {title, subtitle} = props;

    return (
        <Link to='/page-2'>
            <Wrapper>
                <IconWrapper>
                    <Icon src='/images/icons/credit.svg'/>
                    <Ring src='/images/icons/icon-ring.svg'/>
                </IconWrapper>
                <TextWrapper>
                    <Title>{title || 'Get Pro Access'}</Title>
                    <Subtitle>{subtitle || '$19 per month'}</Subtitle>
                </TextWrapper>
            </Wrapper>
        </Link>
    )
}

export default PurchaseButton;

const Wrapper = styled.div`
  width: 280px;
  height: 77px;
  padding: 12px;
  background: linear-gradient(180deg, #FFFFFF 0%, #D9DFFF 100%);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 20px 40px rgba(23, 0, 102, 0.2), inset 0 0 0 0.5px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  display: grid;
  grid-template-columns: 53px auto;
  align-items: center;
  gap: 20px;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  
  :hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 30px 60px rgba(23, 0, 102, 0.5), inset 0 0 0 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-3px);
  }
`;

const Title = styled(Caption2)`
  color: black;
`;

const Subtitle = styled(SmallText)`
  color: black;
  opacity: 0.7;
`;

const TextWrapper = styled.div`
  display: grid;
  gap: 4px;
`;

const Icon = styled.img`
  width: 29px;
  height: 29px;
`;

const Ring = styled.img`
  position: absolute;
  top: -15px;
  left: -16px;
`;

const IconWrapper = styled.div`
  width: 45px;
  height: 45px;
  background: linear-gradient(200.44deg, #4316DB 13.57%, #9076E7 98.38%);
  border-radius: 50%;
  display: grid;
  justify-content: center;
  align-content: center;
  justify-self: center;
  position: relative;
  box-shadow: 0 10px 20px rgba(182, 153, 255, 0.3);
`