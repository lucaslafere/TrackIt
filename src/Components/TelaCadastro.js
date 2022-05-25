import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import logo from '../Assets/logo.png'
import { Container, LogoBox, Form, Button, TextLink, Input } from './TelaLogin';


export default function TelaCadastro() {
    const [disabled, setDisabled] = useState(false);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [foto, setFoto] = useState("");
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
    const navigate = useNavigate();
    const body = {
        email: email,
        name: nome,
        image: foto,
        password: senha,
    }

    function cadastrar (event) {
        event.preventDefault();
        setDisabled(true)

        const request = axios.post(URL, body);
        request
        .then(() => {
            console.log("Cadastro feito com sucesso" + body);
            navigate("/");
        })
        .catch(err => {
            alert(err);
            setDisabled(false);
        })
    }

    return (
        <Container>
            <LogoBox>
                <img src={logo} alt="logo trackit" />
            </LogoBox>
            <Form onSubmit={cadastrar}>
                <Input required placeholder='email' type='email' disabled={disabled} value={email} onChange={e => setEmail(e.target.value)} ></Input>
                <Input required placeholder='senha' type='password' disabled={disabled} value={senha} onChange={e => setSenha(e.target.value)} ></Input>
                <Input required placeholder='nome' type='text' disabled={disabled} value={nome} onChange={e => setNome(e.target.value)} ></Input>
                <Input required placeholder='foto' type='url' disabled={disabled} value={foto} onChange={e => setFoto(e.target.value)}></Input>
                <Button disabled={disabled} type='submit'>Cadastrar</Button>
            </Form>
            <Link to="/">
            <TextLink>Já tem uma conta? Faça login!</TextLink>
            </Link>
        </Container>
    )
}