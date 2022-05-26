import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Header from "./shared/Header";
import FooterMenu from "./shared/FooterMenu";

export default function TelaHoje() {
    return (
        <>
            <Header/>
            <Container>

            </Container>
            <FooterMenu/>
        </>
    )
}

const Container = styled.div`
height: 100vh;
width: 100%;
background-color: #F2F2F2;
`