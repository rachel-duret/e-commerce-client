// @ts-nocheck
import { Add, Remove } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { mobile } from '../responsive';

const Container = styled.div``;
const Wrapper = styled.div`
    padding: 20px;
   
`;
const Title = styled.h2`
    font-weight: 300;
    text-align: center;
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    justify-content: space-between;
`;
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: 0.5px solid #d883becc;
    border-radius: 5px;
    background-color: ${(props) => props.color };
`;
const TopTexts = styled.p`
     ${mobile({fontSize:"16px"})}
`;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection:"column"})}

`;
const Info = styled.div`
    flex: 3;
 
`;
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 0.5px dashed gray;

`;
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;
const Image = styled.img`
    width: 200px;
    ${mobile({width:"100px"})}
`;
const Details = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props)=> props.color};
`;

const ProductSize = styled.span``;
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`;
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`;


const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  min-height: 40vh;
  background-color: whitesmoke;
  ${mobile({marginTop:"20px"})}
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;


const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: 0.5px solid #d883becc;
  border-radius: 5px;
  font-weight: 600;
  &:hover{
      background-color: #d883becc;
      border: none;
      cursor: pointer;
  }
`;

function Cart() {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>My Shopping Cart</Title>
                <Top>
                    <TopButton >Continue Shopping</TopButton>
                    <TopTexts>
                        <TopText>My Shopping Cart</TopText>
                        <TopText>My Wishlist</TopText>
                    </TopTexts>
                    <TopButton color="#d883becc">Checkout Now</TopButton>             
                </Top>

                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://i.ibb.co/DG69bQ4/2.png" />
                                <Details>
                                    <ProductName>
                                       <b> Girl Skrit</b>
                                    </ProductName>
                                    <ProductId>123456789</ProductId>
                                    <ProductColor color="yellow" />
                                    <ProductSize>S</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Remove />
                                    <ProductAmount>2</ProductAmount>
                                    <Add />
                                </ProductAmountContainer>
                                <ProductPrice> $ 30</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>

                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal :</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping :</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount :</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total :</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
            
        </Container>
    )
}

export default Cart
