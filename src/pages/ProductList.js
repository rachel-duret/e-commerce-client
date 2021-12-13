import React from 'react';
import styled  from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewLetter from '../components/NewLetter';
import Products from '../components/Products';
import { mobile } from '../responsive';

const Container = styled.div``;
const Title = styled.h2``;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;
    ${mobile({flexDirection:"column", marginLeft:"auto"})}
`;
const Filter = styled.div`
    display: flex;
    height: 50px;
    justify-content: center;
    align-items: center;
  
 
`;
const FilterText = styled.p`
    font-size: 24px;
    font-weight: 400;
    ${mobile({fontSize:"20px"})}
`;
const Select = styled.select`
    margin-left: 20px;
    cursor: pointer;
    padding: 5px;
    border-radius: 5px;
`;
const Option = styled.option``;

function ProducList() {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected>Color</Option>
                        <Option>White</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Green</Option>
                        <Option>Gray</Option>
                        <Option>Black</Option>
                    </Select>
                    <Select>
                    <Option disabled selected>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select>
                        <Option disabled selected>Price</Option>
                        <Option>Price asc</Option>
                        <Option>Price desc</Option>
                    </Select>
                   
                </Filter>
            </FilterContainer>
            <Products />
            <NewLetter />

            <Footer />
            
        </Container>
    )
}

export default ProducList
