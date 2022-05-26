import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Header from "./shared/Header";
import FooterMenu from "./shared/FooterMenu";

export default function TelaHabitos() {
    return (
        <>
            <Header />
            <Container>
                <TitleText>
                    <h1>Meus hábitos</h1>
                    <button>+</button>
                </TitleText>
                <NenhumHabito>Você não tem nenhum hábito <br/>
                 cadastrado ainda. Adicione um hábito para começar a trackear!</NenhumHabito>
            </Container>
            <FooterMenu />
        </>
    )
}

const Container = styled.div`
height: 100vh;
position: fixed;
width: 100%;
background-color: #F2F2F2;
padding: 1rem;
`
const TitleText = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 80px;

h1 {
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 24px;
color: #126BA5;
}
button {
width: 40px;
height: 35px;
background: #52B6FF;
border-radius: 4.63636px;
border: none;
display: flex;
align-items: center;
justify-content: center;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 34px;
color: #FFFFFF;
}
`

const NenhumHabito = styled.div`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #666666;
margin-top: 2rem;

`