import { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Header from "./shared/Header";
import FooterMenu from "./shared/FooterMenu";
import TokenContext from '../contexts/TokenContext';
import ProgressContext from '../contexts/ProgressContext';

export default function TelaHoje() {
    const { progress, setProgress } = useContext(ProgressContext);
    const { token } = useContext(TokenContext);
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";

    const [dataHabitos, setDataHabitos] = useState([]);

    function buscarHabitos() {
        const promise = axios.get(URL, config)
        promise 
            .then((res) => {
                console.log("Listando hábitos de hoje");
                console.log(res.data);
                setDataHabitos(res.data)
            })
            .catch(err => {
                console.log(err);
                console.log(err.status);
            })
    }

    function montarTelaHabitos () {
        if (dataHabitos.length === 0) {
            return (
                <NenhumHabito>Você não tem nenhum hábito hoje</NenhumHabito>
            )
        }
        else {
            return dataHabitos.map((el, index) => <Habito key={index} id={el.id} name={el.name} done={el.done} currentSequence={el.currentSequence} highestSequence={el.highestSequence} />)
        }
    }
    // Render
    useEffect(() => buscarHabitos(), []);
    const TelaHabitos = montarTelaHabitos();
    return (
        <>
            <Header/>
            <Container>
                <TitleContainer>
                    <h1>Placeholder day.js</h1>
                    <p>Placeholder hábitos concluídos</p>
                </TitleContainer>
                {TelaHabitos}
            </Container>
            <FooterMenu/>
        </>
    )
}

function Habito ({id, name, done, currentSequence, highestSequence}) {
    return (
        <ContainerHabito>
            <Textohabito>
                <h1>{name}</h1>
                <p>Sequência atual: {currentSequence} dias</p>
                <p>Seu recorde: {highestSequence} dias</p>
            </Textohabito>
            <ion-icon name="checkbox"></ion-icon>
        </ContainerHabito>
    )
}


const Container = styled.div`
height: 100%;
width: 100%;
background-color: #F2F2F2;
padding: 1rem;
`
const TitleContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin-top: 80px;
margin-bottom: 2rem;
gap: 0.4rem;
align-items: flex-start;
    h1 {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: #126BA5;
    }
    p {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    color: #BABABA;
    }
`
const NenhumHabito = styled.div`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #666666;

`
const ContainerHabito = styled.div`
width: 100%;
min-height: 90px;
background-color: #FFFFFF;
border-radius: 6px;
padding: 1rem;
display: flex;
justify-content: space-between;
align-items: center;
`
const Textohabito = styled.div`

`