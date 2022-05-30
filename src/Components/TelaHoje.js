import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

import Header from "./shared/Header";
import FooterMenu from "./shared/FooterMenu";
import TokenContext from '../contexts/TokenContext';
import ProgressContext from '../contexts/ProgressContext';

export default function TelaHoje() {
    //Variaveis de estado, const, etc
    const { progress, setProgress, percentage, setPercentage } = useContext(ProgressContext);
    const { token } = useContext(TokenContext);
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";

    const [dataHabitos, setDataHabitos] = useState([]);
    const [feito, setFeito] = useState(false);
    const arrTest = [];

    // dayjs
        const now = dayjs().locale('pt-br').format('dddd');
        const diaCerto = now.charAt(0).toUpperCase() + now.slice(1);
        const date = dayjs().locale('pt-br').format('DD/MM')




// Logica, funçoes


    function buscarHabitos() {
        const promise = axios.get(URL, config)
        promise
            .then((res) => {
                console.log("Listando hábitos de hoje");
                console.log(res.data);
                setDataHabitos(res.data)
                for (let i = 0; i < res.data.length; i++){
                    if(res.data[i].done){
                        arrTest.push(res.data[i].id)
                        setProgress([...arrTest]);
                        setFeito(true);
                    }
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    function montarTelaHabitos() {
        if (dataHabitos.length === 0) {
            return (
                <NenhumHabito>Você não tem nenhum hábito hoje</NenhumHabito>
            )
        }
        else {
            return dataHabitos.map((el, index) => <Habito key={index} id={el.id} name={el.name} done={el.done} currentSequence={el.currentSequence} highestSequence={el.highestSequence} dataHabitos={dataHabitos} setDataHabitos={setDataHabitos} setFeito={setFeito}/>)
        }
    }
    function montarPorcentagem() {
        const concluidos = (progress.length / dataHabitos.length) * 100;
        setPercentage(Math.round(concluidos));

        if (percentage > 0) {
            return (
                <TextoPorcentagem feito={feito}>
                    {percentage}% dos hábitos concluídos
                </TextoPorcentagem>
            )
        }
        return (
            <TextoPorcentagem>
                Nenhum hábito concluído ainda
            </TextoPorcentagem>
        )
    }

    // Render
    useEffect(() => buscarHabitos(), []);
    const TelaHabitos = montarTelaHabitos();
    const ListarPorcentagem = montarPorcentagem();



    return (
        <>
            <Header />
            <Container>
                <TitleContainer>
                    <h1>{diaCerto}, {date}</h1>
                    {ListarPorcentagem}
                </TitleContainer>
                {TelaHabitos}
            </Container>
            <FooterMenu />
        </>
    )
}

function Habito({ id, name, done, currentSequence, highestSequence, dataHabitos, setDataHabitos, setFeito }) {
    const [recorde, setRecorde] = useState(false);
    const { token } = useContext(TokenContext);
    const { progress, setProgress } = useContext(ProgressContext);
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    function testarPorcentagem () {
        if (done) {
            setProgress([...progress, id]);
            setFeito(true);
        }
    }
    function testarRecorde () {
        if (highestSequence === currentSequence){
            setRecorde(true);
        }
        else setRecorde(false);
    }
    function buscarHabitos() {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        const promise = axios.get(URL, config)
        promise
            .then((res) => {
                console.log("Listando hábitos de hoje");
                console.log(res.data);
                setFeito(true)
                setDataHabitos(res.data);
            })
            .catch(err => {
                console.log(err);
                console.log(err.status);
            })
    }
    function habitoFeito () {
        if (!done) {
            const requisicao = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,null, config );
            requisicao
                .then(() => {
                    console.log("marcou");
                    buscarHabitos();
                    testarRecorde();
                    setProgress([...progress, id]);
                })
                .catch((err) => console.log(err));
        }
        else {
            const requisicao = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,null, config);
            requisicao
                .then(() => {
                    console.log("desmarcou")
                    setFeito(true)
                    buscarHabitos()
                    testarRecorde();
                    setProgress(progress.filter((el) => el !== id))
                })
                .catch((err) => console.log(err));
        }
    }
    useEffect(() => testarRecorde(), []);
    return (
        <ContainerHabitos done={done} recorde={recorde}>
            <TextoHabitos>
                <h2>{name}</h2>
                <SequenciaAtual done={done}>
                    Sequência atual: <span>{currentSequence} dias</span>
                </SequenciaAtual>
                <SeuRecorde done={done} recorde={recorde}>
                    Seu recorde: <span>{highestSequence} dias</span>
                </SeuRecorde>
            </TextoHabitos>
            <ContainerIcon done={done} onClick={habitoFeito}>
                <ion-icon name="checkbox"></ion-icon>
            </ContainerIcon>
        </ContainerHabitos>
    )
}


const Container = styled.div`
height: 100%;
min-height: 100vh;
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
`
const TextoPorcentagem = styled.div`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 1rem;
color: ${props => props.feito ? "#8FC549" : "#BABABA"};
`
const NenhumHabito = styled.div`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #666666;

`
const ContainerHabitos = styled.div`
width: 100%;
min-height: 94px;
padding: 0.8rem;
background-color: #FFFFFF;
border-radius: 6px;
margin-bottom: 2rem;

display: flex;
justify-content: space-between;
align-items: center;

    h2 {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;
    color: #666666;
    margin-bottom: 20px;
    margin-top: 10px;
    }
    &:last-child {
    margin-bottom: 80px;
}
`
const TextoHabitos = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
`
const SequenciaAtual = styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 0.8rem;
    color: #666666;
    margin-bottom: 4px;
    span {
    color: ${props => props.done ? "#8FC549" : "#666666"};
    }

`
const SeuRecorde = styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 0.8rem;
    color: #666666;
    span {
    color: ${props => props.recorde && props.done ? "#8FC549" : "#666666"};
    }
`
const ContainerIcon = styled.div`
    ion-icon {
        color: ${props => props.done ? "#8FC549" : "#EBEBEB"};
        font-size: 90px;
    }
`
