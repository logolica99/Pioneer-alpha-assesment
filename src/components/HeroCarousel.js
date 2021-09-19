import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel'


export default function HeroCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (


        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
               
                    src={"https://picsum.photos/1920/500"}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>A picture is worth a thousand words</h3>
                    <p> It clearly and beautifully captures your emotions- the joy, the laughter, the tears, you name it. Our pride is in offering the best shoots as we help you tell your story in photos.</p>
                    <button>View Gallery</button>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
}