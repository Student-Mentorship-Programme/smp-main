import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Card.module.css"; // Import your Card module CSS
import kushagra from "@/images/pages/team/Kushagra.jpg";
import piyush from "@/images/pages/team/Piyush.jpg";
import shrey from "@/images/pages/team/Shrey.jpg";
import Image from "next/image";

const images = [kushagra, piyush, shrey];

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
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: true,
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
                        <div
                            className={styles.image_wrapper}
                            style={{
                                paddingTop: `${
                                    (imageDimensions[index]?.height /
                                        imageDimensions[index]?.width) *
                                    100
                                }%`,
                            }}
                        >
                            <Image
                                src={image}
                                alt={`Slide ${index + 1}`}
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CustomCard;
