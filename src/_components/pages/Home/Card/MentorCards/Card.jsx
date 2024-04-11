import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Card.module.css"; // Import your Card module CSS
// import kushagra from "@/images/pages/team/Kushagra.jpg";
// import piyush from "@/images/pages/team/Piyush.jpg";
// import shrey from "@/images/pages/team/Shrey.jpg";
import Image from "next/image";
import Image1 from "@/images/pages/home/Gallery/Image-1.jpeg";
import Image2 from "@/images/pages/home/Gallery/Image-2.jpeg";
import Image3 from "@/images/pages/home/Gallery/Image-3.jpeg";
import Image4 from "@/images/pages/home/Gallery/Image-4.jpeg";
import Image5 from "@/images/pages/home/Gallery/Image-5.jpeg";
import Image6 from "@/images/pages/home/Gallery/Image-6.jpeg";

const images = [Image1, Image2, Image3, Image4, Image5, Image6];

const CustomCard = () => {
    const [containerHeight, setContainerHeight] = useState(null);
    const [imageDimensions, setImageDimensions] = useState([]);

    useEffect(() => {
        if (images[0]) {
            const aspectRatio = images[0].width / images[0].height;
            const containerWidth = document.querySelector(
                `.${styles.card_container}`
            ).offsetWidth;
            const containerHeight = containerWidth / aspectRatio;
            setContainerHeight(containerHeight);
        }
    }, [images]);

    useEffect(() => {
        const loadedImageDimensions = images.map((image) => ({
            width: image.width,
            height: image.height,
        }));
        setImageDimensions(loadedImageDimensions);
    }, [images]);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 8000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1,
                },
            },
        ],
    };

    return (
        <div className={styles.card_container}>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className={styles.card}>
                        <Image
                            src={image}
                            alt={`Slide ${index + 1}`}
                            layout="responsive"
                            width={imageDimensions[index]?.width}
                            height={imageDimensions[index]?.height}
                            objectFit="contain"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CustomCard;
