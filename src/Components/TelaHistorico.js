import { useContext } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import styled from "styled-components";
import Header from "./shared/Header";
import FooterMenu from "./shared/FooterMenu";
import { TitleContainer } from "./TelaHabitos"
import ImageContext from '../contexts/ImageContext';



export default function TelaHistorico() {
    const { image, name } = useContext(ImageContext);

    return (
        <>
            <Header />
            <Container>
                <TitleContainer>
                    <h1>Histórico</h1>
                </TitleContainer>
                <Descricao>
                    <h2>Em um update futuro, você poderá ver o histórico dos seus hábitos aqui!</h2>
                </Descricao>
                <ContainerIcon>
                    <img src={image} alt="Seu ícone!" />
                    Agradecemos a preferência, {name}
                </ContainerIcon>
                <ContainerLoader>
                    <ThreeDots color="#00BFFF" height={80} width={80} />
                </ContainerLoader>
            </Container>
            <FooterMenu />
        </>

    )
}

const Container = styled.div`
height: 100%;
min-height: 100vh;
width: 100%;
background-color: #F2F2F2;
padding: 1rem;
`
const ContainerLoader = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const Descricao = styled.div`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #666666;
`
const ContainerIcon = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
object-fit: cover;
width: 100%;
height: 100%;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #666666;
margin-top: 20px;
text-align: center;
    img {
        border-radius: 50%;
        margin-bottom: 20px;
        width: 200px;
        height: 200px;
    }
`