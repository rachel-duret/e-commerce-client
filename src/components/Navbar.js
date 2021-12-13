import React from 'react'
import styled from 'styled-components';
import { Search, Mail, ShoppingCart } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import { mobile } from '../responsive';


const Container = styled.div `
background-color:#ecbce8cc;
height:80px;


`
const Wrapper = styled.div `
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items: center;
${mobile({padding:"10px"})}
`
const Left = styled.div`
flex: 1;
display:flex;
align-items: center;
`;
const Logo = styled.h1`
font-family:  'Dancing Script', cursive;
font-weight: 500;
cursor: pointer;
${mobile({fontSize:"24px", fontWeight:"300px"})}
`;

const Center = styled.div`
flex: 2;
${mobile({flex:"1"})}
`;
const SearchContainer = styled.div`
border: 0.5px solid whitesmoke;
width: 50%;
padding: 5px;
border-radius: 5px;
background-color: whitesmoke;
display: flex;
align-items: center;

`
const Input = styled.input`
border: none;
background-color: whitesmoke;
outline: none;
${mobile({width:"50px"})}

`

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: space-between;
cursor: pointer;
`;

const Language = styled.p`

`

function Navbar() {
    return (
        <Container>
           <Wrapper>
               <Left>
                   <Logo>MaisonLara</Logo>
               </Left>
               <Center>
                   <SearchContainer>
                       <Input placeholder='Search' />
                       <Search style={{color:"gray",fontSize: "16px" }} />
                   </SearchContainer>
               </Center>
               <Right>
                   <Badge badgeContent={4} color="primary">
                        <Mail color="action" />
                   </Badge>
                   <ShoppingCart />
                   <Language>En</Language>
               </Right>

           </Wrapper>
        </Container>
    )
}

export default Navbar
