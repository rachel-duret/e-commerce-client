import { Email, Facebook, Instagram, LinkedIn, Phone, Room, Twitter, YouTube } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';


const Container = styled.div`
    display: flex;
    background-color: whitesmoke;
    margin: 20px 0px;
    ${mobile({flexDirection:"column"})}
`;

const Left = styled.div`
    flex: 1;
`;
const Logo = styled.h1`
    font-family:  'Dancing Script', cursive;
    font-weight: 500;
    cursor: pointer;
`;
const Desc = styled.p`
    color: gray;
`;
const SocialContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;
const IconContainer = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: white;
    background-color: #${(propos)=> propos.color};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-top: 20px;
`;

const Center = styled.div`
    flex: 1;
`;
const Title = styled.h2``;
const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    
`;
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`;

const Right = styled.div`
    flex: 1;
    flex-direction: column;
    padding-left: 20px;
`;
const ContactItem = styled.p`
    display: flex;
    align-items: center;
    cursor: pointer;
`;



function Footer() {
    return (
        <Container>
            <Left>
                <Logo> Maison Lara</Logo>
                <Desc> In Maison Lara all the product is hand made, if you want something special , so you find the right place .</Desc>
                <SocialContainer>
                    <IconContainer color="3B5999"> <Facebook /> </IconContainer>
                    <IconContainer color="E4405F"> <Instagram /> </IconContainer>
                    <IconContainer color="FF0000"> <YouTube /> </IconContainer>
                    <IconContainer color="55ACEE"> <Twitter /> </IconContainer>
                    <IconContainer color="0A66C2"><LinkedIn /> </IconContainer>
                </SocialContainer>
            </Left>

            <Center>
                <Title> Useful Links </Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>

            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{margin:"10px", color:"#3B5999"}} /> 622 Claude Bernarde Sartrouville 78500 France
                </ContactItem>
                <ContactItem>
                    <Phone style={{margin:"10px", color:"#55ACEE"}} /> +33 751697566
                </ContactItem>
                <ContactItem>
                    <Email style={{margin:"10px", color:"#0A66C2"}} /> contact@maisonlara.com
                </ContactItem>
               
            </Right>
            
        </Container>
    )
}

export default Footer
