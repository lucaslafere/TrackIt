import { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Header from "./shared/Header";
import FooterMenu from "./shared/FooterMenu";
import TokenContext from '../contexts/TokenContext';

export default function TelaHabitos() {
    //Enviados pra API pra criar habito novo
    const [nomeHabitoNovo, setNomeHabitoNovo] = useState("");
    const [diasHabitoNovo, setDiasHabitoNovo] = useState([]);

    //Estados de loading, disabled dos campos, dia selecionado (será movido daqui), abrir caixa de novo hábito
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [openForm, setOpenForm] = useState(false);
    const [selected, setSelected] = useState(false);


    //Dados envolvendo API (get.data dos habitos, enviar token, URL da API, body. config (header token))

    const [dataHabitos, setDataHabitos] = useState([]);
    const { token } = useContext(TokenContext);
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const body = {
        name: nomeHabitoNovo,
        days: diasHabitoNovo
    }
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    //Funçoes de get habitos e post novo habito
    function buscarHabitos() {
        const promise = axios.get(URL, null, config)
        promise
            .then((res) => {
                console.log("Listando habitos do usuario");
                console.log(res.data)
                setDataHabitos(res.data)
            })
            .catch(err => {
                alert(err);
            })
    }

    function enviarHabitoNovo() {
        setLoading(true);
        setDisabled(true);

        const request = axios.post(URL, body, config);
        request
            .then((res) => {
                console.log("Hábito criado com sucesso");
                setNomeHabitoNovo("");
                setDiasHabitoNovo("");
                setLoading(false);
                setDisabled(false);
                setOpenForm(false);
                //carregar aqui a lista de habitos novamente (GET)
            })
            .catch(err => {
                alert(err);
                setDisabled(false);
            })
    }


    // essa funçao abaixo nao está completa, o map de habitos fica aqui
    function montarTelaHabitos() {
        if (dataHabitos.length === 0) {
            return (
                <NenhumHabito>Você não tem nenhum hábito <br />
                    cadastrado ainda. Adicione um hábito para começar a trackear!</NenhumHabito>
            )
        }
        else {
            // return dataHabitos.map((el, index) => <Habito/>)
        }
    }

    //funcao incompleta, falta selecionar os dias. Caixa de criar novo hábito fica aqui
    function criarHabito() {

        //buttondays terá que ser gerado por um Map (array) pra cada um ter seu proprio estado
        if (openForm)
        return (
            <ContainerNovoHabito>
                <Input
                    placeholder='nome do hábito'
                    type='name'
                    disabled={disabled}
                    value={nomeHabitoNovo}
                    onChange={e => setNomeHabitoNovo(e.target.value)} />
                <ContainerDays>
                    <ButtonDays selected={selected} disabled={disabled}>D</ButtonDays>
                    <ButtonDays selected={selected} disabled={disabled}>S</ButtonDays>
                    <ButtonDays selected={selected} disabled={disabled}>T</ButtonDays>
                    <ButtonDays selected={selected} disabled={disabled}>Q</ButtonDays>
                    <ButtonDays selected={selected} disabled={disabled}>Q</ButtonDays>
                    <ButtonDays selected={selected} disabled={disabled}>S</ButtonDays>
                    <ButtonDays selected={selected} disabled={disabled}>S</ButtonDays>
                </ContainerDays>
                <ContainerCreate>
                    <TextLink>Cancelar</TextLink>
                    <SaveButton disabled={disabled} onClick={enviarHabitoNovo}>Salvar</SaveButton>
                </ContainerCreate>
            </ContainerNovoHabito>
        )
    }

    //funcao nova de selecionar dia, totalmente incompleta, vai ser colocada dentro do componente ButtonDays:
    function selecionarDia () {
    }

    //Render
        // useEffect(() => buscarHabitos(), []);
        const TelaHabitos = montarTelaHabitos();
        const AbrirNovoHabito = criarHabito ();
    return (
        <>
            <Header />
            <Container>
                <TitleContainer>
                    <h1>Meus hábitos</h1>
                    <button onClick={() => setOpenForm(true)}>+</button>
                </TitleContainer>
                {openForm ? AbrirNovoHabito : null}
                {TelaHabitos}
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
const TitleContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 80px;
margin-bottom: 2rem;
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
    border-radius: 6px;
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

`
const ContainerNovoHabito = styled.div`
width: 100%;
height: 180px;
background-color: #FFFFFF;
border-radius: 6px;
margin-bottom: 2rem;
padding: 1rem;
display: flex;
flex-direction: column;
gap: 8px;
`
const Input = styled.input`
width: 100%;
height: 45px;

border: 1px solid #D5D5D5;
border-radius: 6px;
padding: 1rem;

opacity: ${props => props.disabled ? 0.7 : 1};
background-color: ${props => props.disabled ? '#F2F2F2' : '#FFFFFF'};

color: #666666;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20px;
::placeholder{
    font-size: 20px;
    color: ${props => props.disabled ? '#AFAFAF;' : '#DBDBDB'};
    font-family: 'Lexend Deca';
    font-style: normal;
}
`
const ContainerDays = styled.div`
display: flex;
gap: 4px;
`

const ButtonDays = styled.button`
width: 2rem;
height: 2rem;

background-color: ${props => props.selected ? "#DBDBDB" : "#FFFFFF"};
border: 1px solid #D5D5D5;
border-radius: 6px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20px;
color: ${props => props.selected ? "#FFFFFF" : "#DBDBDB"};

`
const ContainerCreate = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
gap: 24px;
margin-top: 20px;
`

const TextLink = styled.div`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 1rem;
color: #52B6FF;
`
const SaveButton = styled.button`
    width: 30%;
    height: 35px;
    background: #52B6FF;
    border-radius: 6px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #FFFFFF;
`