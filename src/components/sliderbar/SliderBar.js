import React from 'react';
import './siderbar.scss';
import { ArrowLeft, ArrowRight} from '@mui/icons-material';


function SliderBar() {
    return (
        <div className="sliderbarContainer">
            <ArrowLeft className="arrowLeft" />
            <div className="sliderItemContainer">
                    <div className="sliderItem">
                        <div className="imgContainer">
                        <img src="https://img.mytheresa.com/2176/2176/90/jpeg/catalog/product/72/P00530502.jpg" alt="" />
                        </div>
                        
                        <div className="infoContainer">
                            <h2> Kid Skirt   </h2>
                            <p>For 5-10years old</p>
                            <button>Show Now</button>
                        </div>
                        
                    </div>
                    <div className="sliderItem">
                        <div className="imgContainer">
                        <img src="https://cdn.shopify.com/s/files/1/1045/8790/products/AW20_kids_on_the_moon_95.jpg?v=1598901912" alt="" />
                        </div>
                        
                        <div className="infoContainer">
                            <h2> Kid Skirt   </h2>
                            <p>For 5-10years old</p>
                            <button>Show Now</button>
                        </div>
                        
                    </div>
                    <div className="sliderItem">
                        <div className="imgContainer">
                        <img src="https://n.nordstrommedia.com/id/sr3/13ed20a6-1eae-4bfe-a347-a262b727988b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196" alt="" />
                        </div>
                        
                        <div className="infoContainer">
                            <h2> Kid Skirt   </h2>
                            <p>For 5-10years old</p>
                            <button>Show Now</button>
                        </div>
                        
                    </div>

            </div>
            
            <ArrowRight className="arrowRight" />

            
        </div>
    )
}

export default SliderBar
