import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
class ImageGallaryComponent extends React.Component {

    onChangeEvent = () => {
        console.log('onChange Event Triggered');
    }

    onClickItemEvent = () => {
        console.log('onClickItem Event Triggered');
    }

    onClickThumbEvent = () => {
        console.log('onClickThumb Event Triggered');
    }

    onSwipeStartEvent = () => {
        console.log('onSwipeStart Event Triggered');
    }

    onSwipeEndEvent = () => {
        console.log('onSwipeEnd Event Triggered');
    }

    onSwipeMoveEvent = () => {
        console.log('onSwipeMove Event Triggered');
    }

    render() {
        return (
            <div>
    
                <Carousel autoPlay interval="2000" infiniteLoop transitionTime="1000"

                    onChange={this.onChangeEvent}
                    onClickItem={this.onClickItemEvent}
                    onClickThumb={this.onClickThumbEvent}
                    onSwipeStart={this.onSwipeStartEvent}
                    onSwipeEnd={this.onSwipeEndEvent}
                    onSwipeMove={this.onSwipeMoveEvent}

                >
                    <div>
                        <img src="https://www.infojiniconsulting.com/wp-content/uploads/2020/03/women-empowerment--1024x538.jpg" />
                        <p className="legend">Women NGO's</p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/700/400?img=2" />
                        <p className="legend">Animal NGO's</p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/700/400?img=3" />
                        <p className="legend">Children NGO's</p>
                    </div>
                    <div>
                        <img src= "./slider1" />
                        <p className="legend"></p>
                    </div>
                    <div>
                        <img src="./slider2.jpeg" />
                        <p className="legend"></p>
                    </div>
                    <div>
                        <img src="./slider3.jpeg" />
                        <p className="legend"></p>
                    </div>
                </Carousel>
            </div>
        )
    };
}

export default ImageGallaryComponent;