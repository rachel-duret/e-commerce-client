import React from 'react';
import styled  from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Container = styled.div``;
const Title = styled.h2``;
const FilterContainer = styled.div``;
const Filter = styled.div``;

function ProducList() {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>1</Filter>
                <Filter>2</Filter>
            </FilterContainer>

            <Footer />
            
        </Container>
    )
}

export default ProducList
