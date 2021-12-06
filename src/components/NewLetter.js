import React from 'react'
import styled from 'styled-components';
import { Send } from '@mui/icons-material';

const Container = styled.div`
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Title = styled.h2`
    font-size: 50px;
    margin-bottom: 20px;
`;
const Desc = styled.p`
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 20px;
    color: gray;
`;
const InputContainer = styled.div`
    display: flex;
    width: 50%;
    border: 1px solid lightgray;
    align-items: center;
    justify-content: center;
`;
const Input = styled.input`
    flex: 8;
    border: none;
    padding: 5px;
    &:focus{
        outline: none;
    }
`;
const Button = styled.button`
    flex: 1;
    padding: 5px;
    border: none;
    background-color: #d883becc;
    cursor: pointer;
`;

function NewLetter() {
    return (
        <Container>
            <Title>NewLetter</Title>
            <Desc> Get timely update from your favorite product .</Desc>
            <InputContainer>
                <Input placeholder="Your email " />
                <Button><Send /></Button>
            </InputContainer>
            
        </Container>
    )
}

export default NewLetter
