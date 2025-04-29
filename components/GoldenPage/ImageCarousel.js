import React, { Component } from "react"
import styles from './ImageCarousel.module.scss';
import classnames from "classnames/bind";
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const cx = classnames.bind(styles);
const appUrl = process.env.NEXT_PUBLIC_APP_URL;
function ImageCarousel(props) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        swipeToSlide:false,
        arrows: true,
        autoplay: false,
        autoplaySpeed:5000,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "50px", 
                },
            },
        ],
    };
    return (
        <div className={cx("imageCarousel")}>
            <div className={cx("frameBox")}>
                <div className={cx("carousel")}>
                    <div className={cx("mask")}></div>
                    <Slider {...settings}>
                    
                        <div className={cx("box")}>
                            <a href="#">
                                <div className={cx("img")}>
                                    <img src={`${appUrl}/golden/images/carousel-img.jpg`} alt="logo" width={330} height={264} />
                                </div>
                                <div className={cx("txt")}>草東沒有派對</div>
                                <div className={cx("shortlisted")}>1項入圍</div>                            
                            </a>
                        </div>
                        <div className={cx("box")}>
                            <a href="#">
                                <div className={cx("img")}>
                                    <img src={`${appUrl}/golden/images/carousel-img.jpg`} alt="logo" width={330} height={264} />
                                </div>
                                <div className={cx("txt")}>草東沒有派對</div>
                                <div className={cx("shortlisted")}>1項入圍</div>                            
                            </a>
                        </div>
                        <div className={cx("box")}>
                            <a href="#">
                                <div className={cx("img")}>
                                    <img src={`${appUrl}/golden/images/carousel-img.jpg`} alt="logo" width={330} height={264} />
                                </div>
                                <div className={cx("txt")}>草東沒有派對</div>
                                <div className={cx("shortlisted")}>1項入圍</div>                            
                            </a>
                        </div>
                        <div className={cx("box")}>
                            <a href="#">
                                <div className={cx("img")}>
                                    <img src={`${appUrl}/golden/images/carousel-img.jpg`} alt="logo" width={330} height={264} />
                                </div>
                                <div className={cx("txt")}>草東沒有派對</div>
                                <div className={cx("shortlisted")}>1項入圍</div>                            
                            </a>
                        </div>
                        <div className={cx("box")}>
                            <a href="#">
                                <div className={cx("img")}>
                                    <img src={`${appUrl}/golden/images/carousel-img.jpg`} alt="logo" width={330} height={264} />
                                </div>
                                <div className={cx("txt")}>草東沒有派對</div>
                                <div className={cx("shortlisted")}>1項入圍</div>                            
                            </a>
                        </div>
                        <div className={cx("box")}>
                            <a href="#">
                                <div className={cx("img")}>
                                    <img src={`${appUrl}/golden/images/carousel-img.jpg`} alt="logo" width={330} height={264} />
                                </div>
                                <div className={cx("txt")}>草東沒有派對</div>
                                <div className={cx("shortlisted")}>1項入圍</div>                            
                            </a>
                        </div>
                    </Slider>
                </div>            
            </div>
        </div>
    )
}
export default ImageCarousel;