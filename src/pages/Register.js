import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { mobile } from '../responsive';

const Container = styled.div``;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
const Title = styled.h2``;
const LoginLink = styled.a``;
const Form = styled.div`
    display: flex;
    flex-direction: column;
    margin:20px auto;
    width: 40%;
    height: 60vh;
    background-color: whitesmoke;
    ${mobile({width:"80%", height:"50vh"})}
`;
const Input = styled.input`
    width: 80%;
    height: 30px;
    margin:auto ;
    display: flex;
    align-items: center;
    padding: 5px;

`;
const Button = styled.div`
    width: 80%;
    height: 30px;
    border: 0.5px solid #d883becc;
    padding: 5px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    cursor: pointer;
    font-size: 20px;
    font-weight: 400;
    &:hover{
        background-color: #d883becc;
        border: none;
    }
`;
function Register() {
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <Title> Create An Account</Title>
                <LoginLink href="#">Alredy have an account </LoginLink>
                <Form>
                    <Input placeholder="username" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirme password" />
                    <Button>Register</Button>
                </Form>
            </Wrapper>
            
            
        </Container>
    )
}

export default Register
