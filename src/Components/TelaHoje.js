import { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Header from "./shared/Header";
import FooterMenu from "./shared/FooterMenu";
import TokenContext from '../contexts/TokenContext';

export default function TelaHoje() {

    const { token } = useContext(TokenContext);



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
height: 100%;
width: 100%;
background-color: #F2F2F2;
padding: 1rem;
`