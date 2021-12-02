import React,{useState} from 'react';
import './siderbar.scss';
import { ArrowLeft, ArrowRight} from '@mui/icons-material';
import {sliderItems} from '../../data';



function SliderBar() {

    const [sliderIndex, setSliderIndex] = useState(0);
    const length = sliderItems.length;

    const handleClickLeft = () =>{
       setSliderIndex(sliderIndex === 0 ? length - 1 : sliderIndex -1 )
      /*  console.log(sliderIndex) */
        
    }
    const handleClickRight = () =>{
        setSliderIndex(sliderIndex === length - 1 ? 0 : sliderIndex + 1 )
       /*  console.log(sliderIndex) */
    }

    return (
        <div className="sliderbarContainer">
            <ArrowLeft className="arrowLeft" direction="left" onClick={handleClickLeft} />
            <div className="sliderItemContainer">
                {
                   sliderItems.map((item,index)=>(
                       index === sliderIndex && (
                          <div className="sliderItem" key={index}>
                            <div className="imgContainer">
                            <img src={item.img} alt="" />
                            </div>
                        
                            <div className="infoContainer">
                                <h2> {item.title}  </h2>
                                <p>{item.desc}</p>
                                <button>Show Now</button>
                            </div>   
                          </div>
                       ) 
                   ))
                }   
            </div>
            
            <ArrowRight className="arrowRight" direction="right"  onClick={handleClickRight} />

            
        </div>
    )
}

export default SliderBar
