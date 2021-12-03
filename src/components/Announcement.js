import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 30px;
    background-color:#53094dcc ;
    text-align: center;
    color: white;
`

function Announcement() {
    return (
        <Container className="announcementContainer">
            Super Deal! Free Shipping on Orders Over $50.
            
        </Container>
    )
}

export default Announcement
