import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 2
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
        slidesToSlide: 3
    },
    mobile: {
        breakpoint: { max: 767, min: 464 },
        items: 2,
        slidesToSlide: 2
    }
};
const sliderImageUrl = [
    {
        url: "./src/assets/cloth1.jpg",
        name: "Kiko Linen Slip Dress,Brown",
        price:"£69.00"
    },
    {
        url: "./src/assets/cloth2.jpg",
        name: "Sleeve Dress, White",
        price:"£99.00 — £69.00"
    },
    {
        url: "./src/assets/cloth3.jpg",
        name: "Hodina Watch",
        price:"£29.00"
    },
    {
        url: "./src/assets/shoe1.jpg",
        name: "Triangle Low White-Black",
        price:"£29.00"
    },
    {
        url: "./src/assets/shoe2.jpg",
        name: "Kid Dress, White",
        price:"£99.00 — £69.00"
    },
    {
        url: "./src/assets/watch1.jpg",
        name: "Lady Shoes, Brown",
        price:"£99.00 — £69.00"
    }
];


const Slider = () => {
    return (
        <div className="parent">
            <Carousel
                responsive={responsive}
                autoPlay={true}
                swipeable={true}
                draggable={true}
                showDots={true}
                infinite={true}
                partialVisible={false}
                dotListClass="custom-dot-list-style"
            >
                {sliderImageUrl.map((imageUrl, index) => {
                    return (
                        <div className="slider" key={index}>
                            <img src={imageUrl.url} alt="movie" />
                            <h6>{imageUrl.name}</h6> 
                            <p>{imageUrl.price}</p>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};
export default Slider;
