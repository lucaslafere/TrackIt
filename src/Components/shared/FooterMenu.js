import { Link } from 'react-router-dom';

import styled from "styled-components";

export default function FooterMenu () {
    return (
        <FooterContainer>
            <Link to="/habitos"><TextLink>Hábitos</TextLink></Link>
            <Link to="/hoje"><TextLink>Hoje</TextLink></Link>
            <Link to="/historico"><TextLink>Histórico</TextLink></Link>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
width: 100%;
height: 70px;
display: flex;
justify-content: space-around;
align-items: center;
position: fixed;
bottom: 0px;
left: 0px;
background-color: #FFFFFF;
z-index: 1;
`

const TextLink = styled.div`
font-size: 18px;
line-height: 22px;
text-align: center;
color: #52B6FF;
font-weight: 400;
font-family: 'Lexend Deca';
font-style: normal;
`