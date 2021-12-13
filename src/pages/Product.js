import { Add, Remove } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewLetter from '../components/NewLetter';
import { mobile } from '../responsive';
const Container = styled.div``;
const Wraper = styled.div`
    display: flex;
    padding: 20px;

    align-items: center;
    ${mobile({flexDirection:"column"})}
`;
const ImageContainer = styled.div`
    flex: 1;

`;
const Image = styled.img`
    width: 100%;
    height: 50vh;
    object-fit: contain;
    cursor: pointer;
    ${mobile({width:"80%", height:"30vh"})}
`;
const InfoContainer = styled.div`
    flex: 1;
    background-color: whitesmoke;
    width: 100%;
  
    padding: 0px 50px;
    display: flex;
    flex-direction: column;
    ${mobile({padding:"0px", justifyContent:"center", alignItem:"center"})}
`;
const Title = styled.h2`
    font-weight: 400;
`;
const Desc = styled.p`
    margin: 20px 0px;
    text-align: left;
`;
const Price = styled.p`
    font-weight: 500;
    font-size: 50px;
    ${mobile({fontSize:"40px", fontWeigth:"400"})}
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    ${mobile({width:"100%", justifyContent:"space-around"})}

`;
const Filter = styled.div`
    display: flex;
    height: 30px;
    align-items: center;
   
`;
const FilterTitle = styled.p`
    font-weight: 400;
    display: flex;
    margin-right: 10px;
    cursor: pointer;
`;

const Select = styled.select`
    padding: 5px;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    border: 0.5px solid #d883becc;

`;
const Option = styled.option`
   
`;

const AddContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;
    width: 50%;
    ${mobile({width:"100%", justifyContent:"space-around", margin:"20px 0px"})}
`;
const AmoutContainer = styled.div`
    display: flex ;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
const Amout = styled.span`
    font-size: 20px;
    font-weight: 300;
    padding: 10px;
`;
const AddButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    border-radius: 5px;
    cursor: pointer;
    border: 0.5px solid #d883becc;
    font-size: 24px;
    font-weight: 500;
    &:hover{
        background-color: #d883becc;
        border: none;
    }

`;

function Product() {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wraper>
                <ImageContainer>
                    <Image src="https://i.ibb.co/DG69bQ4/2.png" />
                </ImageContainer>
                <InfoContainer>
                        <Title>
                        Denim Jumpsuit
                        </Title>
                        <Desc>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                tristique tortor pretium ut. Curabitur elit justo, consequat id
                condimentum ac, volutpat ornare.
                        </Desc>
                        <Price>$ 20</Price>

                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <Select>
                                <Option>Red</Option>
                                <Option >Gray</Option>
                                <Option>Blue</Option>
                                <Option >Black</Option>
                                <Option >Pink</Option>
                            
                            </Select>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <Select>
                                <Option>XS</Option>
                                <Option>S</Option>
                                <Option>M</Option>
                                <Option>L</Option>
                                <Option>XL</Option>
                            
                            </Select>
                        </Filter>
                    </FilterContainer>

                        <AddContainer>
                            <AmoutContainer>
                                <Remove style={{color:"gray"}} />
                                <Amout>1</Amout>
                                <Add style={{color:"gray"}} />
                            </AmoutContainer>
                            <AddButton>Add </AddButton>
                        
                        </AddContainer>
                </InfoContainer>
               
            </Wraper>
            <NewLetter />
            <Footer />
            
        </Container>
    )
}

export default Product
