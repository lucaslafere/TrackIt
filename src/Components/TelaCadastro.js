import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import logo from '../Assets/logo.png'


export default TelaCadastro() {




    return (
        <Container>
            <LogoBox>
                <img src={logo} alt="logo trackit" />
            </LogoBox>
            <Form>
                <label></label>
                <Input></Input>
                <label></label>
                <Input></Input>
                <Button></Button>
            </Form>
        </Container>
    )
}

const Container = styled.div`

`

const LogoBox = styled.div`

`

const Form = styled.form`

` 