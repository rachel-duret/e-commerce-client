import React from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive';


const Container = styled.div`
    flex: 1;
    margin: 5px;
    height: 70vh;
    position: relative;
    ${mobile({flexDirection:"column"})}
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  
`;
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    opacity: 0.5;
    &:hover{
        opacity: 1;
    }
`;
const Title = styled.h2`
    color: white;
   

`;
const Button = styled.button`
    width: 30%;
    padding: 10px;
    cursor: pointer;
    margin-top: 20px;
   
    border: none;
    &:hover{
        background-color:#d883becc ;
        opacity: 1;
    }
   
`;

function CategoryItem({item}) {
    return (
        <Container>
            <Image src={item.img} />
            <InfoContainer>
                <Title> {item.title} </Title>
                <Button>Show Now</Button>
            </InfoContainer>
            
        </Container>
    )
}

export default CategoryItem
