import { useContext, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "./shared/Header";
import FooterMenu from "./shared/FooterMenu";
import TokenContext from "../contexts/TokenContext";
import ProgressContext from "../contexts/ProgressContext";

export default function TelaHistorico() {
    const { token } = useContext(TokenContext);
    const { progress, setProgress } = useContext(ProgressContext);

    const [loading, setLoading] = useState(false);

    return (
        <>
            <Header />
            <Container>

            </Container>
            <FooterMenu />
        </>

    )
}

const Container = styled.div`
height: 100%;
width: 100%;
background-color: #F2F2F2;
padding: 1rem
`