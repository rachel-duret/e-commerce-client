import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import React, { useState } from 'react';
import styled from 'styled-components';
import { sliderItems } from '../data';
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
`

const ArrowL = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width:50px;
    height:50px;
    border-radius: 50%;
    background-color:#ecbce8cc;
    position: absolute;
    top: 0;
    bottom: 0;
    left:10px;
   
    margin: auto;
    cursor: pointer;
    z-index: 10;
`
const ArrowR = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width:50px;
    height:50px;
    border-radius: 50%;
    background-color:#ecbce8cc;
    position: absolute;
    top: 0;
    bottom: 0;
    
    right: 10px;
    margin: auto;
    cursor: pointer;
    z-index: 10;
`

const Wrapper = styled.div`
    display: flex;
    height: 100%;
   

`;
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({flexDirection:"column"})}
   
`;
const ImageContainer = styled.div`
    flex: 1;
    width: 100%;
    height: 100vh;
    ${mobile({height:"30vh"})}
`;
const Image = styled.img`
    height: 80%;
    ${mobile({height:"100%"})}
`;
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    width: 100%;
    height: 100vh;
    background-color: whitesmoke;
    ${mobile({height:"50vh", alignItem:"top"})}
`;
const Title = styled.h2``;
const Desc = styled.p``;
const Bouton = styled.button``;

function Slider() {
    const [sliderIndex, setSliderIndex] = useState(0)
    const length = sliderItems.length
    
    const handleClickLeft = ()=>{
        setSliderIndex(sliderIndex === 0 ? length-1 : sliderIndex -1 );
        console.log(sliderIndex);

    }
    const handleClickRight =()=>{
        //check its last pic or not , if its last one , will start from 0 one.
        setSliderIndex(sliderIndex === length -1 ? 0  : sliderIndex + 1 )
        console.log(sliderIndex);
    }
    return (
        <Container>
            <ArrowL >
                <ArrowLeft onClick={handleClickLeft} />
            </ArrowL>

            <Wrapper>
                {
                sliderItems.map((item, index) =>(
                    sliderIndex === index &&(
                        <Slide key={index}>
                            <ImageContainer>
                                <Image src={item.img} alt="" />
                            </ImageContainer>
                            <InfoContainer>
                                <Title>{item.title}</Title>
                                <Desc>{item.desc}</Desc>
                                <Bouton>Check Now</Bouton>
                            </InfoContainer>
                    </Slide>
                    )
                ))
                }
               
                
            </Wrapper>
            <ArrowR onClick={handleClickRight} >
                <ArrowRight />
            </ArrowR>
            
        </Container>
    )
}

export default Slider
