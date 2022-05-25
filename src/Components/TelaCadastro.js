import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import logo from '../Assets/logo.png'
import { Container } from './TelaLogin';
import { LogoBox } from './TelaLogin';
import { Form } from './TelaLogin';
import { Button } from './TelaLogin';
import { TextLink } from './TelaLogin';
import { Input } from './TelaLogin';


export default function TelaCadastro() {
    const [disabled, setDisabled] = useEffect(false);



    return (
        <Container>
            <LogoBox>
                <img src={logo} alt="logo trackit" />
            </LogoBox>
            <Form>
                <Input placeholder='email' disabled={disabled}></Input>
                <Input placeholder='senha' disabled={disabled}></Input>
                <Input placeholder='nome' disabled={disabled}></Input>
                <Input placeholder='foto' disabled={disabled}></Input>
                <Button disabled={disabled}>Cadastrar</Button>
            </Form>
            <TextLink>Já tem uma conta? Faça login!</TextLink>
        </Container>
    )
}