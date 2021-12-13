import React from 'react'
import styled from 'styled-components'
import { 
    Search, 
    FavoriteBorder,
    ShoppingCart } from '@mui/icons-material';
import { mobile } from '../responsive';

const Container = styled.div`
    flex:1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    position: relative;
    background-color:#ecbce8cc;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    -webkit-box-shadow: 0px 2px 14px -2px rgba(38,8,26,0.78); 
    box-shadow: 0px 2px 14px -2px rgba(38,8,26,0.78);
   
    `;
const ImageContainer = styled.div`
    width: 90%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
    border-radius: 50%;
    border: 1px solid white;
    position: absolute;
    background-color: white;
    object-fit: cover;

  
`;
const Image = styled.img`
    width: 100%;
    height:75% ;
    z-index: 2;
`;
const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    top: 0;
    left:0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover{
        opacity: 1;
    }

`;
const Icon = styled.div`

    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover{
        background-color:#53094dcc ;
        transform: scale(1.1);
    }
`;

function Product({item}) {
    return (
        <Container>
            <ImageContainer>
                <Image src={item.img} alt="" />
            </ImageContainer>
            
            <Info>
                <Icon>
                    <ShoppingCart />
                </Icon>
                <Icon>
                    <Search />
                </Icon>
                <Icon>
                    <FavoriteBorder />
                </Icon>
            </Info>
            
        </Container>
    )
}

export default Product
