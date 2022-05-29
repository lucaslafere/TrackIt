import { useContext } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import ProgressContext from '../../contexts/ProgressContext';


export default function FooterMenu () {
    const { progress, percentage } = useContext(ProgressContext);

    return (
        <FooterContainer>
            <Link to="/habitos"><TextLink>Hábitos</TextLink></Link>
            <Link to="/hoje">
                <CirculoProgresso>
                    <CircularProgressbar value={percentage} text={'Hoje'} 
                    background
                    backgroundPadding={6}
                    styles={{
                      background: {
                        fill: "#3e98c7"
                      },
                      text: {
                        fill: "#fff"
                      },
                      path: {
                        stroke: "#fff"
                      },
                      trail: { stroke: "transparent" }
                    }}
                    />  
                </CirculoProgresso>
            </Link>
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
const CirculoProgresso = styled.div`
width: 100px;
margin-bottom: 64px;

`