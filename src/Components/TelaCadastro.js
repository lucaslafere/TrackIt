import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../Assets/logo.png'
import { Container, LogoBox, Form, Button, TextLink, Input } from './TelaLogin';
import { ThreeDots } from 'react-loader-spinner';


export default function TelaCadastro() {
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

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

    function cadastrar(event) {
        event.preventDefault();
        setDisabled(true)
        setLoading(true);
        const request = axios.post(URL, body);
        request
            .then(() => {
                console.log("Cadastro feito com sucesso");
                setLoading(false);
                navigate("/");
            })
            .catch(err => {
                alert(err);
                setLoading(false);
                setDisabled(false);
            })
    }

    if (loading){
        return "Carregando, por favor aguarde"
    }
    return (
        <Container>
            <LogoBox>
                <img src={logo} alt="logo trackit" />
            </LogoBox>
            <Form onSubmit={cadastrar} autoComplete='on'>
                <Input
                    required
                    placeholder='email'
                    type='email'
                    autoComplete='email'
                    disabled={disabled}
                    value={email}
                    onChange={e => setEmail(e.target.value)} />
                <Input
                    required
                    placeholder='senha'
                    type='password'
                    autoComplete='new-password'
                    disabled={disabled}
                    value={senha}
                    onChange={e => setSenha(e.target.value)} />
                <Input
                    required
                    placeholder='nome'
                    type='text'
                    autoComplete='username'
                    disabled={disabled}
                    value={nome}
                    onChange={e => setNome(e.target.value)} />
                <Input
                    required
                    placeholder='foto'
                    type='url'
                    disabled={disabled}
                    value={foto}
                    onChange={e => setFoto(e.target.value)} />
                <Button disabled={disabled} type='submit'>
                    {loading ? <ThreeDots color="#FFFFFF" height={80} width={80} /> : 'Cadastrar'}
                </Button>
            </Form>
            <Link to="/">
                <TextLink>Já tem uma conta? Faça login!</TextLink>
            </Link>
        </Container>
    )
}